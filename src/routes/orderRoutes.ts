import express, { Router } from "express";
const router: Router = express.Router();
import { jwtAuthMiddleware } from "../middleware/logic/jwtAuth";

//* --- UpdateOrder
import { updateController } from "../controllers/Orders/updateStateController";


//* --- Get stateOrder
import { getStateOrderController } from "../controllers/Orders/getStateController";

//* --- Get catalogue
import  pedirCatalogo  from "../controllers/User/showCatalogue";

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

router.post("/getProduct", jwtAuthMiddleware, getStateOrderController);

/**
 * @route get /getProduct
 * @description Registrar un nuevo usuario
 * @access Público
 */


router.get('/products', pedirCatalogo);

export default router;