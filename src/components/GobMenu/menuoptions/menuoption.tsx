import type { CSSProperties } from "react"
import { menuOptionProps } from "./menuoption.types";
import { GobIcon } from "../../GobIcon";
import { GobButton } from "../../Button";

export const MenuOption = ({
    iconName,
    secondaryiconName,
    text = "Texto",
    variant = 1,
    size = 100,
    onclick = () => { }
}: menuOptionProps) => {
    const baseStyle: CSSProperties = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        userSelect: "none"
    }
    let estilo: CSSProperties = {
        ...baseStyle,
        backgroundColor: variant === 1 ? "#413E43" : "transparent",
        height: size,
        width: size,
        borderRadius: (2 * size) / 100
    }
    // let estilo1: CSSProperties = {
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     backgroundColor: "#413E43",
    //     borderRadius: ((2 * size) / 100),
    //     color: "white",
    //     height: size,
    //     width: size,
    //     userSelect: "none"
    // }
    // let estilo2: CSSProperties = {
    //     ...estilo1,
    //     backgroundColor: "transparent"
    // }
    let iconstyle1: CSSProperties = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        height: ((60 * size) / 100),
        width: ((60 * size) / 100),
        borderStyle: "solid",
        borderColor: "orange",
        borderRadius: ((40 * size) / 100)
    }
    // let estilo: CSSProperties = {}
    // if (variant === 1) {
    //     estilo = estilo1
    //     iconstyle1 = {}
    // } else {
    //     estilo = estilo2
    // }
    return (<div style={estilo} onClick={onclick}>
        {variant != 3
            ? (<div style={iconstyle1}>
                {<GobIcon variant={variant === 1 ? "white" : "color"} name={iconName} />}
            </div>)
            : <GobButton PrimaryiconName={iconName} SecondaryiconName={secondaryiconName}>{text}</GobButton>}
        {variant != 3
            ? <p style={{ margin: "0px", textAlign: "center", fontSize: ((12 * size) / 100), fontWeight: ((500 * size) / 100) }}>{text}</p>
            : <div />}
    </div>)
}