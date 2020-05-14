package main

import (
	"fmt"
	"net"
	"os"

	db "magicLink/db"
	login "magicLink/logingRPC"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

func init() {
	if os.Getenv("PASS") == "" {
		fmt.Println("PASS: email password is needed")
		os.Exit(1)
	}
	if os.Getenv("SECRET") == "" {
		fmt.Println("SECRET: missing secret for JWT")
		os.Exit(1)
	}
}

func main() {
	lis, err := net.Listen("tcp", ":4242")
	if err != nil {
		fmt.Println(err)
		return
	}

	grpcServer := grpc.NewServer()
	db := db.Connect()
	defer db.Close()
	service := &loginService{
		connectionTable: map[string]data{},
		db:              db,
	}
	login.RegisterLoginServer(grpcServer, service)
	reflection.Register(grpcServer)

	err = grpcServer.Serve(lis)
	if err != nil {
		fmt.Println("in main", err)
		return
	}
}

/*
	Todo:
		[ ] vue - email validation
		[ ] change email w/ real one
		[ ] host some code on github to host?
		[ ] Verify account
*/
