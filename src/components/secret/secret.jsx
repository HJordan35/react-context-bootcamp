import React from "react";

import "./secret.css";

let renderCount = 0;

export const Secret = (props) => {
  const secretStaticText = null;
  renderCount++;
  return (
    <div className="secret">
      {secretStaticText && (
        <>
          <h4>{secretStaticText}</h4>
          <p>{`RENDER COUNT : ${renderCount}`}</p>
        </>
      )}
    </div>
  );
};

export default Secret;
