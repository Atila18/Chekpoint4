import { Link } from "react-router-dom";
import SignUp from "../components/SignUp";
import AdminCreateManga from "./AdminCreateManga";
import AllUserAPI from "../components/AllUserAPI";
// import GalleryDisplay from "./GalleryDisplay";
// import AllUserAPI from "../components/AllUserAPI";
// import EditUser from "../components/EditUser";
import "./admin.css";
import Catalogue from "./Catalogue";

export default function Admin() {
  return (
    <>
      <div> </div>
      <div className="admin-page-container">
        <div className="link-big-container">
          <h2 className="form-h2">Gérer les œuvres</h2>
          <section className="link-container">
            <Link
              to="/admin-create-manga"
              element={<AdminCreateManga />}
              className="link-looks-like-button"
            >
              Ajouter un manga
            </Link>
            <Link
              to="/catalogue"
              element={<Catalogue />}
              className="link-looks-like-button"
            >
              Modifier une œuvre existante
            </Link>
            <Link
              to="/catalogue"
              element={<Catalogue />}
              className="link-looks-like-button"
            >
              Supprimer une œuvre
            </Link>
          </section>
        </div>
        <div className="link-big-container">
          <h2 className="form-h2">Gérer les utilisateurs</h2>
          <section className="link-container">
            <Link
              to="/s'inscrire"
              element={<SignUp />}
              className="link-looks-like-button"
            >
              Ajouter un utilisateur
            </Link>
            <Link
              to="/alluser"
              element={<AllUserAPI />}
              className="link-looks-like-button"
            >
              Modifier un utilisateur
            </Link>
            <Link
              to="/alluser"
              // element={<EditUser />}
              className="link-looks-like-button"
            >
              Supprimer un utilisateur
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
