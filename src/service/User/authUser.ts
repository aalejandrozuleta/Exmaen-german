import { authInterface } from "./../../interface/user/authInterface";
import userRepositories from "../../repositories/userRepositories";
import passwordService from "./utils/passwordService";
import { generateToken } from "../../helpers/genereToken";
import { ERROR_MESSAGES } from "./utils/errorMessage";

const UserRepositories = userRepositories();
const PasswordService = passwordService();

export const authUser = async (user: authInterface) => {
  try {
    const [results]: any = await UserRepositories.LoginUser(user); 
    const rows = results[0];
    
    if (rows.length == 0) {
      // Si no se encuentra ningún usuario, lanzar un error de autenticación
      throw new Error(ERROR_MESSAGES.CREDENTIALS);
    }
    

    if (!(await PasswordService.comparePassword(
      user.password_user,
      rows.password_user
    ))) {
      // Si las contraseñas no coinciden, lanzar un error de autenticación
      throw new Error(ERROR_MESSAGES.CREDENTIALS);
    }

    const token = generateToken(rows.id_user, rows.email_user);

    return { user: rows, token };
  } catch (error: any) {
    throw error;
  }
};
