package main

import (
	"fmt"
	"net"

	login "magicLink/logingRPC"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

func main() {

	lis, err := net.Listen("tcp", ":4242")
	if err != nil {
		fmt.Println(err)
		return
	}
	// connectionTable = map[string]chan bool{}
	grpcServer := grpc.NewServer()

	login.RegisterLoginServer(grpcServer, &loginService{map[string]chan bool{}})
	reflection.Register(grpcServer)

	err = grpcServer.Serve(lis)
	if err != nil {
		fmt.Println("in main", err)
		return
	}
	fmt.Println("hello world")
}

/*
	Todo:
		[ ] host some code on github to host?
		[ ] send email
		[ ] JWT
		[ ] Verify account

*/
