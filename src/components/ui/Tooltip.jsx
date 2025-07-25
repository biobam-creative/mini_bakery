import React, { useState } from "react";

function Tooltip({ helpText, children }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <span
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </span>
      {isVisible && (
        <div
          style={{
            position: "absolute",
            background: "#333",
            color: "white",
            padding: "8px",
            borderRadius: "4px",
            bottom: "120%", // Position above the element
            left: "50%",
            transform: "translateX(-50%)",
            whiteSpace: "nowrap",
            zIndex: 1,
          }}
        >
          {helpText}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
