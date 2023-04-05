import express from "express";
import { signup, login } from "./basic.js";
import { getProfileInfo, getChartInfo } from "./profile.js";
import { getProgressInfo, setProgressInfo } from "./progress.js";
import { getFeed,getPostInfo, storeLikes ,storeReport} from "./post.js";

const router = express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.post("/getProfileInfo",getProfileInfo);
router.post("/getChartInfo",getChartInfo);
router.post("/getProgressInfo",getProgressInfo);
router.post("/setProgressInfo",setProgressInfo);
router.post("/feed",getFeed);
router.post("/getPostInfo",getPostInfo);
router.post("/setLike",storeLikes);
router.post("/setReport",storeReport);

export default router;