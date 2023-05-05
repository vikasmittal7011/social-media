import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./components/users/pages/Users";
import Navbar from "./components/shared/components/Navbar";
import About from "./components/shared/components/About";
import UserPlace from "./components/places/pages/UserPlace";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{marginTop: "5rem"}}>
        <Routes>
          <Route exact path="/" element={<Users />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="/:userID/places" element={<UserPlace />} />
          <Route path="*" element={<Users />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
