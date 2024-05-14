import { Request, Response } from 'express';
import pedirCatalogoRepository from '../../repositories/showCatalogue';

let pedirCatalogo = async (req: Request, res: Response) =>{
    try {

        const result: any = await pedirCatalogoRepository.pedir();

        const listaMenus =result.map((row: any) => {
            return {
                id_product: row.id_product,
                name_product: row.name_product,
                description_product: row.description_product,
                price_product: row.price_product,
                image_product: row.image_product
            };
        });

        return res.status(201).json({
            Catalogo: listaMenus
        });
        
    } catch (error: any) {
        if (error && error.code === "ER_DUP_ENTRY") {
            return res.status(500).send({ errorInfo: error.sqlMessage });
        }else if(error){
            return console.error(error);
        }
    }
}

export default pedirCatalogo;