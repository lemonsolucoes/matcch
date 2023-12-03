import express from "express";
import {
  querySelectAllUsers,
  queryInsertUser,
  querySelectUserById,
  querySelectTeacher,
} from "#database/repositories/user.js";

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
export async function listUsers(_, res) {
  const users = await querySelectAllUsers();
  return res.status(200).json(users);
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
export async function findById(req, res) {
  const id = req.params.id;
  const users = await querySelectUserById(id);
  return res.status(200).json(users);
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
export async function search(req, res) {
  const themes = req.query.themes;
  const tracks = req.query.tracks;
  const modalities = req.query.modalities;
  const users = await querySelectTeacher({
    themes: typeof themes === "string" ? themes.split(",") : themes,
    tracks: typeof tracks === "string" ? tracks.split(",") : tracks,
    modalities:
      typeof modalities === "string" ? modalities.split(",") : modalities,
  });
  return res.status(200).json(users);
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
export async function createUser(req, res) {
  const body = req.body;
  await queryInsertUser({
    name: body.name,
    email: body.email,
    about: body.about,
    role: body.role,
  });
  return res.status(201).end();
}
