import express from "express";
import passport from "passport";
import {
  listRecipientNotifications,
  updateNotificationStatus,
} from "#controllers/notification.controller.js";

const router = express.Router();
const requiredAuth = passport.authenticate("jwt", { session: false });

router.get("/:recipientId", requiredAuth, listRecipientNotifications);
router.put("/:id", requiredAuth, updateNotificationStatus);

export default router;
