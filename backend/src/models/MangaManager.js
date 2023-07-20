const AbstractManager = require("./AbstractManager");

class MangaManager extends AbstractManager {
  constructor() {
    super({ table: "manga" });
  }

  insert(manga) {
    return this.database.query(
      `INSERT INTO ${this.table} (image, manga_name, rating, day, month, year, synopsis, categorie_id, author_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        manga.image,
        manga.manga_name,
        manga.rating,
        manga.day,
        manga.month,
        manga.year,
        manga.synopsis,
        manga.categorie_id,
        manga.author_id,
      ]
    );
  }

  update(manga) {
    return this.database.query(
      `UPDATE ${this.table} SET image = ?,
      manga_name =?,
      synopsis = ?,
      rating = ?,
      where id = ?`,
      [manga.image, manga.manga_name, manga.synopsis, manga.rating, manga.id]
    );
  }

  findAll() {
    return this.database.query(
      `SELECT manga.id, manga.image, manga.manga_name AS mangaName, manga.day, manga.month, manga.year, manga.synopsis, c.categorie_name, a.firstname, a.lastname FROM ${this.table} JOIN categorie AS c ON c.id = manga.categorie_id JOIN author AS a ON a.id = manga.author_id`
    );
  }
}

module.exports = MangaManager;
