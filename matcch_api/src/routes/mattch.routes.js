import express from "express";
import {
  sendRequest,
  acceptRequest,
  rejectRequest,
  listPendingRequests,
  listRequestsBySender,
} from "#controllers/request.controller";

const router = express.Router();

router.get("/:userID", listRequestsBySender);
router.get("/pending/:userID", listPendingRequests);
router.post("/request", sendRequest);
router.put("/accept", acceptRequest);
router.put("/reject", rejectRequest);

export default router;
