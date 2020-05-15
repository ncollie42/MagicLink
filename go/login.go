package main

import (
	"context"
	"errors"
	"fmt"
	"time"

	db "magicLink/db"
	login "magicLink/logingRPC"

	"github.com/go-pg/pg/v9"
)

type data struct {
	email         string
	applicationID int64
	c             chan int64
}

type loginService struct {
	connectionTable map[string]data
	db              *pg.DB
}

func (l *loginService) ConfirmLogin(ctx context.Context, hash *login.Code) (*login.Empty, error) {
	if data, ok := l.connectionTable[hash.Code]; ok {
		userID := db.CreatOrUpdate(l.db, data.email, data.applicationID)
		data.c <- userID
	} else {
		return &login.Empty{}, errors.New("This link(hash) is not valid")
	}
	return &login.Empty{}, nil
}

//check ctx if page is closed early?
func (l *loginService) Login(ctx context.Context, request *login.LoginInfo) (*login.Jwt, error) {
	c := make(chan int64)
	key := randomString(15)

	l.connectionTable[key] = data{
		email:         request.Email,
		applicationID: request.Key,
		c:             c,
	}

	fmt.Println(request.Email, key, request.Key)

	emailBody := sendingEmail{
		ToEmail: request.Email,
		Subject: "Email confirmation",
		Link:    "localhost:8090/#/confirmation/?code=" + key,
	}
	err := sendMail(emailBody)
	if isError(err) {
		return &login.Jwt{}, err
	}

	waitTime := 10
	ticker := time.NewTicker(time.Duration(waitTime) * time.Minute).C
	for {
		select {
		case <-ticker:
			fmt.Println("Time is over gonna end")
			delete(l.connectionTable, key)
			return &login.Jwt{Jwt: ""}, errors.New("Email has expired")
		case userID := <-c:
			fmt.Println("Email clicked")
			delete(l.connectionTable, key)
			if userID > 0 {
				return &login.Jwt{Jwt: newJWT(userID)}, nil
			}
			return &login.Jwt{}, errors.New("Invalid ApplicationID")

		case <-ctx.Done():
			fmt.Println("Something happened")
			return &login.Jwt{}, errors.New("ctx was trigered")
		}
	}
}

func (l *loginService) IsLoggedIn(ctx context.Context, jwt *login.Jwt) (*login.Status, error) {
	if verifyJWT(jwt.Jwt) {
		fmt.Println("it's valid")
		return &login.Status{IsLoggedIn: true}, nil
	}

	fmt.Println("It's not valid")
	return &login.Status{IsLoggedIn: false}, errors.New("jwt is not valid")
}
