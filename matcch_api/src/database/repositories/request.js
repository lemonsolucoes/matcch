import db from "#database/client.js";

export async function querySelectRequestById(data) {
  const { id } = data;

  const [rows] = await db.query(
    `
    SELECT * FROM REQUEST
    WHERE id = ?;
  `,
    [id],
  );
  return rows;
}

export async function querySelectAllRequestsBySender(data) {
  const { senderId } = data;

  const [rows] = await db.query(
    `
    SELECT * FROM REQUEST
    WHERE sender_id = ?
    ORDER BY created_at DESC;
  `,
    [senderId],
  );
  return rows;
}

export async function querySelectAllPendingRequestsToRecipient(data) {
  const { recipientId } = data;

  const [rows] = await db.query(
    `
    SELECT * FROM REQUEST
    WHERE recipient_id = ?
    AND status = 'pending'
    ORDER BY created_at DESC;
  `,
    [recipientId],
  );
  return rows;
}

export async function queryInsertRequest(data) {
  const { senderId, recipientId } = data;

  const [rows] = await db.query(
    `
    INSERT INTO REQUEST (status, sender_id, recipient_id)
    VALUES ('pending',?,?);
  `,
    [senderId, recipientId],
  );
  return rows;
}

export async function queryUpdateRequest(data) {
  const { status, id } = data;

  const [rows] = await db.query(
    `
    UPDATE REQUEST
    SET status = ?
    WHERE id = ?;
  `,
    [status, id],
  );
  return rows;
}
