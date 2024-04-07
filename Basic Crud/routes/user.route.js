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

router.route("/users").get(handleAllUser).post(handleCreateUser);

router.route("/data", handleAllData);

router
  .route("/users/:id")
  .get(handleUserById)
  .patch(handleEditUser)
  .delete(handleDeleteUser);

export default router;
