import express from "express";
import {
  sendRequest,
  acceptRequest,
  rejectRequest,
  listPendingRequestsToRecipient,
  listRequestsBySender,
} from "#controllers/request.controller.js";

const router = express.Router();

router.get("/:userID", listRequestsBySender);
router.get("/pending/:userID", listPendingRequestsToRecipient);
router.post("/request", sendRequest);
router.put("/accept", acceptRequest);
router.put("/reject", rejectRequest);

export default router;
