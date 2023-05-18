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
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state";
// import { useNavigate } from "react-router-dom";

const App = () => {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();
  const { updateUserLogin } = bindActionCreators(actionCreators, dispatch);
  // const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));
  useEffect(() => {
    if (
      userData &&
      userData.token &&
      new Date(userData.expiration) > new Date()
    ) {
      updateUserLogin(userData.userId, userData.token);
    }
  }, [updateUserLogin, userData]);

  useEffect(() => {
    let logoutTimer;
    if (userData) {
      const remainingTime =
        new Date(userData.expiration) - new Date().getTime();
      if (remainingTime < 0) {
        logoutTimer = setTimeout(updateUserLogin(false, false), remainingTime);
        localStorage.removeItem("userData");
      }
    } else {
      clearTimeout(logoutTimer);
    }
  }, [userData, updateUserLogin]);

  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <main style={{ marginTop: "5rem" }}>
          <div style={{ height: "1.5rem" }}>
            <Alert alert={alert} />
          </div>
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
};

export default App;
