const AbstractManager = require("./AbstractManager");

class RoleManager extends AbstractManager {
  constructor() {
    super({ table: "role" });
  }

  insert(role) {
    return this.database.query(
      `INSERT INTO ${this.table} (role_name) VALUES (?)`,
      [role.role_name]
    );
  }

  update(role) {
    return this.database.query(`UPDATE ${this.table} SET role_name = ?`, [
      role.role_name,
    ]);
  }

  findAll() {
    return this.database.query(`SELECT role_name FROM ${this.table}`);
  }
}

module.exports = RoleManager;
