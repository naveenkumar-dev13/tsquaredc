import React from "react";
import "./index.css";
function Button({ Children }) {
  return (
    <div>
      <button>{Children}</button>
    </div>
  );
}

export default Button;
