import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Characters from "./pages/characters";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />

      </Routes>
    </Router>
  );
}

export default App;
