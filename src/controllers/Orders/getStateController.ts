import { getStateOrder } from '../../service/Orders/getStateOrder';
import { getStateInterface } from './../../interface/orders/getStateInterface';
import { Request, Response } from "express";

export const getStateOrderController = async (req: Request, res: Response) => {
  const userData: getStateInterface = req.body;

  try {
    const state = await getStateOrder(userData);
    res.status(200).json({
      message: "Order updated successfully",
      state: 'El estado de su compra es: ' + state
    });
  } catch (error:any) {
    res.status(500).send(error.message);
  }
};