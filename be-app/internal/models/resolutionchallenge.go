package models

import (
	"database/sql"
	"fmt"
)

type ResolutionChallenge struct {
	ID          int    `json:"id" db:"id"`
	Challenge   string `json:"challenge" db:"challenge"`
	UserID      int    `json:"userID" db:"user_id"`
	IsCompleted bool   `json:"isCompleted" db:"is_completed"`
}

type ResolutionChallengeModel interface {
}

type ResolutionChallengeModelImpl struct {
	DB *sql.DB
}

func NewResolutionChallengeModel(db *sql.DB) *ResolutionChallengeModelImpl {
	return &ResolutionChallengeModelImpl{DB: db}
}

func (resolutionChallengeModel *ResolutionChallengeModelImpl) CreateChallenge(challenge ResolutionChallenge) error {
	query := `INSERT INTO ResolutionChallenge (challenge, user_id, is_completed) VALUES(?, ?, ?)`

	_, err := resolutionChallengeModel.DB.Exec(query, challenge.Challenge, challenge.ID,
		challenge.IsCompleted)

	if err != nil {
		fmt.Println("Error querying the database", err)
		return err
	}

	return nil
}

func (resolutionChallengeModel *ResolutionChallengeModelImpl) DeleteChallenge(id int) error {
	query := `DELETE FROM ResolutionChallenge WHERE id = ?`

	fmt.Println(query)
	return nil
}
