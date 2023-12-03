import express from "express";
import {
  queryInsertRequest,
  querySelectAllRequestsBySender,
  querySelectAllPendingRequestsToRecipient,
  queryUpdateRequest,
  querySelectRequestById,
} from "#database/repositories/request.js";
import { queryInsertNotification } from "#database/repositories/notification.js";
import { querySelectUserById } from "#database/repositories/user.js";
import { messages } from "#messages.js";

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
export async function listPendingRequestsToRecipient(req, res) {
  const userId = req.params.userId;
  if (!userId) return res.status(400).send("userId is required");
  try {
    const users = await querySelectAllPendingRequestsToRecipient({
      recipientId: userId,
    });
    return res.status(200).json(users);
  } catch (err) {
    return res.status(400).json(err);
  }
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
export async function listRequestsBySender(req, res) {
  const userId = req.params.userId;
  if (!userId) return res.status(400).send("userId is required");
  try {
    const users = await querySelectAllRequestsBySender({
      senderId: userId,
    });
    return res.status(200).json(users);
  } catch (err) {
    return res.status(400).json(err);
  }
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
export async function sendRequest(req, res) {
  const senderId = req.body.senderId;
  const recipientId = req.body.recipientId;
  if (!senderId) return res.status(400).send("senderId is required");
  if (!recipientId) return res.status(400).send("recipientId is required");

  try {
    await queryInsertRequest({ senderId, recipientId });
    const [student] = await querySelectUserById(senderId);
    await queryInsertNotification({
      message: messages.receivedRequest(student.name),
      recipientId,
    });
    return res.status(200).end();
  } catch (err) {
    return res.status(400).json(err);
  }
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
export async function rejectRequest(req, res) {
  const id = req.params.id;
  if (!id) return res.status(400).send("id is required");

  try {
    await queryUpdateRequest({ id, status: "rejected" });
    const [request] = await querySelectRequestById({ id });
    const userId = request.sender_id;
    const recipientId = request.recipient_id;
    const [teacher] = await querySelectUserById(recipientId);
    await queryInsertNotification({
      message: messages.rejectedRequest(teacher.name),
      recipientId: userId,
    });
    return res.status(200).end();
  } catch (err) {
    return res.status(400).json(err);
  }
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
export async function acceptRequest(req, res) {
  const id = req.params.id;
  if (!id) return res.status(400).send("id is required");

  try {
    await queryUpdateRequest({ id, status: "accepted" });
    const [request] = await querySelectRequestById({ id });
    const userId = request.sender_id;
    const recipientId = request.recipient_id;
    const [teacher] = await querySelectUserById(recipientId);
    await queryInsertNotification({
      message: messages.acceptedRequest(teacher.name),
      recipientId: userId,
    });
    return res.status(200).end();
  } catch (err) {
    return res.status(400).json(err);
  }
}
