package handlers

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/gmadharh/hack-united/be-app/internal/models"
)

type ResolutionChallengeHandler struct {
	DB *models.ResolutionChallengeModelImpl
}

func NewResolutionChallengeModel(db *models.ResolutionChallengeModelImpl) *ResolutionChallengeHandler {
	return &ResolutionChallengeHandler{DB: db}
}

func (resolutionHandler *ResolutionChallengeHandler) CreateChallenge(context *gin.Context) {

	var resolutionChallenge models.ResolutionChallenge

	if err := context.ShouldBindJSON(&resolutionChallenge); err != nil {
		context.JSON(400, gin.H{
			"message": "Error binding user",
			"error":   err.Error(),
		})
		return
	}

	err := resolutionHandler.DB.CreateChallenge(resolutionChallenge)

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{
			"message": "Error creating challenge",
			"error":   err.Error(),
		})
		return
	}

	context.JSON(http.StatusOK, gin.H{
		"message": "Challenge created successfully",
	})
}

func (resolutionHandler *ResolutionChallengeHandler) GetUserChallenges(context *gin.Context) {
	param := context.Param("id")
	id, err := strconv.Atoi(param)

	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{
			"message": "Invalid user id",
			"error":   err.Error(),
		})
		return
	}

	challenges, err := resolutionHandler.DB.GetUserChallenges(id)

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{
			"message": "Error getting challenges",
			"error":   err.Error(),
		})
		return
	}

	context.JSON(http.StatusOK, challenges)
}

func (resolutionHandler *ResolutionChallengeHandler) DeleteChallenge(context *gin.Context) {
	param := context.Param("id")
	id, err := strconv.Atoi(param)

	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{
			"message": "Invalid user id",
			"error":   err.Error(),
		})
		return
	}

	err = resolutionHandler.DB.DeleteChallenge(id)

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{
			"message": "Error deleting challenge",
			"error":   err.Error(),
		})
		return
	}

	context.JSON(http.StatusOK, gin.H{
		"message": "Challenge deleted successfully",
	})
}
