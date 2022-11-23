import express from "express";

import { UserController } from "./UserController";

export const userRouter = express.Router();

const userController = new UserController();

userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);
userRouter.get("/user/profile", userController.getUser);
userRouter.post("/recipe", userController.createRecipe);
userRouter.get("/user/:id", userController.getUserById);
userRouter.get("/recipe/:id", userController.getRecipeById);
