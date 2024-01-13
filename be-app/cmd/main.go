package main

import (
	"log"

	"github.com/gin-gonic/gin"
	"github.com/gmadharh/hack-united/be-app/config"
	"github.com/gmadharh/hack-united/be-app/internal/handlers"
	"github.com/gmadharh/hack-united/be-app/internal/models"
	"github.com/gmadharh/hack-united/be-app/internal/routes"
	"github.com/gmadharh/hack-united/be-app/pkg/db"
	_ "github.com/go-sql-driver/mysql"
)

func main() {
	cf, err := config.StartConfiguration()

	if err != nil {
		log.Fatal(err)
	}

	database, err := db.Connect(cf.Database.Drivername, cf.Database.DataSourceName)
	defer database.Close()

	if err != nil {
		log.Fatal(err)
	}

	r := gin.Default()

	r.Use(func(c *gin.Context) {
		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
		c.Header("Access-Control-Allow-Headers", "*")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	})

	userModel := models.NewUserModel(database)
	userHandler := handlers.NewUserHandler(userModel)
	userRouter := routes.NewUserRouter(userHandler)
	userRouter.InitializeRouter(r)

	log.Fatal(r.Run(cf.Port))
}
