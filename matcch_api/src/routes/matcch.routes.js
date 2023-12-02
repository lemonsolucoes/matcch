import express from "express";
import {
  sendRequest,
  acceptRequest,
  rejectRequest,
  listPendingRequestsToRecipient,
  listRequestsBySender,
} from "#controllers/request.controller.js";

const router = express.Router();

router.get("/:userId", listRequestsBySender);
router.get("/pending/:userId", listPendingRequestsToRecipient);
router.post("/request", sendRequest);
router.put("/accept/:id", acceptRequest);
router.put("/reject/:id", rejectRequest);

export default router;
