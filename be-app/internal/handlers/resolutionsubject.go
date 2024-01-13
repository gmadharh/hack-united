package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gmadharh/hack-united/be-app/internal/models"
)

type ResolutionSubjectHandler struct {
	DB *models.ResolutionSubjectModelImpl
}

func NewResolutionHandler(db *models.ResolutionSubjectModelImpl) *ResolutionSubjectHandler {
	return &ResolutionSubjectHandler{DB: db}
}

func (resolutionHandler *ResolutionSubjectHandler) GetAllSubjects(context *gin.Context) {

	subjects, err := resolutionHandler.DB.GetAllSubjects()

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{
			"message": "Error retrieving subjects",
			"error":   err,
		})
		return
	}

	context.JSON(http.StatusOK, gin.H{
		"subjects": subjects,
	})
}
