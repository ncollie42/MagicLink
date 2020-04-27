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
		c <- true
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

	err := l.sendEmail(email.Email, key)
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
			return &login.Jwt{Jwt: "time is over"}, nil
		case <-c:
			fmt.Println("Email clicked")
			delete(l.connectionTable, key)
			return &login.Jwt{Jwt: "Email clicked"}, nil
		case <-ctx.Done():
			fmt.Println("Something happened")
		}
	}
	fmt.Println("func is over")
	return &login.Jwt{Jwt: email.Email}, nil
}

func (l *loginService) sendEmail(email, hash string) error {
	fmt.Println("sending email:", email, hash)
	return nil
}
