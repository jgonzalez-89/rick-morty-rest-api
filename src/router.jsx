import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Characters from "./pages/charactersPage";
import Home from "./pages/homePage";
import Navbar from "./components/navbar";
import NotFound from "./pages/error404Page";


function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default Routers;
