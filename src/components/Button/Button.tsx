import React from "react";
import "./Button.css";

type ButtonSize = "small" | "medium" | "large";
type ButtonVariant = "primary" | "secondary" | "text";
type ButtonState = "default" | "hover" | "pressed" | "disabled";

type ButtonProps = {
  children: React.ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  state?: ButtonState;
  disabled?: boolean;
  icon?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium",
  variant = "primary",
  state = "default",
  disabled = false,
  icon = false,
  onClick,
}) => {
  const classes = `
    ui-button
    ${size}
    ${variant}
    ${state}
    ${disabled ? "disabled" : ""}
  `;

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <span className="btn-icon">👤</span>}
      {children}
      {icon && <span className="btn-icon">👤</span>}
    </button>
  );
};

export default Button;
