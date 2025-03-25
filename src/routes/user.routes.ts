import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
} from "../controllers/user.controllers";
import validateUser from "../middleware/validateRequest";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", validateUser, createUser);
router.put("/:id", validateUser, updateUser);

export default router;
