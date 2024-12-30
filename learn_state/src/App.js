import { useState } from "react";

function App() {

  const [name, setName] = useState("");

  const handleClick = () => {
    setName("Akash");
  }

  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
