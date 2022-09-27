import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { encryptPassword } from '../Services/encryptPassword';
export const prisma = new PrismaClient();

class userController {
  static async getAllUser(req: Request, res: Response) {
    const users = await prisma.user.findMany({});
    if (users) {
      res.status(200).send(users);
    } else {
      res.status(400).json({ message: "Couldn't find any user" });
    }
  }
  static async getUserById(req: Request, res: Response) {
    const toParseId = req.params.id;
    const id = parseInt(toParseId);
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (user) {
      res.status(200).send(user);
    } else {
      res.json({ message: "Couldn't find user with given id" });
    }
  }
  static async createUser(req: Request, res: Response) {
    const { name, user, email } = await req.body;
    const checkUser = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (checkUser) {
      res.status(404).json({ message: 'User already exists' });
    } else {
      await prisma.user
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
  }
  static async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = parseInt(id);
    const { user, email, name } = req.body;
    const checkuser = await prisma.user.findUnique({
      where: {
        id: parsedId,
      },
    });
    if (checkuser) {
      await prisma.user
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
    } else {
      res.status(400).json({ message: "Couldn't find user with given id" });
    }
  }
  static async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = parseInt(id);
    const checkUser = await prisma.user.findUnique({
      where: {
        id: parsedId,
      },
    });
    if (checkUser) {
      await prisma.user
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
    } else {
      res.status(400).json({ message: "Couldn't not find user with given id" });
    }
  }
}
export default userController;
