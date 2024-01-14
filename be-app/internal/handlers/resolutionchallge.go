package handlers

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strconv"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/gmadharh/hack-united/be-app/internal/models"
	"github.com/gmadharh/hack-united/be-app/internal/utils"
	"github.com/go-resty/resty/v2"
)

type ResolutionChallengeHandler struct {
	DB *models.ResolutionChallengeModelImpl
}

type ChosenSubject struct {
	Subject string `json:"subject"`
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

func (resolutionHandler *ResolutionChallengeHandler) GenerateUserChallenges(context *gin.Context) {
	var subject ChosenSubject

	if err := context.ShouldBindJSON(&subject); err != nil {
		context.JSON(400, gin.H{
			"message": "Error binding subject",
			"error":   err.Error(),
		})
		return
	}

	const gptEndpoint = "https://api.openai.com/v1/chat/completions"
	apiKey := utils.GetValueOfEnvKey("GPT_API_KEY")
	client := resty.New()

	inputPrompt := "Generate 10 user challenges based on this subject: " + subject.Subject

	response, err := client.R().
		SetAuthToken(apiKey).
		SetHeader("Content-Type", "application/json").
		SetBody(map[string]interface{}{
			"model":      "gpt-3.5-turbo",
			"messages":   []interface{}{map[string]interface{}{"role": "system", "content": inputPrompt}},
			"max_tokens": 1000,
		}).
		Post(gptEndpoint)

	if err != nil {
		log.Println("Error sending the request to gpt", err)
		context.JSON(http.StatusInternalServerError, gin.H{
			"message": "Error generating challenges",
			"error":   err.Error(),
		})
		return
	}

	body := response.Body()

	var data map[string]interface{}
	err = json.Unmarshal(body, &data)
	if err != nil {
		fmt.Println("Error while decoding JSON response:", err)
		return
	}

	content := data["choices"].([]interface{})[0].(map[string]interface{})["message"].(map[string]interface{})["content"].(string)

	formattedContent := strings.Split(strings.TrimSpace(content), "\n")

	context.JSON(http.StatusOK, formattedContent)
}
