/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from "react";
import AllUserAPI from "../components/AllUserAPI";

export default function AllUser() {
  const [users, setUserList] = useState([]);

  const getUsers = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setUserList(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <section className="user-be-container">
      <h1 className="user-title">Gerer les utilisateurs </h1>
      <div className="user-container">
        {users.map((user) => {
          return <AllUserAPI {...user} key={`user-${user.id}`} />;
        })}
      </div>
    </section>
  );
}
