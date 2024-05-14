
import express, { Router } from "express";
const router: Router = express.Router();
import { jwtAuthMiddleware } from "../middleware/logic/jwtAuth";

//* --- UpdateOrder
import { updateController } from "../controllers/Orders/updateStateController";


//* --- Get stateOrder
import { getStateOrderController } from "../controllers/Orders/getStateController";

/**
 * @route PUT /update
 * @description Registrar un nuevo usuario
 * @access Público
 */

router.put("/updateOrder", jwtAuthMiddleware, updateController);

/**
 * @route get /getProduct
 * @description Registrar un nuevo usuario
 * @access Público
 */

router.get("/getProduct", jwtAuthMiddleware, getStateOrderController);

export default router;