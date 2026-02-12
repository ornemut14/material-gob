import { GobIconProps } from "./GobIcon.type";
import { getIcon } from "./icons.loader";

export const GobIcon = ({
    size = 40,
    variant = "color",
    name = "calendarday"
}: GobIconProps) => {
    const src = getIcon(name, variant)
    if (!src) return null
    return (
        <img
            src={src}
            style={{ height: ((20 * size) / 20), width: ((20 * size) / 20) }}
        />
    )
}