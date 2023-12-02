import express from "express";
import auth from "./auth.routes.js";
import users from "./users.routes.js";

const router = express.Router();
router.use("/auth", auth);
router.use("/users", users);
router.use("/mattch", users);

export default router;
