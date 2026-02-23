type axis = "vertical" | "horizontal"

export type GobMenuProps = {
    children: React.ReactNode;
    isopen: boolean;
    variant?: number;
    height?: number | string;
    width?: any;
    axis?: axis
}