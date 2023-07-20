const models = require("../models");

const browse = (req, res) => {
  models.mangaGenre
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  const mangaGenre = req.params.id;

  models.mangaGenre
    .find(mangaGenre)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const mangaGenre = req.body;

  // TODO validations (length, format...)

  mangaGenre.id = parseInt(req.params.id, 10);

  models.mangaGenre
    .update(mangaGenre)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const mangaGenre = req.body;

  // TODO validations (length, format...)

  models.mangaGenre
    .insert(mangaGenre)
    .then(([result]) => {
      res.location(`/mangaGenres/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  const { mangaId, genreId } = req.body;
  models.favorite
    .delete(mangaId, genreId)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
