import { registerUserInterface } from "../../interface/user/registerInterface";
import userRepositories from "../../repositories/userRepositories";
import passwordService from "./utils/passwordService";

const UserRepositories = userRepositories();
const PasswordService = passwordService();

const createUser = async (user: registerUserInterface) => {
  // Hash de la contraseña antes de almacenarla en la base de datos
  const hashedPassword = await PasswordService.hashPassword(user.password_user);
  const newUser = { ...user, password_user: hashedPassword };
  // Crear el usuario en la base de datos
  const createdUser = await UserRepositories.CreateUser(newUser);

  return {
    createdUser,
  };
};

export default createUser;
