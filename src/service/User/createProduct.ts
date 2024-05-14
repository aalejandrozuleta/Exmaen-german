import { createProductInterface } from "../../interface/user/createProductInterface";
import userRepositories from "../../repositories/userRepositories";

const UserRepositories = userRepositories();

const createProduct = async (user: createProductInterface) => {
  const result = await UserRepositories.CreateProduct(user);
  return result;
};

export default createProduct;
