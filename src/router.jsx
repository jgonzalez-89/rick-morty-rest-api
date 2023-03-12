import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Characters from './pages/characters';
import Error404 from './pages/error404';
import Home from './pages/home';
import { useSelector } from 'react-redux';
import Blog from './pages/blog';

function App() {
  const propsState = useSelector((state) => state.tasks);
  // console.log(propsState)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/blog" element={<Blog />} />

        {/* <Route path="/info" element={<InfoPage />} /> */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
