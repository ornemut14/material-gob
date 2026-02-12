import { iconName, variant } from "../../types/icons.types";

type Size = "small" | "medium" | "large";
type Variant = "primary" | "secondary" | "text";
type State = "default" | "hover" | "pressed";

export type GobButtonProps = {
    children: React.ReactNode;
    size?: Size;
    variant?: Variant;
    state?: State;
    disabled?: boolean;
    PrimaryiconName?: iconName;
    PrimaryiconVariant?: variant;
    SecondaryiconName?: iconName;
    SecondaryiconVariant?: variant;
    width?: string;
    height?: string;
    onClick?: () => void;
};