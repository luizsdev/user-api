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
exports.prisma = void 0;
const client_1 = require("@prisma/client");
exports.prisma = new client_1.PrismaClient();
class userController {
    static getAllUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield exports.prisma.user.findMany({});
            if (users) {
                res.status(200).send(users);
            }
            else {
                res.status(400).json({ message: "Couldn't find any user" });
            }
        });
    }
    static getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const toParseId = req.params.id;
            const id = parseInt(toParseId);
            const user = yield exports.prisma.user.findUnique({
                where: {
                    id,
                },
            });
            if (user) {
                res.status(200).send(user);
            }
            else {
                res.json({ message: "Couldn't find user with given id" });
            }
        });
    }
    static createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, user, email } = yield req.body;
            const checkUser = yield exports.prisma.user.findFirst({
                where: {
                    email,
                },
            });
            if (checkUser) {
                res.status(404).json({ message: 'User already exists' });
            }
            else {
                yield exports.prisma.user
                    .create({
                    data: {
                        name,
                        user,
                        email,
                    },
                })
                    .then(() => {
                    res.status(200).json({ message: 'User created sucessfully' });
                })
                    .catch(() => {
                    res.status(400).json({ message: "Couldn't create user" });
                });
            }
        });
    }
    static updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const parsedId = parseInt(id);
            const { user, email, name } = req.body;
            const checkuser = yield exports.prisma.user.findUnique({
                where: {
                    id: parsedId,
                },
            });
            if (checkuser) {
                yield exports.prisma.user
                    .update({
                    where: {
                        id: parsedId,
                    },
                    data: {
                        user: user,
                        email: email,
                        name: name,
                    },
                })
                    .then(() => {
                    res.status(200).json({ message: 'User updated sucessfully' });
                })
                    .catch(() => {
                    res.status(400).json({ message: "Couldn't update user" });
                });
            }
            else {
                res.status(400).json({ message: "Couldn't find user with given id" });
            }
        });
    }
    static deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const parsedId = parseInt(id);
            const checkUser = yield exports.prisma.user.findUnique({
                where: {
                    id: parsedId,
                },
            });
            if (checkUser) {
                yield exports.prisma.user
                    .delete({
                    where: {
                        id: parsedId,
                    },
                })
                    .then(() => {
                    res.status(200).json({ message: 'User deleted sucessfully' });
                })
                    .catch(() => {
                    res.status(400).json({ message: "Couldn't delete user" });
                });
            }
            else {
                res.status(400).json({ message: "Couldn't not find user with given id" });
            }
        });
    }
}
exports.default = userController;
