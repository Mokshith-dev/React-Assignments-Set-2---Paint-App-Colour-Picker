import React, { useState } from "react";

export default function Selection(props) {
  const [color, setColor] = useState({ background: "" });
  return (
    <div
      className="fix-box"
      style={color}
      onClick={() => props.applyColor(setColor)}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
}
