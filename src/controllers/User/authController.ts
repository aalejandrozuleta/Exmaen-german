import { authUser } from '../../service/User/authUser';
import { authInterface } from './../../interface/user/authInterface';
import { Request, Response } from "express";

export const authController = async (req: Request, res: Response) => {
  const userData: authInterface = req.body;
  try {
    const { token } = await authUser(userData);
    
    res.status(201).json({
      mensaje: "Usuario iniciado con éxito",
      toke: token
    });
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}