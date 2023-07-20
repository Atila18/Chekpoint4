const AbstractManager = require("./AbstractManager");

class AuthorManager extends AbstractManager {
  constructor() {
    super({ table: "author" });
  }

  insert(author) {
    return this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname) VALUES (?, ?)`,
      [author.firstname, author.lastname]
    );
  }

  update(author) {
    return this.database.query(
      `UPDATE ${this.table} SET firstname = ?,
      lastname =?,
      where id = ?`,
      [author.firstname, author.lastname, author.id]
    );
  }

  findAll() {
    return this.database.query(
      `SELECT au.id, au.firstname, au.lastname FROM ${this.table} AS au`
    );
  }
}

module.exports = AuthorManager;
