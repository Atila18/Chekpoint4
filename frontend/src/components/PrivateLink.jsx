import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useUserContext } from "../contexts/UserContext";

export default function PrivateLink({
  authorizedRoles,
  to,
  text,
  handleClick,
}) {
  const [{ user }] = useUserContext();

  if (user && authorizedRoles.find((role) => role === user.role_id)) {
    return (
      <li className="nav-text">
        <NavLink to={to} onClick={handleClick}>
          {text}
        </NavLink>
      </li>
    );
  }
}

PrivateLink.propTypes = {
  authorizedRoles: PropTypes.arrayOf(PropTypes.number).isRequired,
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
