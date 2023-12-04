import db from "#database/client.js";

db.query(
  `
	CREATE TABLE IF NOT EXISTS TRACK (
		id INT auto_increment NOT NULL,
		name VARCHAR(255) NOT NULL,
		CONSTRAINT TRACK_PK PRIMARY KEY (id)	
	)
`,
);
