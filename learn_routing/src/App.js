import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <button><Link to='/'>Home</Link></button>
      <button><Link to='/about'>About</Link></button>
      <button><Link to='/contact'>Contact</Link></button>
      <h1>App Component</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
