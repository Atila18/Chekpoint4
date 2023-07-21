import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./AllUserAPI.css";

function AllUserAPI({ id, userName, email }) {
  const navigate = useNavigate();

  const deleteUser = () => {
    if (confirm("Etes-vous sûr de vouloir supprimer l'utilisateur ?")) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/${id}`, {
        method: "DELETE",
        credentials: "include",
      })
        .then(() => {
          navigate("/admin");
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <>
      <div> </div>
      <section className="tableau">
        <ul className="user">
          <li className="id">{id}</li>
          <li className="name">{userName}</li>
          <li className="email">{email}</li>
          <Link className="btn" to={`/admin-edit-user/${id}`}>
            <p
              className="pen"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Modifier l'utilisateur"
            >
              ✎
            </p>
          </Link>
          <button className="btn" type="button" onClick={deleteUser}>
            <img
              src=""
              alt="trash"
              className="trash"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Supprimer l'utilisateur"
            />
          </button>
        </ul>
      </section>
    </>
  );
}

AllUserAPI.propTypes = {
  userName: PropTypes.string,
  email: PropTypes.string,
  id: PropTypes.number.isRequired,
};

AllUserAPI.defaultProps = {
  userName: undefined,
  email: undefined,
};

export default AllUserAPI;
