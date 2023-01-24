import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Characters from "./pages/characters";
import Error404 from "./pages/error404";
import Home from "./pages/home";

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        {/* <Route path="/info" element={<InfoPage />} /> */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default Routers;
