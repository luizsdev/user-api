import { Router } from 'express';
import userController from '../Controllers/userController';
import { authController } from '../Controllers/authController';
import cors from 'cors';
import { checkJwt } from '../middleWares/checkJwt';

const router = Router();
router.use(cors());
//REGISTER AN USER
router.post('/register', authController.registerUser);
//LOGIN AN USER
router.get('/login', authController.loginUser);
//RETRIEVE ALL USERS
router.get('/users', checkJwt, userController.getAllUser);
//RETRIEVE AN USER BY ID
router.get('/users/:id', checkJwt, userController.getUserById);
//CREATE AN USER WITH USER EMAIL AND NAME
router.post('/createuser', checkJwt, userController.createUser);
//UPDATE AN USER PASSING AN ID
router.put('/updateuser/:id', checkJwt, userController.updateUser);
//DELETE AN USER PASSING AN ID
router.delete('/deleteuser/:id', checkJwt, userController.deleteUser);

export default router;
