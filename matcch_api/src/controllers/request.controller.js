import express from "express";

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
export async function listPendingRequestsToRecipient(req, res) {}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
export async function listRequestsBySender(req, res) {}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
export async function sendRequest(req, res) {}

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
