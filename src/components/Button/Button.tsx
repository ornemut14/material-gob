import React from "react";
import "./Button.css";

type Size = "small" | "medium" | "large";
type Variant = "primary" | "secondary" | "text";
type State = "default" | "hover" | "pressed";

type ButtonProps = {
  children: React.ReactNode;
  size?: Size;
  variant?: Variant;
  state?: State;
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
  icon = true,
  onClick,
}) => {
  const className = `
    ui-btn
    ${size}
    ${variant}
    ${state}
    ${disabled ? "disabled" : ""}
  `;

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <span className="btn-icon">👤</span>}
      <span>{children}</span>
      {icon && <span className="btn-icon">👤</span>}
    </button>
  );
};

export default Button;
