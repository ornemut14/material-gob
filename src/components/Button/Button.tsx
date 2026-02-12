import React from "react";
import "./Button.css";
import { GobButtonProps  } from "./Button.types";

// 👉 Importamos tu ícono
import UserPlusIcon from "../Icons/usericons/userplusicon/userplusicon";


export const GobButton = ({
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
}: GobButtonProps) => {
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