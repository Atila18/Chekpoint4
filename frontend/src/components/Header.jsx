import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useUserContext } from "../contexts/UserContext";
import "./Header.css";

export default function Header() {
  const [searchValue, setSearchValue] = useState("");
  const [sidebar, setSideBar] = useState(false);

  const showSidebar = () => setSideBar(!sidebar);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };
  const [{ user }, dispatch] = useUserContext();

  const handleLogout = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/logout`,
        {
          credentials: "include",
        }
      );

      if (response.ok) {
        dispatch({ type: "RESET_USER" });
      } else {
        const errorData = await response.json();
        alert(errorData, "error");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred while logging out.", "error");
    }
  };
  return (
    <>
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
          <div className="account">
            {!user ? (
              <Link to="/connexion">
                <img src="" alt="Icône de connexion d'un utilisateur" />
              </Link>
            ) : (
              <Link to={`/utilisateur/${user.id}`}>
                <img src="" alt="Icône de connexion d'un utilisateur" />
              </Link>
            )}
          </div>
          {user ? (
            <Link to={`/utilisateur/${user.id}`}>
              <div className="useraccountconnected">
                {user.firstname} {user.lastname}
              </div>
            </Link>
          ) : null}
          <FaBars
            className="icone-burger"
            onClick={() => {
              showSidebar();
            }}
          />
        </div>
      </header>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="nav-text">
            <Link
              to="/"
              onClick={() => {
                showSidebar();
              }}
            >
              Catalogue
            </Link>
          </li>
          {!user ? (
            <li className="nav-text">
              <Link
                to="/connexion"
                onClick={() => {
                  showSidebar();
                }}
              >
                Connexion
              </Link>
            </li>
          ) : (
            <li className="nav-text">
              <Link
                to="/"
                onClick={() => {
                  showSidebar();
                  handleLogout();
                }}
              >
                Déconnexion
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}
