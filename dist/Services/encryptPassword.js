"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const saltRounds = 10;
const encryptPassword = (password) => {
    bcrypt_1.default.hash(password, saltRounds, (err, hash) => {
        return hash;
    });
};
exports.encryptPassword = encryptPassword;
