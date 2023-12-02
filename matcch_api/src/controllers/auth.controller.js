import express from "express";
import { genPassword, validPassword } from "#src/auth/crypto.js";
import { issueJWT } from "#src/auth/jwt.js";
import {
  queryInsertUser,
  querySelectUserByEmail,
} from "#database/repositories/user.js";

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
export async function register(req, res) {
  const body = req.body;
  const user = {
    name: body.name,
    email: body.email,
    about: body.about,
    role: body.role,
    ...genPassword(body.password),
  };

  try {
    await queryInsertUser(user);
    return res.status(201).end();
  } catch (error) {
    return res.status(500).send(error);
  }
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
export async function login(req, res) {
  const body = req.body;
  const email = body.email;

  const user = await querySelectUserByEmail(email);

  if (!user) {
    return res.status(403).end();
  }

  const password = {
    text: body.password,
    hash: user.hash,
    salt: user.salt,
  };

  try {
    if (validPassword(password.text, password.hash, password.salt)) {
      return res.status(200).json(issueJWT(user));
    }
    return res.status(403).end();
  } catch (error) {
    return res.status(500).send(error);
  }
}
