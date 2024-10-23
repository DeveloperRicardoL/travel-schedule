import express from "express";
import {
  createUserController,
  deleteUserController,
  getUserController,
  getUsersController,
  updateUserController,
} from "./user.controller.js";

const ROUTER = express.Router();

ROUTER.get("/user", getUsersController);
ROUTER.get("/user/:id", getUserController);

ROUTER.post("/user", createUserController);
ROUTER.patch("/user/:id", updateUserController);
ROUTER.delete("/user/:id", deleteUserController);

export default ROUTER;
