import express from "express";
import auth from "./auth.routes.js";
import users from "./users.routes.js";
import mattch from "./mattch.routes.js";
import notifications from "./notifications.routes.js";

const router = express.Router();
router.use("/auth", auth);
router.use("/users", users);
router.use("/mattch", mattch);
router.use("/notifications", notifications);

export default router;
