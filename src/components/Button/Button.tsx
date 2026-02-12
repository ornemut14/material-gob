import { GobIcon } from "../GobIcon";
import "./Button.css";
import { GobButtonProps } from "./Button.types";

export const GobButton = ({
  children,
  size = "medium",
  variant = "primary",
  state = "default",
  disabled = false,
  PrimaryiconName,
  PrimaryiconVariant,
  SecondaryiconName,
  SecondaryiconVariant,
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
      {PrimaryiconName &&
        // <span className="btn-icon">
        <GobIcon name={PrimaryiconName} variant={PrimaryiconVariant ? PrimaryiconVariant : 'black'}></GobIcon>
        // </span>
      }

      <span>{children}</span>

      {SecondaryiconName &&
        // <span className="btn-icon">
        <GobIcon name={SecondaryiconName} variant={SecondaryiconVariant ? SecondaryiconVariant : 'black'}></GobIcon>
        // </span>
      }
    </button>
  );
};