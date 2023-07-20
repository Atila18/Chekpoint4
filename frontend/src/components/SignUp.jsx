import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./SignUp.css";

function SignUp() {
  const navigate = useNavigate();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!firstname || !lastname || !email || !password) {
      //   toast.alert(
      //     "Vous devez fournir un nom, un prénom, un mail et un mot de passe"
      //   );
    } else {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          password,
          role_id: 2,
        }),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(`/connexion`);
        })
        .catch(() => {
          res.status(404);
        });
    }
  };

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="firstname">Prénom</label>
          <input
            className="border2"
            type="text"
            name="firstname"
            required
            onChange={handleChangeFirstName}
          />
        </div>
        <div className="input-container">
          <label htmlFor="lastname">Nom </label>
          <input
            className="border2"
            type="text"
            name="lastname"
            required
            onChange={handleChangeLastName}
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email </label>
          <input
            className="border2"
            type="email"
            name="email"
            required
            onChange={handleChangeEmail}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Mot de passe </label>
          <input
            className="border2"
            type="password"
            name="pass"
            required
            onChange={handleChangePassword}
          />
        </div>
        <div className="button-container">
          <button type="submit"> Enregistrer </button>
        </div>
      </form>
    </div>
  );

  return (
    <>
      <div>
        <Toaster position="bottom-center" />
      </div>
      <div className="app">
        <div className="login-form">
          <div className="title">S'inscrire</div>
          {renderForm}
        </div>
      </div>
    </>
  );
}

export default SignUp;
