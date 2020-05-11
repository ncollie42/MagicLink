package main

import (
	"context"
	"errors"
	"fmt"
	"time"

	login "magicLink/logingRPC"
)

type loginService struct {
	connectionTable map[string](chan bool)
}

func (l *loginService) AcceptEmail(ctx context.Context, hash *login.Code) (*login.TmpReturn, error) {
	fmt.Println("Got a acceptEmail call")

	if c, ok := l.connectionTable[hash.Code]; ok {
		//notify email link has been clicked
		fmt.Println("clicked!")
		//Go to database 'update/create/
		c <- true //send jwt info into channel
	} else {
		return &login.TmpReturn{Str: "Bad"}, errors.New("This link(hash) is not valid")
	}
	return &login.TmpReturn{Str: "Ok"}, nil
}

//check ctx if page is closed early?
func (l *loginService) SendEmail(ctx context.Context, email *login.Email) (*login.Jwt, error) {
	c := make(chan bool)
	key := randomString(15)
	l.connectionTable[key] = c
	fmt.Println(email.Email, key)
	emailBody := sendingEmail{
		ToEmail: email.Email,
		Subject: "Email confirmation",
		Link:    "localhost:8090/#/confirmation/?code=" + key,
	}
	err := sendMail(emailBody)
	if isError(err) {
		return &login.Jwt{}, err
	}

	sleepTime := 10 // change to minutes,from seconds
	ticker := time.NewTicker(time.Duration(sleepTime) * time.Second).C
	for {
		select {
		case <-ticker:
			fmt.Println("Time is over gonna end")
			delete(l.connectionTable, key)
			return &login.Jwt{Jwt: ""}, errors.New("Email has expired")
		case <-c:
			fmt.Println("Email clicked")
			delete(l.connectionTable, key)
			return &login.Jwt{Jwt: newJWT()}, nil
		case <-ctx.Done():
			fmt.Println("Something happened")
		}
	}
	fmt.Println("func is over")
	return &login.Jwt{Jwt: email.Email}, nil
}
