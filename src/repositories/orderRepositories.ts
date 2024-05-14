import db from "../config/mysqlConfig";

export default () => ({
  seekerProduct: async (order: {
    id_order:number;
  }) => {
    const query = "select state_order from Orders where id_order = ?";
    const values = [
      order.id_order,
    ];
    return db.query(query, values);
  },

  updateState: async (order: {
    id_order: number;
    state_order: 'preparando' | "enviado" | "entregado";
  }) => {
    const query = "update Orders set state_order = ? where id_order = ?";
    const values = [
      order.state_order,
      order.id_order,
    ];
    return db.query(query, values);
  },

})
