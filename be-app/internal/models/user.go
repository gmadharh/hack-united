package models

import (
	"database/sql"
	"fmt"
)

type User struct {
	ID        int    `json:"id" db:"id"`
	Email     string `json:"email" db:"email"`
	Password  string `json:"password" db:"password"`
	FirstName string `json:"firstName" db:"first_name"`
	LastName  string `json:"lastName" db:"last_name"`
}

type UserModel interface {
}

type UserModelImpl struct {
	DB *sql.DB
}

func NewUserModel(db *sql.DB) *UserModelImpl {
	return &UserModelImpl{DB: db}
}

func (userModel *UserModelImpl) CreateUser(user User) error {
	query := `INSERT INTO Users (email, password, first_name, last_name) VALUES (?, ?, ?, ?)`

	_, err := userModel.DB.Exec(query, user.Email, user.Password, user.FirstName, user.LastName)

	if err != nil {
		fmt.Println("Error inserting into users table", err)
		return err
	}

	return nil
}

func (userModel *UserModelImpl) GetUserByID(id int) (*User, error) {
	query := `SELECT * FROM User WHERE id = ? `

	var user User

	row := userModel.DB.QueryRow(query, id)

	err := row.Scan(user.Email, user.Password, user.FirstName, user.LastName)

	if err != nil {
		fmt.Println("Error scanning user into struct", err)
		return nil, err
	}

	return &user, nil
}

func (userModel *UserModelImpl) GetUserByEmail(email string) (*User, error) {
	query := `SELECT * FROM User WHERE email = ? `

	var user User

	row := userModel.DB.QueryRow(query, email)

	err := row.Scan(user.Email, user.Password, user.FirstName, user.LastName)

	if err != nil {
		fmt.Println("Error scanning user into struct", err)
		return nil, err
	}

	return &user, nil
}
