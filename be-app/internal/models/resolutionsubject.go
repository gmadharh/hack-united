package models

import (
	"database/sql"
	"fmt"
)

type ResolutionSubject struct {
	ID      int    `json:"id" db:"id"`
	Subject string `json:"subject" db:"subject"`
}

type ResolutionSubjectModel interface {
	GetAllSubjects() ([]ResolutionSubject, error)
}

type ResolutionSubjectModelImpl struct {
	DB *sql.DB
}

func NewResolutionModel(db *sql.DB) *ResolutionSubjectModelImpl {
	return &ResolutionSubjectModelImpl{DB: db}
}

func (resolutionModel *ResolutionSubjectModelImpl) GetAllSubjects() ([]ResolutionSubject, error) {
	query := `SELECT * FROM ResolutionSubject`
	var subjects []ResolutionSubject

	rows, err := resolutionModel.DB.Query(query)

	if err != nil {
		fmt.Println("Error querying database", err)
		return nil, err
	}

	for rows.Next() {
		var subject ResolutionSubject

		if err := rows.Scan(&subject.ID, &subject.Subject); err != nil {
			fmt.Println("Error scanning rows", err)
			return nil, err
		}

		subjects = append(subjects, subject)
	}

	return subjects, nil
}
