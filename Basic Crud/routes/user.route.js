import { Router } from "express";
import {
  handleAllUser,
  handleAllData,
  handleUserById,
  handleCreateUser,
  handleDeleteUser,
  handleEditUser,
} from "../controllers/user.controller.js";

const router = Router();

router.get("/users", handleAllUser);
router.post("/users", handleCreateUser);
router.get("/data", handleAllData);
router.get("/users/:id", handleUserById);
router.patch("/users/:id", handleEditUser);
router.delete("/users/:id", handleDeleteUser);

export default router;
