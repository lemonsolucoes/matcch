import db from "#database/client.js";

db.query(
  `
	CREATE TABLE IF NOT EXISTS TCC_MODALITY (
		id INT auto_increment NOT NULL,
		name VARCHAR(255) NOT NULL,
		CONSTRAINT TCC_MODALITY_PK PRIMARY KEY (id)	
	)
`,
);
