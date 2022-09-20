import { Router } from "express";
import cors from 'cors'
const router = Router();
import userController from "../Controllers/userController"
router.use(cors())
//RETRIEVE ALL USERS
router.get("/users", userController.getAllUser);
//RETRIEVE AN USER BY ID
router.get("/users/:id", userController.getUserById);
//CREATE AN USER WITH USER EMAIL AND NAME
router.post("/createuser", userController.createUser);
//UPDATE AN USER PASSING AN ID
router.post("/updateuser/:id", userController.updateUser);
//DELETE AN USER PASSING AN ID
router.get("/deleteuser/:id", userController.deleteUser);

export default router;
