'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.authController = void 0;
const bcrypt_1 = __importDefault(require('bcrypt'));
const encryptPassword_1 = require('../Services/encryptPassword');
const userController_1 = require('./userController');
const jsonwebtoken_1 = __importDefault(require('jsonwebtoken'));
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
      } else {
        yield userController_1.prisma.admin.create({
          data: {
            user,
            password: hashedPassword,
          },
        });
        return res.status(200).json({
          message: 'User created successfully',
        });
      }
    });
  }
  static loginUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
      const { user, password } = req.body;
      const privateKey = process.env.SECRET_KEY;
      const checkUser = yield userController_1.prisma.admin.findFirst({
        where: {
          user,
        },
      });
      if (!checkUser) {
        return res.status(400).json({
          message: 'User not found',
        });
      } else {
        const match = yield bcrypt_1.default.compare(password, checkUser.password);
        if (match) {
          const token = jsonwebtoken_1.default.sign({ user: user }, privateKey, { algorithm: 'HS256' });
          return res.status(200).json({ status: 'approved', token });
        } else {
          return res.status(400).json({
            message: 'Invalid user or password ',
          });
        }
      }
    });
  }
  static deleteAdmin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
      const { id } = req.params;
      const parsedId = parseInt(id);
      yield userController_1.prisma.admin.delete({
        where: {
          id: parsedId,
        },
      });
      return res.status(200).json({
        message: 'User deleted successfully',
      });
    });
  }
}
exports.authController = authController;
