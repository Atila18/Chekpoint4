import { useState, useEffect } from "react";
import MangaAPI from "../components/MangaAPI";
import "./Catalogue.css";

export default function Catalogue() {
  const [mangaList, setMangaList] = useState([]);
  const [currentCat, setCurrentCat] = useState("Tout");

  const gotToTop = () => {
    window.location.hash = "#top";
  };

  const getArts = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/mangas`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setMangaList(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getArts();
  }, []);

  const handleCatChange = (e) => {
    setCurrentCat(e.target.value);
  };

  return (
    <>
      <div className="CatégorieContainer">
        <div>Trier par catégorie : </div>
        <select
          name="categorie"
          id="ArtCat"
          value={currentCat}
          onChange={handleCatChange}
        >
          <option value="Tout">Tout</option>
          <option value="Anime">Anime</option>
          <option value="Manga">Manga</option>
          <option value="Films">Films</option>
          <option value="VostFR">VostFR</option>
          <option value="VF">VF</option>
        </select>
      </div>
      <div className="container">
        {currentCat === "Tout"
          ? mangaList.map((manga) => (
              <MangaAPI {...manga} key={`manga-${manga.id}`} />
            ))
          : mangaList
              .filter((manga) => manga.categorie_name === currentCat)
              .map((manga) => (
                <MangaAPI {...manga} key={`manga-${manga.id}`} />
              ))}
      </div>
      <button type="button" onClick={gotToTop} className="scroll_to_top">
        ^
      </button>
    </>
  );
}
