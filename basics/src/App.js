
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Greeting from "./Greeting";

function App() {
  return (
    <div>
      <h1>Hello from ReactJS</h1>
      <Home name = {"Akash"} age = {22}/>
      <Greeting name = {"Ayush"} />
      <Greeting name = {"Pushpa"} />
      <About />
      <Contact />
    </div>
  );
}

export default App;
