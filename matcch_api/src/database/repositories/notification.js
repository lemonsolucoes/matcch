import db from "#database/client.js";

export async function querySelectRecipientNotifications(data) {
  const { recipientId } = data;

  const [rows] = await db.query(
    `
    SELECT * FROM NOTIFICATION
    WHERE recipient_id = ?
    ORDER BY created_at DESC;
  `,
    [recipientId],
  );
  return rows;
}

export async function queryInsertNotification(data) {
  const { message, recipientId } = data;

  const [rows] = await db.query(
    `
    INSERT INTO NOTIFICATION
    (message, status, recipient_id)
    VALUES (?, 'pending', ?);
  `,
    [message, recipientId],
  );
  return rows;
}

export async function queryUpdateNotificationStatus(data) {
  const { status, id } = data;

  const [rows] = await db.query(
    `
    UPDATE NOTIFICATION
    SET status = ?
    WHERE id = ?;
  `,
    [status, id],
  );
  return rows;
}
