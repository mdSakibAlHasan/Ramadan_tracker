import express from "express";
import { signup } from "./basic.js";

const router = express.Router();

router.post("/signup",signup);

export default router;