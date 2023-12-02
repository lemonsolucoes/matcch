import express from "express";
import {
  querySelectRecipientNotifications,
  queryUpdateNotificationStatus,
} from "#database/repositories/notification.js";

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
export async function listRecipientNotifications(req, res) {
  try {
    const recipientId = req.params.recipientId;
    if (!recipientId) return res.status(400).send("recipientId is required");
    const notifications = await querySelectRecipientNotifications({
      recipientId,
    });
    return res.status(200).json(notifications);
  } catch (error) {
    return res.status(500).send(error);
  }
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
export async function updateNotificationStatus(req, res) {
  const id = req.params.id;
  const status = req.body.status;
  if (!id) return res.status(400).send("id is required");
  if (!status) return res.status(400).send("status is required");

  try {
    await queryUpdateNotificationStatus({
      id,
      status,
    });
    return res.status(200).end();
  } catch (error) {
    return res.status(500).send(error);
  }
}
