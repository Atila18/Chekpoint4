const AbstractManager = require("./AbstractManager");

class FavoriteManager extends AbstractManager {
  constructor() {
    super({ table: "favorite" });
  }

  insert(favorite) {
    return this.database.query(
      `INSERT INTO ${this.table} (user_id, manga_id) VALUES (?, ?)`,
      [favorite.manga_d, favorite.manga_id]
    );
  }

  update(favorite) {
    return this.database.query(
      `UPDATE ${this.table} SET manga_id = ?,
      user_id = ?`,
      [favorite.manga_id, favorite.user_id]
    );
  }

  findAll() {
    return this.database.query(
      `SELECT fav.id, fav.user_id, fav.manga_id, user.name, manga.image, manga.manga_name FROM ${this.table} AS fav JOIN manga ON manga.id = fav.manga_id JOIN user ON user.id = fav.user_id`
    );
  }

  findByUser(userId) {
    return this.database.query(
      `SELECT fav.id, fav.user_id AS userId, fav.manga_id, manga.image, manga.manga_name FROM ${this.table} AS fav JOIN manga ON manga.id = fav.manga_id JOIN user ON user.id = fav.user_id WHERE fav.user_id = ?`,
      [userId]
    );
  }

  find(favId) {
    return this.database.query(
      `SELECT fav.id AS favId, fav.user_id AS userId, fav.manga_id AS mangaId, manga.image, manga.manga_name FROM ${this.table} AS fav JOIN manga ON manga.id = fav.manga_id JOIN user ON user.id = fav.user_id WHERE fav.id = ?`,
      [favId]
    );
  }

  delete(userId, mangaId) {
    return this.database.query(
      `DELETE FROM ${this.table} WHERE user_id = ? AND manga_id = ?`,
      [userId, mangaId]
    );
  }
}

module.exports = FavoriteManager;
