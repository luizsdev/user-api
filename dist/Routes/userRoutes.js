"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../Controllers/userController"));
const authController_1 = require("../Controllers/authController");
const cors_1 = __importDefault(require("cors"));
const router = (0, express_1.Router)();
router.use((0, cors_1.default)());
router.post('/register', authController_1.authController.registerUser);
//RETRIEVE ALL USERS
router.get('/users', userController_1.default.getAllUser);
//RETRIEVE AN USER BY ID
router.get('/users/:id', userController_1.default.getUserById);
//CREATE AN USER WITH USER EMAIL AND NAME
router.post('/createuser', userController_1.default.createUser);
//UPDATE AN USER PASSING AN ID
router.put('/updateuser/:id', userController_1.default.updateUser);
//DELETE AN USER PASSING AN ID
router.delete('/deleteuser/:id', userController_1.default.deleteUser);
exports.default = router;
