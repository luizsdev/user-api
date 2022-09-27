import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
export const checkJwt = async (req: Request, res: Response, next: NextFunction) => {
  const privateKey = process.env.SECRET_KEY;
  try {
    const token = req.headers.token.toString();
    if (!token) {
      return res.status(401).json({
        message: "Couldn't find token",
        status: 'denied',
      });
    }
    jwt.verify(token, privateKey, (err) => {
      if (err) {
        return res.status(401).json({
          message: 'Invalid token',
          status: 'denied',
        });
      }
      next();
    });
  } catch {
    return res.status(401).send('Please authenticate');
  }
};
