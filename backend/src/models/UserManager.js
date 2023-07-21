const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `INSERT INTO ${this.table} (name, email, hashedPassword, role_id) VALUES (?, ?, ?, ?)`,
      [user.name, user.email, user.hashedPassword, user.role_id]
    );
  }

  update(user) {
    return this.database.query(
      `UPDATE ${this.table} SET name = ?,
      email = ?,
      role_id = ?
      WHERE id = ?`,

      [user.name, user.email, user.role_id, user.id]
    );
  }

  find(id) {
    return this.database.query(
      `select name, email, role_id from  ${this.table} where id = ?`,
      [id]
    );
  }

  findById(id) {
    return this.database.query(
      `SELECT u.id, u.name, u.email, u.role_id AS role_id, r.role_name FROM ${this.table} AS u JOIN role AS r ON r.id = u.role_id WHERE u.id = ?`,
      [id]
    );
  }

  findAll() {
    return this.database.query(
      `SELECT u.id, u.name AS userName, u.email, u.role_id AS role_id, r.role_name FROM ${this.table} AS u JOIN role AS r ON r.id = u.role_id`
    );
  }

  findByEmail(email) {
    return this.database.query(`SELECT * FROM  ${this.table} WHERE email=?`, [
      email,
    ]);
  }
}

module.exports = UserManager;
