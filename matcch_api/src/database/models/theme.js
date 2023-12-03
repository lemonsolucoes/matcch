import db from '#database/client.js';

db.query(
  `
	CREATE TABLE IF NOT EXISTS THEME (
		id INT auto_increment NOT NULL,
		name VARCHAR(255) NOT NULL,
		CONSTRAINT THEME_PK PRIMARY KEY (id)	
	)
`,
);
