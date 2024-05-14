import db from '../config/mysqlConfig';

class pedirCatalogoRepository{
    static async pedir(){
        const sql = `SELECT * FROM Product`;
        const [rows] = await db.execute(sql);
        return rows
    }
}

export default pedirCatalogoRepository;