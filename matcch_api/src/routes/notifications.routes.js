import express from "express";
import {
  listRecipientNotifications,
  updateNotificationStatus,
} from "#controllers/notification.controller.js";

const router = express.Router();

router.get("/:recipientId", listRecipientNotifications);
router.put("/:id", updateNotificationStatus);

export default router;
