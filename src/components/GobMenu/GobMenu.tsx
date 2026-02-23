import { useEffect, useState, CSSProperties } from "react";
import { GobMenuProps } from "./GobMenu.types";
import "./GobMenu.css"

export const GobMenu = (
    {
        children,
        variant = 1,
        height = "auto",
        width = "auto",
        axis = "vertical",
        isopen = false
    }: GobMenuProps) => {

    const [shouldRender, setShouldRender] = useState(true)
    useEffect(() => {
        if (shouldRender === true) {
            setTimeout(() => setShouldRender(false), 960)
        } else {
            setShouldRender(true)
        }
    }, [isopen])

    let estilos1: CSSProperties = { display: "flex" }
    if (axis === "vertical") {
        estilos1 = { ...estilos1, flexDirection: "column", gap: 40, padding: 30, alignItems: "center", justifyContent: "center", borderRadius: 3 }
        if (width === "auto") {
            estilos1 = { ...estilos1, width: 120 }
        }

        if (height != "auto") {
            estilos1 = { ...estilos1, height: height }
        }

    } else {
        estilos1 = { ...estilos1, flexDirection: "row", gap: 40, padding: 30, alignItems: "center", justifyContent: "center", borderRadius: 3 }
        if (height === "auto") {
            estilos1 = { ...estilos1, height: 120 }
        }

        if (width != "auto") {
            estilos1 = { ...estilos1, width: width }
        }
    }

    if (variant === 1) {
        estilos1 = { ...estilos1, backgroundColor: "transparent" }
    } else {
        estilos1 = { ...estilos1, backgroundColor: "#C7C7C7" }
    }

    return <div className="menu-gob-container">
        <div className={isopen === true ? `menu-gob-open-${axis}` : `menu-gob-closed-${axis}`}>
            {shouldRender && <div style={estilos1}>
                {children}
            </div>
            }
        </div>
    </div>
}
