package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/gmadharh/hack-united/be-app/internal/handlers"
)

type ResolutionSubjectRouter struct {
	ResolutionSubjectHandler *handlers.ResolutionSubjectHandler
}

func NewResolutionSubjectRouter(resolutionSubjectHandler *handlers.ResolutionSubjectHandler) *ResolutionSubjectRouter {
	return &ResolutionSubjectRouter{ResolutionSubjectHandler: resolutionSubjectHandler}
}

func (resolutionRouter *ResolutionSubjectRouter) InitializeRouter(router *gin.Engine) {
	router.GET("/resolution-subjects", resolutionRouter.ResolutionSubjectHandler.GetAllSubjects)
}
