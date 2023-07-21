const AbstractManager = require("./AbstractManager");

class CategoryManager extends AbstractManager {
  constructor() {
    super({ table: "categorie" });
  }

  insert(categorie) {
    return this.database.query(
      `INSERT INTO ${this.table} (categorie_name) VALUES (?)`,
      [categorie.categorie_name]
    );
  }

  update(categorie) {
    return this.database.query(`UPDATE ${this.table} SET categorie_name = ?`, [
      categorie.categorie_name,
    ]);
  }

  findAll() {
    return this.database.query(
      `SELECT c.id, c.categorie_name FROM ${this.table} AS c`
    );
  }
}

module.exports = CategoryManager;
