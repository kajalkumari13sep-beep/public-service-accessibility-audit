import { Router } from "express";
import { searchServices } from "../controllers/services.js";

const router = Router();

router.get("/", searchServices);

export default router;
