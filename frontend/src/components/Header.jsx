import { Link } from "react-router-dom";
import { useState } from "react";
import { useUserContext } from "../contexts/UserContext";
import "./Header.css";

export default function Header() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };
  const [{ user }, dispatch] = useUserContext();

  const handleLogout = () => {
    dispatch({ type: "RESET_USER" });
  };
  return (
    <header className="header-big-container">
      <div className="navbar-header">
        <Link to="/">
          <h1>Manga-dono</h1>
        </Link>
        <input
          id="searchbar"
          value={searchValue}
          onChange={handleSearchChange}
          type="text"
          name="search"
          placeholder="Rechercher Manga/Anime"
        />
        <li className="nav-text">
          <Link to="/catalogue">Catalogue</Link>
        </li>
        {!user ? (
          <li className="nav-text">
            <Link to="/connexion">Connexion</Link>
          </li>
        ) : (
          <li className="nav-text">
            <Link to="/" onClick={handleLogout}>
              Déconnexion
            </Link>
          </li>
        )}
      </div>
    </header>
  );
}
