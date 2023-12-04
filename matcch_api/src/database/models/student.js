import db from "#database/client.js";

db.query(
  `
	CREATE TABLE IF NOT EXISTS STUDENT (
		user_id INT NOT NULL,
		CONSTRAINT USER_PK PRIMARY KEY (user_id),
		CONSTRAINT STUDENT_ID_FK FOREIGN KEY (user_id) REFERENCES USER(id)
	)
`,
);
