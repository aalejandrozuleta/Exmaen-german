import db from "../config/mysqlConfig";

export default () => ({
  CreateUser: async (user: {
    name_user: string;
    email_user: string;
    password_user: string;
  }) => {
    const query = "INSERT INTO User (name_user, email_user, password_user) VALUES (?, ?, ?)";
    const values = [
      user.name_user,
      user.email_user,
      user.password_user,
    ];

    return db.query(query, values);
  },
  LoginUser: async (user: {
    email_user: string;
  }) => {
    const query = "select id_user, password_user from User where email_user = ?";
    
    const values = [
      user.email_user,
    ];
    return db.query(query, values);
  },
})
