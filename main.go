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

	grpcServer := grpc.NewServer()

	login.RegisterLoginServer(grpcServer, &loginService{})
	reflection.Register(grpcServer)

	err = grpcServer.Serve(lis)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println("hello world")
}
