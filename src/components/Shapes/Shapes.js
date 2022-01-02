import React from "react";
import Shape from "react-clip-path";
import "./Shapes.css";

const Shapes = () => {
  return (
    <div className="shape">
      <Shape
        width="100%"
        height="160vh"
        showLabel={true}
        backgroundColor="#682de2"
        formula="polygon(42% 0, 100% 0, 100% 31%, 70% 52%);"
      />
    </div>
  );
};

export default Shapes;
