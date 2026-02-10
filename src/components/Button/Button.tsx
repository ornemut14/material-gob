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
  Primaryicon?: any;
  Secondaryicon?: any;
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
  Primaryicon = false,
  Secondaryicon = false,
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
      {Primaryicon && 
      <span className="btn-icon">
        {Primaryicon}
        </span>}

      <span>{children}</span>

      {Secondaryicon && 
      <span className="btn-icon">
          {Secondaryicon}
        </span>}
    </button>
  );
};

export default Button;
