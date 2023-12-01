import db from '#database/client.js';

db.query(
  `
	CREATE TABLE IF NOT EXISTS TRACK_USER (
		user_id INT NOT NULL,
		track_id INT NOT NULL,
		CONSTRAINT USER_ID_FK FOREIGN KEY (user_id) REFERENCES USER(id),
		CONSTRAINT USER_TRACK_FK FOREIGN KEY (track_id) REFERENCES TRACK(id)
	)
`,
);
