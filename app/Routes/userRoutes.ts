import { Router } from "express";
import cors from 'cors'
var corsOptions = {
  origin: 'https://portfolio-luizsdev.vercel.app/s',
  optionsSuccessStatus: 200 
}
const router = Router();
import userController from "../Controllers/userController"
//RETRIEVE ALL USERS
router.get("/users",cors(corsOptions), userController.getAllUser);
//RETRIEVE AN USER BY ID
router.get("/users/:id", userController.getUserById);
//CREATE AN USER WITH USER EMAIL AND NAME
router.post("/createuser", userController.createUser);
//UPDATE AN USER PASSING AN ID
router.post("/updateuser/:id", userController.updateUser);
//DELETE AN USER PASSING AN ID
router.get("/deleteuser/:id", userController.deleteUser);

export default router;
