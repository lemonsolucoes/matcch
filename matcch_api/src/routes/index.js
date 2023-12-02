import express from "express";
import auth from "./auth.routes.js";
import users from "./users.routes.js";
import matcch from "./matcch.routes.js";
import notifications from "./notifications.routes.js";

const router = express.Router();
router.use("/auth", auth);
router.use("/users", users);
router.use("/matcch", matcch);
router.use("/notifications", notifications);

export default router;
