import express, { Router } from "express";
const router: Router = express.Router();
// import { jwtAuthMiddleware } from "../middlewares/logic/jwtAuth";


//* ----- Register
import { registerUserController } from "../controllers/User/registerController";

//* ----- Login
import { authController } from "../controllers/User/authController";

/**
 * @route POST /register
 * @description Registrar un nuevo usuario
 * @access Público
 */
router.post("/register", registerUserController);

/**
 * @route POST /register
 * @description Registrar un nuevo usuario
 * @access Público
 */

router.post("/login",authController );


export default router;