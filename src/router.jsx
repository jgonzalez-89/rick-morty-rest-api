import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Characters from "./pages/characters";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import NotFound from "./pages/Error404";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
