import { ERROR_MESSAGES } from './utils/errorMessage';
import { updateInterface } from './../../interface/orders/updateInterface';
import orderRepositories from "../../repositories/orderRepositories";

const OrderRepositories = orderRepositories();
export const updateStateProduct = async (order:updateInterface) => {
  
  const [results]:any = await OrderRepositories.seekerProduct(order);
  const rows = results[0];
  console.log(rows);
  

  if (rows.length == 0) {
    // Si no se encuentra ningún usuario, lanzar un error de autenticación
    throw new Error(ERROR_MESSAGES.UPDATES_STATE);
  }

  if (rows.state_order == order.state_order) {
    throw new Error(ERROR_MESSAGES.EQUAL_ERROR)
  }

  const updateStateProductResult = await OrderRepositories.updateState(order);

  return updateStateProductResult;
};