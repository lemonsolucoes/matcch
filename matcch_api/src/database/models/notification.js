import db from "#database/client.js";

db.query(
  `
  CREATE TABLE IF NOT EXISTS NOTIFICATION (
    id INT auto_increment NOT NULL,
    message TEXT NOT NULL,
    status ENUM('pending', 'viewed'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    recipient_id INT NOT NULL,
    CONSTRAINT NOTIFICATION_PK PRIMARY KEY (id),
    CONSTRAINT NOTIFICATION_RECIPIENT_ID_FK FOREIGN KEY (recipient_id) REFERENCES USER(id)
  )
`,
);
