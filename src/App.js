import NavBar from "./components/NavBar";
import Projects from "./pages/Projects";
import Music from "./pages/Music";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import {Route, Routes} from 'react-router-dom'

function App(){

  return (
      <>
        <NavBar />
        <div className='container'>
          <Routes>
            <Route path = "/" element={<Home />} />
            <Route path = "/music" element={<Music />} />
            <Route path = "/projects" element={<Projects />} />
            <Route path = "/contact" element={<Contact />} />
          </Routes>
        </div>

      </>
  );
}

export default App;
