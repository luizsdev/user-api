import { Admin } from '@prisma/client';
import bcrypt from 'bcrypt';
import { encryptPassword } from '../Services/encryptPassword';
import { Request, Response } from 'express';
import { prisma } from './userController';
import jwt from 'jsonwebtoken';

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
      await prisma.admin.create({
        data: {
          user,
          password: hashedPassword,
        },
      });
      return res.status(200).json('User created successfully');
    }
  }
  static async loginUser(req: Request, res: Response) {
    const { user, password } = req.body;
    const privateKey = process.env.SECRET_KEY;
    const checkUser = await prisma.admin.findFirst({
      where: {
        user,
      },
    });
    if (!checkUser) {
      return res.status(400).send('User or email incorrect');
    } else {
      const match = await bcrypt.compare(password, checkUser.password);
      if (match) {
        const token = jwt.sign({ user: user }, privateKey, { algorithm: 'HS256' });
        return res.status(200).json({ status: 'approved', token });
      } else {
        return res.status(400).send('User or email incorrect');
      }
    }
  }
}
