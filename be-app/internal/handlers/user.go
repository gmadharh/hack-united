package handlers

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/gmadharh/hack-united/be-app/internal/models"
	"github.com/gmadharh/hack-united/be-app/internal/utils"
)

type UserHandler struct {
	DB *models.UserModelImpl
}

func NewUserHandler(db *models.UserModelImpl) *UserHandler {
	return &UserHandler{DB: db}
}

func (userHandler *UserHandler) CreateUser(context *gin.Context) {
	var user models.User

	if err := context.ShouldBindJSON(&user); err != nil {
		context.JSON(http.StatusNotAcceptable, gin.H{
			"message": "Error binding JSON",
			"error":   err,
		})
		return
	}

	hashedPassword, err := utils.HashPassword(user.Password)

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{
			"message": "Error hashing password",
			"error":   err,
		})
		return
	}

	user.Password = hashedPassword

	err = userHandler.DB.CreateUser(user)

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{
			"message": "Error creating user",
			"error":   err,
		})
		return
	}

	context.JSON(http.StatusCreated, gin.H{
		"message": "Created user",
	})
}

func (userHandler *UserHandler) GetAllUsers(context *gin.Context) {
	users, err := userHandler.DB.GetAllUsers()

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{
			"message": "Error getting users",
			"error":   err,
		})
		return
	}

	context.JSON(http.StatusOK, gin.H{
		"users": users,
	})
}

func (userHandler *UserHandler) GetUserByID(context *gin.Context) {
	param := context.Param("id")

	id, err := strconv.Atoi(param)

	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{
			"message": "Error converting parameter to integer",
			"error":   err,
		})
		return
	}

	user, err := userHandler.DB.GetUserByID(id)

	if err != nil {
		context.JSON(http.StatusNotFound, gin.H{
			"message": "User Not found",
			"erorr":   err,
		})
		return
	}

	context.JSON(http.StatusOK, gin.H{
		"user": user,
	})
}

func (userHandler *UserHandler) GetUserByEmail(context *gin.Context) {

	var user *models.User

	if err := context.ShouldBindJSON(&user); err != nil {
		context.JSON(http.StatusNotAcceptable, gin.H{
			"message": "Error binding JSON",
			"error":   err,
		})
		return
	}

	user, err := userHandler.DB.GetUserByEmail(user.Email)

	if err != nil {
		context.JSON(http.StatusNotFound, gin.H{
			"message": "User Not found",
			"erorr":   err,
		})
		return
	}

	context.JSON(http.StatusOK, gin.H{
		"user": user,
	})
}

func (userHandler *UserHandler) AuthenticateUser(context *gin.Context) {
	var userLogin models.User

	if err := context.ShouldBindJSON(&userLogin); err != nil {
		context.JSON(http.StatusNotAcceptable, gin.H{
			"message": "Error binding to JSON",
			"error":   err,
		})
		return
	}

	user, err := userHandler.DB.GetUserByEmail(userLogin.Email)

	if err != nil {
		context.JSON(http.StatusNotFound, gin.H{
			"message": "User not found",
			"error":   err,
		})
		return
	}

	matches := utils.ComparePasswords(userLogin.Password, user.Password)

	if !matches {
		context.JSON(http.StatusNotAcceptable, gin.H{
			"message": "Passwords do not match",
		})
		return
	}

	token, err := utils.GenerateJWTToken(user.FirstName, user.LastName, user.Email, user.ID)

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{
			"message": "Error generating JWT",
			"error":   err,
		})
		return
	}

	context.JSON(http.StatusOK, gin.H{
		"token": token,
	})
}
