import React, { useState } from "react";
import "./botonD.css";

function ButtonWithInputs() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="button-container">
      <button
        className={`expandable-button ${isExpanded ? "expanded" : ""}`}
        onClick={handleClick}
      >
        Click para expandir
      </button>
      {isExpanded && (
        <div className="input-container">
          <input type="text" placeholder="Ingresa tu nombre" />
          <input type="email" placeholder="Ingresa tu correo electrónico" />
          <button>Enviar</button>
        </div>
      )}
    </div>
  );
}

export default ButtonWithInputs;
