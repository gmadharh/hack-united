package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/gmadharh/hack-united/be-app/internal/handlers"
)

type ResolutionChallengeRouter struct {
	Resolutionhandler *handlers.ResolutionChallengeHandler
}

func NewResolutionChallengeRouter(resolutionhandler *handlers.ResolutionChallengeHandler) *ResolutionChallengeRouter {
	return &ResolutionChallengeRouter{Resolutionhandler: resolutionhandler}
}

func (resolutionRouter *ResolutionChallengeRouter) InitializeRouter(router *gin.Engine) {
	router.GET("/user/resolution-challenge/:id", resolutionRouter.Resolutionhandler.GetUserChallenges)
	router.POST("/user/resolution-challenge/generate", resolutionRouter.Resolutionhandler.GenerateUserChallenges)
	router.POST("/user/resolution-challenge/new", resolutionRouter.Resolutionhandler.CreateChallenge)
	router.DELETE("/user/resolution-challenge/:id", resolutionRouter.Resolutionhandler.DeleteChallenge)
}
