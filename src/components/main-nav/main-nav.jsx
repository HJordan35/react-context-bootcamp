import React from "react";
import Toggle from "../toggle/toggle";
import "./main-nav.css";

const MainNav = (props) => {
  const { activeTheme, onToggleTheme } = props;
  const baseClass = "main-nav";

  const getActiveThemeClass = () => {
    return baseClass + `--${activeTheme}`;
  };

  return (
    <nav className={`${baseClass} ${getActiveThemeClass()}`}>
      <div className="main-nav-content">
        <h1>REACT CONTEXT</h1>
        <Toggle activeTheme={activeTheme} onChange={onToggleTheme} />
      </div>
    </nav>
  );
};

export default MainNav;
