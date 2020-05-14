package db

import (
	"errors"
	"log"
	"time"

	"github.com/go-pg/pg/v9"
	"github.com/go-pg/pg/v9/orm"
)

type users struct {
	ID       int64 `pg:",:gen_random_uuid()"`
	Name     string
	Email    string    `pg:",unique"`
	LastSeen time.Time `pg:"default:now()"`
}

type application struct {
	ID     int64
	UserID int64
}

type follow struct {
	ID            int64
	ApplicationID int64
	UserID        int64 `pg:",unique"`
}

func createSchema(db *pg.DB) error {
	tables := []interface{}{
		&users{},
		&application{},
		&follow{},
	}

	opts := &orm.CreateTableOptions{
		IfNotExists: true,
	}
	for _, model := range tables {
		err := db.CreateTable(model, opts)
		if err != nil {
			log.Println(err)
		}
	}
	return nil
}

func getUserID(db *pg.DB, email string) int64 {
	user := &users{Email: email}

	_, err := db.Model(user).
		Where("email = ?", user.Email).
		OnConflict("(email) DO UPDATE").
		Set("last_seen = ?", time.Now()).
		Insert()
	if err != nil {
		log.Println(err)
		return -1
	}
	return user.ID
}

func followApplication(db *pg.DB, userID, applicationID int64) error {
	//Verify ApplicationID is valid
	group := &application{ID: applicationID}
	err := db.Select(group)
	if err != nil {
		log.Println("Application does not exist", err)
		return errors.New("Application does not exist")
	}
	//insert user into application
	follow := &follow{ApplicationID: applicationID, UserID: userID}
	_, err = db.Model(follow).OnConflict("DO NOTHING").Insert()
	if err != nil {
		log.Println("Follow error", err)
		return errors.New("Could not insert follow")
	}
	return nil
}

//Hit DB to create or update user, and insert user into Application if not aready
func CreatOrUpdate(db *pg.DB, email string, applicationID int64) int64 {
	userID := getUserID(db, email)
	err := followApplication(db, userID, applicationID)
	if isError(err) {
		return -1
	}
	return userID
}

func Connect() *pg.DB {
	db := pg.Connect(&pg.Options{
		User:     "postgres",
		Password: "42",
		Addr:     "localhost:5432",
		Database: "magicLink",
	})
	createSchema(db)
	return db
}

func isError(err error) bool {
	if err != nil {
		log.Println("it's an error", err)
	}
	return err != nil
}
