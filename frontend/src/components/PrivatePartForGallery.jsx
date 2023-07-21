import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import AdminEditManga from "../pages/AdminEditManga";
// import trashIcon from "../assets/Trash.svg";

export default function PrivatePartForGallery({ authorizedRoles, mangaId }) {
  const navigate = useNavigate();
  const [{ user }] = useUserContext();

  const deleteArt = () => {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette œuvre ?")) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/mangas/${mangaId}`, {
        method: "DELETE",
        credentials: "include",
      })
        .then(() => navigate("/"))
        .catch((err) => console.error(err));
    }
  };

  if (user && authorizedRoles.find((role) => role === user.role_id)) {
    return (
      <div className="icon-gallery-page-container">
        <Link
          to={`/admin-edit-manga/${mangaId}`}
          element={<AdminEditManga />}
          className="icon-gallery-page"
        >
          ✎
        </Link>
        <button type="button" onClick={deleteArt} className="icon-gallery-page">
          <img src="" alt="trash-icon" />
        </button>
      </div>
    );
  }
}

PrivatePartForGallery.propTypes = {
  authorizedRoles: PropTypes.arrayOf(PropTypes.number).isRequired,
  mangaId: PropTypes.number.isRequired,
};
