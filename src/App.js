import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./components/users/pages/Users";
import Navbar from "./components/shared/components/Navbar";
import About from "./components/shared/components/About";
import UserPlace from "./components/places/pages/UserPlace";
import Alert from "./components/shared/components/Alert";
import { useSelector } from "react-redux";
import AddPlaces from "./components/places/pages/AddPlaces";
import UpdatePlace from "./components/places/pages/UpdatePlace";
import Auth from "./components/users/pages/Auth";
import Register from "./components/users/pages/Register";

function App() {
  const alert = useSelector((state) => state.alert);
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <main style={{ marginTop: "5rem" }}>
          <Alert alert={alert} />
          <Routes>
            <Route exact path="/" element={<Users />} />
            <Route exact path="about" element={<About />} />
            <Route exact path="/:userID/places" element={<UserPlace />} />
            <Route exact path="/places/addPlace" element={<AddPlaces />} />
            <Route exact path="/places/:placeId" element={<UpdatePlace />} />
            <Route exact path="/login" element={<Auth />} />
            <Route exact path="/register" element={<Register />} />
            <Route path="*" element={<Users />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
