import db from "../config/mysqlConfig";
import Historial from "../dto/historialDto";

class historialRepository{
    static async historial(historial: Historial){
        const sql= "SELECT * FROM Orders WHERE fk_id_user = ?";
        const values = [historial.id_user];
        const[rows] = await db.execute(sql,values);
        return rows
    }
}

export default historialRepository;