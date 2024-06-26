import express, { Router } from "express";
const router: Router = express.Router();
import { jwtAuthMiddleware } from "../middleware/logic/jwtAuth";


//* ----- Register
import { registerUserController } from "../controllers/User/registerController";

//* ----- Login
import { authController } from "../controllers/User/authController";


//* ----- History
import historial from "../controllers/User/historialController";


//* ----- Buy
import { createProductController } from "../controllers/User/createProductController";



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


/**
 * @route Get /register
 * @description Registrar un nuevo usuario
 * @access Público
 */

router.get('/history', jwtAuthMiddleware,historial);

/**
 * @route Get /register
 * @description Registrar un nuevo usuario
 * @access Público
 */

router.post("/createProduct",jwtAuthMiddleware,createProductController);

export default router;