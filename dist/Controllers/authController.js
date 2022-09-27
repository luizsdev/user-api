"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const encryptPassword_1 = require("../Services/encryptPassword");
const userController_1 = require("./userController");
class authController {
    static registerUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user, password } = req.body;
            const hashedPassword = (0, encryptPassword_1.encryptPassword)(password);
            const checkUser = yield userController_1.prisma.admin.findFirst({
                where: {
                    user,
                },
            });
            if (checkUser) {
                return res.status(400).json({ message: 'User already exists' });
            }
            else {
                const newUser = yield userController_1.prisma.admin.create({
                    data: {
                        user,
                        password: hashedPassword,
                    },
                });
                return res.status(200).json(newUser);
            }
        });
    }
}
exports.authController = authController;
