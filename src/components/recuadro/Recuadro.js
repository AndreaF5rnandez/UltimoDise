import React from "react";

const Recuadro = () => {
  return (
    <div>
      <>
        <div
          style={{
            display: "grid",
            placeItems: "center",
            backgroundColor: "#f2f2f2",
            paddingTop: "2rem",
            paddingBottom: "2rem",
          }}
        >
          <div
            className="rounded-3 py-5 shadow "
            style={{
              width: "90rem",
              display: "grid",
              placeItems: "center",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                display: "grid",
                placeItems: "center",
              }}
            ></div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Recuadro;
