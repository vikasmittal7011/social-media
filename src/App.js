import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./components/users/pages/Users";
import Navbar from "./components/shared/components/Navbar";
import About from "./components/shared/components/About";
import UserPlace from "./components/places/pages/UserPlace";
import Alert from "./components/shared/components/Alert";
import { useSelector } from "react-redux";
import AddPlaces from "./components/places/pages/AddPlaces";

function App() {
  const alert = useSelector((state) => state.alert);

  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ marginTop: "5rem" }}>
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<Users />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="/:userID/places" element={<UserPlace />} />
          <Route exact path="/places/addPlace" element={<AddPlaces />} />
          <Route path="*" element={<Users />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
