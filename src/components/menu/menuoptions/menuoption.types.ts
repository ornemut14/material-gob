import { iconName } from "../../../types/icons.types"

export type menuOptionProps = {
    iconName?: iconName;
    secondaryiconName?: iconName;
    size: number;
    text?: string;
    variant?: number;
    onclick?: () => void;
}