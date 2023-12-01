import express from "express";
import passport from "passport";
import { findById, listUsers, search } from "#controllers/user.controller.js";

const router = express.Router();
const requiredAuth = passport.authenticate("jwt", { session: false });

router.get("/", listUsers);
router.get("/search", requiredAuth, search);
router.get("/:id", findById);

export default router;
