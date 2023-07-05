import "./styles-lista.css";
import React, { useState } from "react";

export const BotonCheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="form-check divBoton">
      <input
        className="form-check-input botonC"
        type="checkbox"
        value=""
        id="flexCheckChecked"
        checked={isChecked}
        onChange={handleCheckboxChange}
        style={{ backgroundColor: isChecked ? "rgb(1, 110, 16)" : "" }}
      />
    </div>
  );
};
 export default BotonCheckBox;