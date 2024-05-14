import { Request, Response } from "express";
import historialRepository from "../../repositories/historial";
import historialDto from "../../dto/historialDto";

let historial = async(req: Request, res: Response) =>{
    try {
        
        const id_user = req.query.id_user;
        console.log(id_user);

        const result: any = await historialRepository.historial(new historialDto(id_user));
        console.log(result);

        const listaHistorial = result.map((row: any)=>{
            return {
                id_order: row.id_order,   
                state_order: row.state_order,   
                fk_id_user: row.fk_id_user,   
                fk_id_product: row.fk_id_product, 
            };
        });

        return res.status(201).json({
            historial: listaHistorial
        })
        
    } catch (error: any) {
        if (error && error.code === "ER_DUP_ENTRY") {
            return res.status(500).send({ errorIfo: error.sqlMessage });
        }else if(error){
            console.error(error);
            return res.status(500).send({ errorInfo: "Error interno del servidor" });
        }
    }
}

export default historial;