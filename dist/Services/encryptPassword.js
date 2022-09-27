"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const saltRounds = 10;
const encryptPassword = (password) => {
    const hash = bcrypt_1.default.hashSync(password, saltRounds);
    return hash;
};
exports.encryptPassword = encryptPassword;
