import db from '#database/client.js';

db.query(
  `
	CREATE TABLE IF NOT EXISTS TEACHER (
		user_id INT NOT NULL,
		available BOOLEAN NOT NULL,
		CONSTRAINT USER_PK PRIMARY KEY (user_id),
		CONSTRAINT TEACHER_ID_FK FOREIGN KEY (user_id) REFERENCES USER(id)
	)
`,
);
