import db from "#database/client.js";

db.query(
  `
	CREATE TABLE IF NOT EXISTS REQUEST (
		id INT auto_increment NOT NULL,
		status ENUM('pending', 'accepted', 'rejected'),
		sender_id INT NOT NULL,
		recipient_id INT NOT NULL,
		created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
		CONSTRAINT REQUEST_PK PRIMARY KEY (id),
		CONSTRAINT REQUEST_SENDER_ID_FK FOREIGN KEY (sender_id) REFERENCES USER(id),
		CONSTRAINT REQUEST_RECIPIENT_ID_FK FOREIGN KEY (recipient_id) REFERENCES USER(id)
	)
`,
);
