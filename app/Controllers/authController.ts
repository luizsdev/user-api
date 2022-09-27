import { Admin } from '@prisma/client';
import { encryptPassword } from '../Services/encryptPassword';
import { Request, Response } from 'express';
import { prisma } from './userController';
export class authController {
  static async registerUser(req: Request, res: Response) {
    const { user, password } = req.body;
    const hashedPassword = encryptPassword(password);
    const checkUser: Admin = await prisma.admin.findFirst({
      where: {
        user,
      },
    });
    if (checkUser) {
      return res.status(400).json({ message: 'User already exists' });
    } else {
      const newUser: Admin = await prisma.admin.create({
        data: {
          user,
          password: hashedPassword,
        },
      });
      return res.status(200).json(newUser);
    }
  }
  // static async loginUser(req: Request, res: Response) {}
}
