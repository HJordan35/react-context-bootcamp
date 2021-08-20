import React from "react";
import ContentCard from "../content-card/content-card";
import "./main-content.css";

const MainContent = (props) => {
  const { activeTheme } = props;
  const baseClass = "layout";

  const getActiveThemeClass = () => {
    return baseClass + `--${activeTheme}`;
  };

  return (
    <div className={`${baseClass} ${getActiveThemeClass()}`}>
      <div className="layout-main">
        <ContentCard activeTheme={activeTheme} />
      </div>
    </div>
  );
};

export default MainContent;
