import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  classes: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, classes = "" }) => {
  return (
    <>
      <button className={classes} onClick={onClick}>
        {label}
      </button>
    </>
  );
};

export default Button;
