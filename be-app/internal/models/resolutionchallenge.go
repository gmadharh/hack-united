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
	CreateChallenge(challenge ResolutionChallenge) error
	GetUserChallenges(id int) ([]ResolutionChallenge, error)
	DeleteChallenge(id int) error
}

type ResolutionChallengeModelImpl struct {
	DB *sql.DB
}

func NewResolutionChallengeModel(db *sql.DB) *ResolutionChallengeModelImpl {
	return &ResolutionChallengeModelImpl{DB: db}
}

func (resolutionChallengeModel *ResolutionChallengeModelImpl) CreateChallenge(challenge ResolutionChallenge) error {
	query := `INSERT INTO ResolutionChallenge (challenge, user_id, is_completed) VALUES(?, ?, ?)`

	_, err := resolutionChallengeModel.DB.Exec(query, challenge.Challenge, challenge.UserID,
		challenge.IsCompleted)

	if err != nil {
		fmt.Println("Error querying the database", err)
		return err
	}

	return nil
}

func (resolutionChallengeModel *ResolutionChallengeModelImpl) GetUserChallenges(id int) ([]ResolutionChallenge, error) {
	query := `SELECT * FROM ResolutionChallenge WHERE user_id = ?`

	var challenges []ResolutionChallenge

	rows, err := resolutionChallengeModel.DB.Query(query, id)

	if err != nil {
		fmt.Println("Error Querying database", err)
		return nil, err
	}

	for rows.Next() {
		var challenge ResolutionChallenge

		rows.Scan(&challenge.ID, &challenge.Challenge, &challenge.UserID, &challenge.IsCompleted)

		if err != nil {
			fmt.Println("Error scanning into challenge srruct", err)
			return nil, err
		}
	}

	return challenges, nil
}

func (resolutionChallengeModel *ResolutionChallengeModelImpl) DeleteChallenge(id int) error {
	query := `DELETE FROM ResolutionChallenge WHERE id = ?`

	_, err := resolutionChallengeModel.DB.Exec(query, id)

	if err != nil {
		fmt.Println("Error deleting challenge", err)
		return err
	}

	return nil
}
