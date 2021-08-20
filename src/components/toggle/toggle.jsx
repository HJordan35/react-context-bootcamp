import React from "react";
import Switch from "react-switch";
import { Sun, Moon } from "react-feather";

import "./toggle.css";

const Toggle = (props) => {
  const { activeTheme, onChange } = props;
  const baseClass = "theme-toggle";

  const getActiveThemeClass = () => {
    return baseClass + `--${activeTheme}`;
  };

  return (
    <label>
      <Switch
        className={`${baseClass} ${getActiveThemeClass()}`}
        onChange={onChange}
        onColor={"#FFFFFF"}
        offColor={"#2c2e40"}
        offHandleColor="#FFFFFF"
        onHandleColor="#2c2e40"
        uncheckedIcon={<Moon size={20} color="white" />}
        checkedIcon={<Sun size={20} color="#2c2e40" />}
        checked={activeTheme === "light"}
      />
    </label>
  );
};

export default Toggle;
