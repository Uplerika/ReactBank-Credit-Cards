import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: (e) => void;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type,
  disabled,
}) => {
  return (
    <button
      className={`${disabled ? styles.disabled : styles.button}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
