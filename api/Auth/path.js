import express from "express";
import { signup, login } from "./basic.js";
import { getProfileInfo } from "./profile.js";
import { getProgressInfo } from "./progress.js";

const router = express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.post("/getProfileInfo",getProfileInfo);
router.post("/getProgressInfo",getProgressInfo);

export default router;