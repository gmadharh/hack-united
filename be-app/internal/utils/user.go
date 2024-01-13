package utils

import (
	"fmt"

	"github.com/golang-jwt/jwt"
	"golang.org/x/crypto/bcrypt"
)

var secretKey = []byte("my-secret-key")

func HashPassword(password string) (string, error) {
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)

	if err != nil {
		fmt.Println("Error hasing password", err)
		return "", err
	}

	return string(hashedPassword), nil
}

func ComparePasswords(hashedPassword, password string) bool {

	err := bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(password))

	return err == nil
}

func GenerateJWTToken(firstName, lastName, email string, id, role int) (string, error) {

	token := jwt.New(jwt.SigningMethodHS256)

	claims := token.Claims.(jwt.MapClaims)

	claims["id"] = id
	claims["email"] = email
	claims["firstName"] = firstName
	claims["lastName"] = lastName

	tokenString, err := token.SignedString(secretKey)

	if err != nil {
		fmt.Println("Error converting token to string", err)
		return "", err
	}

	return tokenString, nil
}
