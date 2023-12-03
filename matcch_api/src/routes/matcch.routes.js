import express from "express";
import passport from "passport";
import {
  sendRequest,
  acceptRequest,
  rejectRequest,
  listPendingRequestsToRecipient,
  listRequestsBySender,
} from "#controllers/request.controller.js";

const router = express.Router();
const requiredAuth = passport.authenticate("jwt", { session: false });

router.get("/:userId", requiredAuth, listRequestsBySender);
router.get("/pending/:userId", requiredAuth, listPendingRequestsToRecipient);
router.post("/request", requiredAuth, sendRequest);
router.put("/accept/:id", requiredAuth, acceptRequest);
router.put("/reject/:id", requiredAuth, rejectRequest);

export default router;
