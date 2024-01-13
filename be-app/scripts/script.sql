CREATE SCHEMA IF NOT EXISTS NewYearsChallenge;
USE NewYearsChallenge;

DROP TABLE IF EXISTS ResolutionChallenge;
DROP TABLE IF EXISTS ResolutionSubject;
DROP TABLE IF EXISTS Users;

CREATE TABLE Users(
    ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    points INT NOT NULL
);

CREATE TABLE ResolutionSubject(
    id INT PRIMARY KEY AUTO_INCREMENT,
    subject VARCHAR(255) NOT NULL
);

CREATE TABLE ResolutionChallenge(
    id INT PRIMARY KEY AUTO_INCREMENT,
    challenge VARCHAR(255) NOT NULL,
    user_id INT NOT NULL,
    is_completed BOOL NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

INSERT INTO ResolutionSubject(subject) 
VALUES
    ('Fitness and Health'),
    ('Learning and Development'),
    ('Career and Professional Growth'),
    ('Financial Resolutions'),
    ('Relationships'),
    ('Hobbies and Creativity'),
    ('Social and Community Involvement');