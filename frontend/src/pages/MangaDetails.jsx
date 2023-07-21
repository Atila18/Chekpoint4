import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./MangaDetails.css";

export default function MangaDetails() {
  const [manga, setManga] = useState();
  const [author, setAuthor] = useState();
  const [categorie, setCategorie] = useState();
  const { id } = useParams();

  const getOneManga = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/mangas/${id}`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setManga(data))
      .catch((error) => console.error(error));
  };

  const getOneAuthor = (authorId) => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/authors/${authorId}`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setAuthor(data))
      .catch((error) => console.error(error));
  };

  const getOneCategorie = (categorieId) => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/categories/${categorieId}`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setCategorie(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getOneManga();
  }, [id]);

  useEffect(() => {
    if (manga && manga.author_id) {
      getOneAuthor(manga.author_id);
    }
  }, [manga]);

  useEffect(() => {
    if (manga && manga.categorie_id) {
      getOneCategorie(manga.categorie_id);
    }
  }, [manga]);

  if (!manga) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div> </div>
      <div className="linkbutton">
        <Link className="returnbutton" to="/catalogue">
          <strong className="back-to-gallery">&#60; Retour au catalogue</strong>
        </Link>
      </div>
      <div className="parentArtDetails">
        <div className="ArtContainer">
          <img
            className="Art"
            src={`${import.meta.env.VITE_ASSETS_IMAGES_URL}/${manga.image}`}
            alt={manga.manga_name}
          />
        </div>
        <div className="ArtAbout">
          {author && (
            <h1 className="ArtAuthor">{`${author.firstname} ${author.lastname}`}</h1>
          )}
          <h1 className="ArtTitle">
            {manga.manga_name} ★{manga.rating}
          </h1>
          {categorie && (
            <h1 className="MangaCategorie">{`${categorie.categorie_name}`}</h1>
          )}
          <h2 className="ArtDimension">
            {`${manga.day} ${manga.month} ${manga.year}`}
          </h2>
          <p className="ArtStory">{manga.synopsis}</p>
        </div>
      </div>
    </>
  );
}
