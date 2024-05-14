import { updateStateProduct } from '../../service/Orders/updateStateProduct';
import { updateInterface } from './../../interface/orders/updateInterface';
import { Request, Response } from "express";

export const updateController = async (req: Request, res: Response) => {
  const userData: updateInterface = req.body;

  try {
    await updateStateProduct(userData);
    res.status(200).json({
      message: "Order updated successfully",
    });
  } catch (error:any) {
    res.status(500).send(error.message);
  }
};