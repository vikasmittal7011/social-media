import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./components/users/pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Users />} />
        <Route exact path="*" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
