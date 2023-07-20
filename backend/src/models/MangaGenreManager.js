const AbstractManager = require("./AbstractManager");

class MangaGenreManager extends AbstractManager {
  constructor() {
    super({ table: "mangaGenre" });
  }

  insert(mangaGenre) {
    return this.database.query(
      `INSERT INTO ${this.table} (genre_id, manga_id) VALUES (?, ?)`,
      [mangaGenre.genre_id, mangaGenre.manga_id]
    );
  }

  update(mangaGenre) {
    return this.database.query(
      `UPDATE ${this.table} SET manga_id = ?,
      genre_id = ?`,
      [mangaGenre.manga_id, mangaGenre.user_id]
    );
  }

  findAll() {
    return this.database.query(
      `SELECT mangaGenre.id, mangaGenre.manga_id, mangaGenre.genre_id, manga.manga_name, genre.genre_name FROM ${this.table} JOIN manga ON manga.id = mangaGenre.manga_id JOIN enre ON genre.id = mangaGenre.genre_id`
    );
  }

  findByUser(genreId) {
    return this.database.query(
      `SELECT mangaGenre.id, mangaGenre.manga_id, mangaGenre.genre_id, manga.manga_name, genre.genre_name FROM ${this.table} JOIN manga ON manga.id = mangaGenre.manga_id JOIN enre ON genre.id = mangaGenre.genre_id`,
      [genreId]
    );
  }

  find(mangaGenreId) {
    return this.database.query(
      `SELECT mangaGenre.id, mangaGenre.manga_id, mangaGenre.genre_id, manga.manga_name, genre.genre_name FROM ${this.table} JOIN manga ON manga.id = mangaGenre.manga_id JOIN enre ON genre.id = mangaGenre.genre_id`,
      [mangaGenreId]
    );
  }

  delete(genreId, mangaGenreId) {
    return this.database.query(
      `DELETE FROM ${this.table} WHERE genre_id = ? AND manga_id = ?`,
      [genreId, mangaGenreId]
    );
  }
}

module.exports = MangaGenreManager;
