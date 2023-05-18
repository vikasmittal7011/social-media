import { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { actionCreators } from "./state";
import Loading from "./components/shared/components/Loading";
const Users = lazy(() => import("./components/users/pages/Users"));
const UpdatePlace = lazy(() => import("./components/places/pages/UpdatePlace"));
const Auth = lazy(() => import("./components/users/pages/Auth"));
const UserPlace = lazy(() => import("./components/places/pages/UserPlace"));
const Alert = lazy(() => import("./components/shared/components/Alert"));
const Navbar = lazy(() => import("./components/shared/components/Navbar"));
const About = lazy(() => import("./components/shared/components/About"));
const Register = lazy(() => import("./components/users/pages/Register"));
const AddPlaces = lazy(() => import("./components/places/pages/AddPlaces"));

const App = () => {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();
  const { updateUserLogin } = bindActionCreators(actionCreators, dispatch);
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
          <Suspense fallback={<Loading />}>
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
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
