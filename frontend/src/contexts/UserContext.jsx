import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

const UserContext = createContext();

export default UserContext;

function UserContextProvider({ children, reducer, initialState }) {
  return (
    <UserContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </UserContext.Provider>
  );
}

const useUserContext = () => useContext(UserContext);

export { UserContextProvider, useUserContext };

UserContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
  reducer: PropTypes.func.isRequired,
  initialState: PropTypes.shape({
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstname: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      role_id: PropTypes.number.isRequired,
    }),
  }).isRequired,
};
