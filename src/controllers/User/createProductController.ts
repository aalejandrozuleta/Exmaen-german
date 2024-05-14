import { createProductInterface } from "../../interface/user/createProductInterface";
import { Request, Response } from "express";
import createProduct from "../../service/User/createProduct";


export const createProductController = async (req: Request, res: Response) => {
  const userData: createProductInterface = req.body;

  try {
    const result = await createProduct(userData);

    res.status(200).json({
      message: "Product create successfully",
      result: result,
    });
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
