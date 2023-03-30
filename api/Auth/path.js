import express from "express";
import { signup, login } from "./basic.js";
import { getProfileInfo } from "./profile.js";

const router = express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.post("/getProfileInfo",getProfileInfo);

export default router;