import express from "express";
import {
  queryInsertRequest,
  querySelectAllRequestsBySender,
} from "#database/repositories/request.js";

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
export async function listPendingRequestsToRecipient(req, res) {}

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
    return res.status(200).end();
  } catch (err) {
    return res.status(400).json(err);
  }
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
export async function rejectRequest(req, res) {}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
export async function acceptRequest(req, res) {}
