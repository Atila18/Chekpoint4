const AbstractManager = require("./AbstractManager");

class GenreManager extends AbstractManager {
  constructor() {
    super({ table: "genre" });
  }

  insert(genre) {
    return this.database.query(
      `INSERT INTO ${this.table} (genre_name) VALUES (?)`,
      [genre.genre_name]
    );
  }

  update(genre) {
    return this.database.query(`UPDATE ${this.table} SET genre_name = ?`, [
      genre.genre_name,
    ]);
  }

  findAll() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }
}

module.exports = GenreManager;
