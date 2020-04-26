package main

import (
	login "magicLink/logingRPC"
)

type loginService struct {
	login.UnimplementedLoginServer
}
