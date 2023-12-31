// App.jsx

import Counter from "./components/Counter";
import "./App.css";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div className={"App " + theme}>
      <h1>React - state and events</h1>

      <Counter />

      <select
        onChange={(event) => {
          toggleTheme;
        }}
      >
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select>
    </div>
  );
}
export default App;
