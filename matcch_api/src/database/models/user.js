import db from "#database/client.js";

db.query(
  `
	CREATE TABLE IF NOT EXISTS USER (
		id INT auto_increment NOT NULL,
		name VARCHAR(255) NOT NULL,
		email VARCHAR(512) NOT NULL,
		about TEXT NOT NULL,
		role VARCHAR(10) NOT NULL,
		hash TEXT NOT NULL,
		salt TEXT NOT NULL,
		created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
		CONSTRAINT USERS_PK PRIMARY KEY (id),
		CONSTRAINT UNIQUE_EMAIL UNIQUE (email)
	)
`,
);
