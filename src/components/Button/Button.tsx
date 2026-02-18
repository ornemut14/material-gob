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
      <span className="btn-icon-left">
        {PrimaryiconName &&
          <GobIcon name={PrimaryiconName} variant={PrimaryiconVariant ? PrimaryiconVariant : 'black'}></GobIcon>
        }
      </span>

      <span className="gob-button-middle-text">{children}</span>

      <span className="btn-icon-right">
        {SecondaryiconName &&
          <GobIcon name={SecondaryiconName} variant={SecondaryiconVariant ? SecondaryiconVariant : 'black'}></GobIcon>
        }
      </span>
    </button>
  );
};