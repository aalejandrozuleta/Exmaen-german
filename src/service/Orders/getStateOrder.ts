import { getStateInterface } from './../../interface/orders/getStateInterface';
import { ERROR_MESSAGES } from './utils/errorMessage';
import orderRepositories from "../../repositories/orderRepositories";

const OrderRepositories = orderRepositories();
export const getStateOrder = async (order:getStateInterface) => {
  
  const [results]:any = await OrderRepositories.seekerProduct(order);
  const rows = results[0];
  

  if (rows.length == 0) {
    // Si no se encuentra ningún usuario, lanzar un error de autenticación
    throw new Error(ERROR_MESSAGES.UPDATES_STATE);
  }

  const state = rows.state_order;

  return state;
};