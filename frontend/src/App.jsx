import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Catalogue from "./pages/Catalogue";
import Connection from "./pages/Connection";
import SignUp from "./components/SignUp";
import MangasDetails from "./pages/MangaDetails";
import Admin from "./pages/Admin";
import PrivateRoutes from "./components/PrivateRoutes";
import AdminCreateManga from "./pages/AdminCreateManga";
import AllUser from "./pages/AllUser";
import UserProfile from "./components/UserProfile";
import AdminEditManga from "./pages/AdminEditManga";

function App() {
  return (
    <main>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/mangaDetails/:id" element={<MangasDetails />} />
          <Route path="/connexion" element={<Connection />} />
          <Route path="/s'inscrire" element={<SignUp />} />
          <Route path="/utilisateur" element={<UserProfile />} />
          <Route path="/utilisateur/:id" element={<UserProfile />} />
          <Route path="/" element={<PrivateRoutes authorizedRoles={[1]} />}>
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin-create-manga" element={<AdminCreateManga />} />
            <Route path="/admin-edit-manga/:id" element={<AdminEditManga />} />
            {/* <Route
              path="/admin-create-author"
              element={<AdminCreateAuthor />}
            />
            <Route
              path="/admin-create-art-type"
              element={<AdminCreateArtType />}
            />
            <Route
              path="/admin-create-category"
              element={<AdminCreateCategory />}
            /> */}
            <Route path="/alluser" element={<AllUser />} />
            {/* <Route path="/admin-edit-user/:id" element={<EditUser />} /> */}
          </Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
