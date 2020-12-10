import React, { useState } from "react";

export default function Selection(props) {
  const [color, setColor] = useState({ background: "" });
  return (
    <div
      className="fix-box"
      style={color}
      onClick={() => setColor(props.applyColor)}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
}
