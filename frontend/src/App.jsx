import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Catalogue from "./pages/Catalogue";
import Connection from "./pages/Connection";
import SignUp from "./components/SignUp";

function App() {
  return (
    <main>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/connexion" element={<Connection />} />
          <Route path="/s'inscrire" element={<SignUp />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
