import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./components/users/pages/Users";
import NewPlace from "./components/places/pages/NewPlace";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Users />} />
        <Route exact path="places/new" element={<NewPlace />} />
        <Route path="*" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
