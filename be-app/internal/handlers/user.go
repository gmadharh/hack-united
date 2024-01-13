package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gmadharh/hack-united/be-app/internal/models"
)

type UserHandler struct {
	DB *models.UserModelImpl
}

func (userHandler *UserHandler) CreateUser(context *gin.Context) {
	var user models.User

	if err := context.ShouldBindJSON(&user); err != nil {
		context.JSON(http.StatusNotAcceptable, gin.H{
			"message": "Error binding JSON"
		})
	}
}
