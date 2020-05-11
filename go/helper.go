package main

import (
	"errors"
	"fmt"
	"log"
	"math/rand"
	"net/smtp"
	"os"
	"time"
	"unsafe"

	"github.com/dgrijalva/jwt-go"
)

//-------------------------------------------------------------------------------------
/*
	from stackoverflow
	generates a random string
*/
const letterBytes = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

var src = rand.NewSource(time.Now().UnixNano())

const (
	letterIdxBits = 6                    // 6 bits to represent a letter index
	letterIdxMask = 1<<letterIdxBits - 1 // All 1-bits, as many as letterIdxBits
	letterIdxMax  = 63 / letterIdxBits   // # of letter indices fitting in 63 bits
)

func randomString(n int) string {
	b := make([]byte, n)
	// A src.Int63() generates 63 random bits, enough for letterIdxMax characters!
	for i, cache, remain := n-1, src.Int63(), letterIdxMax; i >= 0; {
		if remain == 0 {
			cache, remain = src.Int63(), letterIdxMax
		}
		if idx := int(cache & letterIdxMask); idx < len(letterBytes) {
			b[i] = letterBytes[idx]
			i--
		}
		cache >>= letterIdxBits
		remain--
	}

	return *(*string)(unsafe.Pointer(&b))
}

//-------------------------------------------------------------------------------------
// TODO: change matcha toEmail to acutal
type sendingEmail struct {
	ToEmail string
	Subject string
	Link    string
}

func sendMail(emailInfo sendingEmail) error {
	gmailSMTP := "smtp.gmail.com:587"
	fromEmail := "42.matcha.project@gmail.com"
	pass := os.Getenv("PASS")
	toEmail := "42.matcha.project@gmail.com" //Update this later to email from args
	msg := []byte("To: " + emailInfo.ToEmail + "\r\n" +
		"Subject:" + emailInfo.Subject + "\n\n" +
		"Click button below to log\nThis link will expire in 10 seconds\n\n" +
		emailInfo.Link)
	auth := smtp.PlainAuth(
		"",
		fromEmail,
		pass,
		"smtp.gmail.com",
	)
	err := smtp.SendMail(gmailSMTP, auth, fromEmail, []string{toEmail}, msg)
	if isError(err) {
		return errors.New("Could not send email")
	}
	return nil
}

//-------------------------------------------------------------------------------------

func isError(err error) bool {
	if err != nil {
		log.Println("it's an error", err)
	}
	return err != nil
}

//-------------------------------------------------------------------------------------

func newJWT() string {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"foo": "bar",
		"id":  "123",
	})
	tokenString, err := token.SignedString([]byte("hmacSampleSecret"))
	fmt.Println(tokenString)
	if err != nil {
		fmt.Println(err)
	}
	return tokenString
}

//----------------------------------

func createUpdate(email string, key int) (userID int) {
	//go to database, use key to find tab
	//insert / update
	return 42
}
