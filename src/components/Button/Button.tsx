import React from "react";
import "./Button.css";

// 👉 Importamos tu ícono
import UserPlusIcon from "../Icons/usericons/userplusicon/userplusicon";

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
  width?: string;
  height?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium",
  variant = "primary",
  state = "default",
  disabled = false,
  icon = false,
  width,
  height,
  onClick,
}) => {
  const className = `
    ui-btn
    ${size}
    ${variant}
    ${state}
    ${disabled ? "disabled" : ""}
  `;

  const style = {
    width,
    height,
  };

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      style={style}
    >
      {icon && (
        <span className="btn-icon">
          
        </span>
      )}

      <span>{children}</span>

      {icon && (
        <span className="btn-icon">
          <UserPlusIcon variant="white" />
        </span>
      )}
    </button>
  );
};

export default Button;
