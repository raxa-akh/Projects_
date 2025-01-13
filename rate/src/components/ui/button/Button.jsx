import React from "react";
import cl from "./style/Button.module.css";

const Button = ({
  children,
  color,
  padding,
  border,
  backgroundColor,
  fontSize,
  borderRadius,
  width,
  ...props
}) => {
  const buttonColor = {
    backgroundColor: backgroundColor,
    color: color,
    border: border,
    fontSize: fontSize,
    padding: padding,
    borderRadius: borderRadius,
    width: width,
  };
  return (
    <button {...props} className={cl.btn} style={buttonColor}>
      {children}
    </button>
  );
};

export default Button;
