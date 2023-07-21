import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./adminCreateManga.css";

export default function AdminCreateManga() {
  const navigate = useNavigate();

  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);

  const [authorId, setAuthorId] = useState("");
  const [image, setImage] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [categorieId, setCategorieId] = useState("");
  const [mangaName, setMangaName] = useState("");
  const [rating, setRating] = useState("");
  const [synopsis, setSynopsis] = useState("");

  const imageTypes = ["image/jpeg", "image/jpg", "image/png"];

  const getAllAuthors = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/authors`, {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAuthors(data);
      })
      .catch((err) => console.error(err));
  };

  const getAllCategories = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/categories`, {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAllAuthors();
    getAllCategories();
  }, []);

  if (!authors || !categories) {
    return <p>En cours de chargement...</p>;
  }

  const allDays = [];
  for (let i = 0; i < 31; i += 1) {
    allDays.push(i + 1);
  }

  const allMonths = [
    { monthNumber: 1, monthName: "janvier" },
    { monthNumber: 2, monthName: "février" },
    { monthNumber: 3, monthName: "mars" },
    { monthNumber: 4, monthName: "avril" },
    { monthNumber: 5, monthName: "mai" },
    { monthNumber: 6, monthName: "juin" },
    { monthNumber: 7, monthName: "juillet" },
    { monthNumber: 8, monthName: "août" },
    { monthNumber: 9, monthName: "septembre" },
    { monthNumber: 10, monthName: "octobre" },
    { monthNumber: 11, monthName: "novembre" },
    { monthNumber: 12, monthName: "décembre" },
  ];

  const allYears = [];
  for (let i = 1980; i < 2023; i += 1) {
    allYears.push(i + 1);
  }

  const handleChangeAuthorId = (e) => {
    const authorIdToUpdate = parseInt(e.target.value, 10);

    if (!Number.isNaN(authorIdToUpdate)) {
      setAuthorId(authorIdToUpdate);
    } else {
      alert("Veuillez remplir ce champ");
    }
  };

  const handleChangeImage = (e) => {
    const fileSelected = e.target.files[0];

    if (imageTypes.includes(fileSelected.type)) {
      setImage(e.target.files[0]);
    } else {
      alert("Votre image doit être au format .jpeg, .jpg ou .png, .webp");
    }
  };

  const handleChangeMangaName = (e) => {
    setMangaName(e.target.value);
  };

  const handleChangeRating = (e) => {
    setRating(e.target.value);
  };

  const handleChangeSynopsis = (e) => {
    setSynopsis(e.target.value);
  };

  const handleChangeDay = (e) => {
    const dayToUpdate = parseInt(e.target.value, 10);

    setDay(dayToUpdate);
  };

  const handleChangeMonth = (e) => {
    const monthToUpdate = parseInt(e.target.value, 10);

    setMonth(monthToUpdate);
  };

  const handleChangeYear = (e) => {
    const yearToUpdate = parseInt(e.target.value, 10);

    if (!Number.isNaN(yearToUpdate)) {
      setYear(yearToUpdate);
    } else {
      alert('Le champ "Année" est requis, veuillez renseigner une valeur');
    }
  };

  const handleChangeCategorieId = (e) => {
    const categorieIdToUpdate = parseInt(e.target.value, 10);

    if (!Number.isNaN(categorieIdToUpdate)) {
      setCategorieId(categorieIdToUpdate);
    } else {
      alert(
        'Le champ "Catégorie" est requis, veuillez sélectionner une catégorie'
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!mangaName || !authorId || !categorieId) {
      alert("Veuillez remplir tous les champs obligatoires.");
    } else {
      const modelData = new FormData();

      modelData.append("manga_name", mangaName);
      modelData.append("year", year);
      modelData.append("author_id", authorId);
      modelData.append("categorie_id", categorieId);
      if (day) {
        modelData.append("day", day);
      }
      if (month) {
        modelData.append("month", month);
      }
      if (rating) {
        modelData.append("rating", rating);
      }
      if (synopsis) {
        modelData.append("synopsis", synopsis);
      }
      if (image) {
        modelData.append("image", image);
      }

      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/mangas`, {
        method: "POST",
        credentials: "include",
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
        body: modelData,
      })
        .then((res) => res.json())
        .then((data) => {
          navigate(`/mangaDetails/${data.id}`);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <>
      <div> </div>
      <div className="form-container-manga">
        <h2 className="create-manga">Enregistrer un nouveau manga</h2>
        <p className="required-fields">* : champs obligatoires</p>
        <section className="form">
          <form className="form-manga" onSubmit={handleSubmit}>
            <p>
              Manga Name <strong>*</strong>
            </p>
            <label htmlFor="manga_name">
              <input
                type="text"
                id="manga_name"
                placeholder="Sans titre"
                value={mangaName}
                onChange={handleChangeMangaName}
              />
            </label>
            <p>
              Synopsis <strong>*</strong>
            </p>
            <label htmlFor="synopsis">
              <input
                type="text"
                id="synopsis"
                placeholder="Sans titre"
                value={synopsis}
                onChange={handleChangeSynopsis}
              />
            </label>
            <p>Rating</p>
            <label htmlFor="rating">
              <input
                type="text"
                id="rating"
                placeholder="Sans titre"
                value={rating}
                onChange={handleChangeRating}
              />
            </label>
            <p>
              Auteur <strong>*</strong>
            </p>
            <label htmlFor="authorId" className="label-with-link-to-add-data">
              <select
                className="select-author"
                name="authorId"
                onChange={handleChangeAuthorId}
              >
                <option value="">Veuillez sélectionner un auteur</option>
                {authors.map((author) => (
                  <option value={author.id} key={author.id}>
                    {author.firstname} {author.lastname}
                  </option>
                ))}
              </select>
              {/* <div className="to-add-data">
                <Link to="/admin-create-author" className="to-add-data">
                  +
                </Link>
              </div> */}
            </label>
            <p>
              Image <strong>*</strong>
            </p>
            <label htmlFor="image">
              <input type="file" id="image" onChange={handleChangeImage} />
            </label>
            <p>Date de réalisation</p>
            <label htmlFor="creationDate" className="date-label">
              <select
                className="create-manga"
                name="day"
                onChange={handleChangeDay}
              >
                <option value="">Jour</option>
                {allDays.map((daySelected) => (
                  <option value={daySelected} key={daySelected}>
                    {daySelected}
                  </option>
                ))}
              </select>
              <select
                className="create-manga"
                name="month"
                onChange={handleChangeMonth}
              >
                <option value="">Mois</option>
                {allMonths.map((monthSelected) => (
                  <option
                    value={monthSelected.monthNumber}
                    key={monthSelected.monthNumber}
                  >
                    {monthSelected.monthName}
                  </option>
                ))}
              </select>
              <select
                className="create-manga"
                name="year"
                onChange={handleChangeYear}
              >
                <option value="">Année *</option>
                {allYears.map((yearSelected) => (
                  <option value={yearSelected} key={yearSelected}>
                    {yearSelected}
                  </option>
                ))}
              </select>
            </label>
            <p>
              Catégorie <strong>*</strong>
            </p>
            <label htmlFor="categoryId" className="label-with-link-to-add-data">
              <select
                className="select-categorie"
                name="categoryId"
                onChange={handleChangeCategorieId}
              >
                <option value="">Veuillez sélectionner une catégorie</option>
                {categories.map((categorie) => (
                  <option value={categorie.id} key={categorie.id}>
                    {categorie.categorie_name}
                  </option>
                ))}
              </select>
              {/* <div className="to-add-data">
                <Link to="/admin-create-category" className="to-add-data">
                  +
                </Link>
              </div> */}
            </label>
            <button type="submit">Enregistrer le manga</button>
          </form>
        </section>
      </div>
    </>
  );
}
