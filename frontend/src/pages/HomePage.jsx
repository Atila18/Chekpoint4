import { useState, useEffect } from "react";
import "./HomePage.css";
import MangaAPI from "../components/MangaAPI";

export default function HomePage() {
  const [mangaList, setMangaList] = useState([]);

  const getMangas = () => {
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
    getMangas();
  }, []);

  return (
    <>
      <h1 className="mangas-connus"> Les plus connus </h1>
      <section className="carousel" aria-label="Gallery">
        <div className="mangas"> </div>
        <ol className="carousel__viewport">
          <li id="carousel__slide1" tabIndex="0" className="carousel__slide">
            <div className="carousel__snapper">
              <a href="#carousel__slide4" className="carousel__prev">
                Go to last slide
              </a>
              <a href="#carousel__slide2" className="carousel__next">
                Go to next slide
              </a>
            </div>
          </li>
          <li id="carousel__slide2" tabIndex="0" className="carousel__slide">
            <div className="carousel__snapper"> </div>
            <a href="#carousel__slide1" className="carousel__prev">
              Go to previous slide
            </a>
            <a href="#carousel__slide3" className="carousel__next">
              Go to next slide
            </a>
          </li>
          <li id="carousel__slide3" tabIndex="0" className="carousel__slide">
            <div className="carousel__snapper"> </div>
            <a href="#carousel__slide2" className="carousel__prev">
              Go to previous slide
            </a>
            <a href="#carousel__slide4" className="carousel__next">
              Go to next slide
            </a>
          </li>
          <li id="carousel__slide4" tabIndex="0" className="carousel__slide">
            <div className="carousel__snapper"> </div>
          </li>
        </ol>
        <aside className="carousel__navigation">
          <ol className="carousel__navigation-list">
            <li className="carousel__navigation-item">
              <a
                href="#carousel__slide1"
                className="carousel__navigation-button"
              >
                Go to slide 1
              </a>
            </li>
            <li className="carousel__navigation-item">
              <a
                href="#carousel__slide2"
                className="carousel__navigation-button"
              >
                Go to slide 2
              </a>
            </li>
            <li className="carousel__navigation-item">
              <a
                href="#carousel__slide3"
                className="carousel__navigation-button"
              >
                Go to slide 3
              </a>
            </li>
            <li className="carousel__navigation-item">
              <a
                href="#carousel__slide4"
                className="carousel__navigation-button"
              >
                Go to slide 4
              </a>
            </li>
          </ol>
        </aside>
      </section>
      <h2>Quelques mangas pour vous</h2>
      <section className="box-mangas">
        <div className="bandeau-mangas">
          <div className="container-mangas">
            {mangaList
              .filter((item) => item.categorie_name === "Manga")
              .map((manga) => (
                <MangaAPI {...manga} key={`manga-${manga.id}`} />
              ))}
          </div>
        </div>
      </section>
      <h2>Quelques Animes pour vous</h2>
      <section className="box-anime">
        <div className="bandeau-anime">
          <div className="container-anime">
            {mangaList
              .filter((item) => item.categorie_name === "Anime")
              .map((manga) => (
                <MangaAPI {...manga} key={`manga-${manga.id}`} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
