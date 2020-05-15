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
type sendingEmail struct {
	ToEmail string
	Subject string
	Link    string
}

func sendMail(emailInfo sendingEmail) error {
	gmailSMTP := "smtp.gmail.com:587"
	fromEmail := "42.matcha.project@gmail.com"
	pass := os.Getenv("PASS")
	toEmail := emailInfo.ToEmail
	msg := []byte("To: " + emailInfo.ToEmail + "\r\n" +
		"Subject:" + emailInfo.Subject + "\n\n" +
		"Click button below to log\nThis link will expire in 10 minutes\n\n" +
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

type customClaims struct {
	UserID int64 `json:"userID"`
	jwt.StandardClaims
}

func newJWT(userID int64) string {
	claims := customClaims{
		userID,
		jwt.StandardClaims{
			ExpiresAt: time.Now().Add(1 * time.Hour).Unix(),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	tokenString, err := token.SignedString([]byte(os.Getenv("SECRET")))
	fmt.Println(tokenString)
	if err != nil {
		fmt.Println(err)
	}
	return tokenString
}

func verifyJWT(str string) bool {
	token, err := jwt.ParseWithClaims(str, &customClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte(os.Getenv("SECRET")), nil
	})
	if isError(err) {
		return false
	}
	if claims, ok := token.Claims.(*customClaims); ok && token.Valid {
		fmt.Println(claims.StandardClaims.ExpiresAt)
		return true
	}
	fmt.Println(err)
	return false
}

//----------------------------------
