type Size = "small" | "medium" | "large";
type Variant = "primary" | "secondary" | "text";
type State = "default" | "hover" | "pressed";

export type GobButtonProps = {
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