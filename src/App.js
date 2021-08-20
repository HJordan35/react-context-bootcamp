import { useState } from "react";
import MainNav from "./components/main-nav/main-nav";
import MainContent from "./components/main-content/main-content";
import Secret from "./components/secret/secret";
import "./App.css";

function App() {
  const [activeTheme, setActiveTheme] = useState("light");

  const toggleThemeHandler = (val) => {
    const newTheme = val ? "light" : "dark";

    setActiveTheme(newTheme);
  };

  return (
    <div className="app">
      <MainNav activeTheme={activeTheme} onToggleTheme={toggleThemeHandler} />
      <MainContent activeTheme={activeTheme} />
      <Secret />
    </div>
  );
}

export default App;
