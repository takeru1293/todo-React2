import React from "react";
const ColorfulMessage = (props) => {
  const { color, children } = props;
  const constentStyle = {
    color,
    fondSize: "18px"
  };
  return <p style={constentStyle}>{children}</p>;
};

export default ColorfulMessage;
