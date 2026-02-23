import { CSSProperties } from "react"
import "./colorcell.css"
import { ColorcellProps } from "../GobGantDiagram.types"

export const Colorcell = ({
    color = "blue",
    limit = "start",
    height = "10px",
}: ColorcellProps) => {
    const border_radius = "5px"

    let estilos: CSSProperties = {
        backgroundColor: color,
    }

    if (limit === "single") {
        estilos = { ...estilos, borderRadius: border_radius }
    }

    if (limit === "start") {
        estilos = {
            ...estilos,
            borderTopLeftRadius: border_radius,
            borderBottomLeftRadius: border_radius,
            marginRight: "-10px",
            flex: 1,
        }
    }

    if (limit === "end") {
        estilos = {
            ...estilos,
            borderTopRightRadius: border_radius,
            borderBottomRightRadius: border_radius,
            marginLeft: "-10px",
            flex: 1,
        }
    }

    if (limit === "middle") {
        estilos = {
            ...estilos,
            marginRight: "-10px",
            marginLeft: "-10px",
            flex: 1,
        }
    }

    if (limit === "none") {
        estilos = { ...estilos, backgroundColor: "transparent" }
    }

    return (
        <td className="cell">
            <div style={{ height }} className="paint-container">
                <div style={estilos} className="paint" />
            </div>
        </td>
    )
}