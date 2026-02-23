import { useState } from "react"
import "./GobSelect.css"
import lock from "./svgs/lock-icon.svg"
import singleblackarrow from "./svgs/singleblackarrow.svg"
import singleorangearrow from "./svgs/singleorangearrow.svg"
import { GobSelectProps } from "./GobSelect.types"

export const GobSelect = ({
    setvalue,
    options,
    size = 50,
    placeholder = "Seleccionar Tipo"
}: GobSelectProps) => {
    const [isopen, setIsopen] = useState<boolean>(false)
    const handleClose = () => setIsopen(false)
    const handleToggle = () => setIsopen(prev => !prev)
    const handleSeleccion = (valor: number) => {
        // console.log(valor, "valor guardado")
        handleClose()
        setvalue(valor)
    }

    return (
        <div
            className="general-select-container"
            style={{ maxHeight: (size * 60) / 50 }}
        >
            <div
                className="general-select-block"
                onClick={handleToggle}
                style={{
                    backgroundColor: isopen ? "#F5F5F5" : "white",
                    height: size,
                    width: (size * 280) / 50,
                    borderRadius: (size * 4) / 50
                }}
            >
                <div
                    className="general-select-icon-container"
                    style={{
                        backgroundColor: isopen ? "#EC6608" : "#413E43",
                        height: size,
                        width: size
                    }}
                >
                    <img
                        src={lock}
                        alt="lock"
                        style={{
                            height: (size * 27) / 50,
                            width: (size * 27) / 50
                        }}
                    />
                </div>

                <div
                    className="general-select-placeholder"
                    style={{
                        marginLeft: (size * 10) / 50,
                        fontSize: (size * 14) / 50,
                        fontWeight: (size * 400) / 50,
                        width: (size * 120) / 50
                    }}
                >
                    {placeholder}
                </div>

                {isopen ? (
                    <img
                        src={singleorangearrow}
                        alt="open"
                        style={{
                            marginLeft: (size * 70) / 50,
                            height: (size * 22) / 50,
                            width: (size * 22) / 50
                        }}
                    />
                ) : (
                    <img
                        src={singleblackarrow}
                        alt="closed"
                        style={{
                            marginLeft: (size * 70) / 50,
                            height: (size * 30) / 50,
                            width: (size * 30) / 50
                        }}
                    />
                )}
            </div>

            {isopen && (
                <div
                    className="general-select-options"
                    style={{
                        width: (size * 280) / 50,
                        borderRadius: (size * 4) / 50
                    }}
                >
                    {options.map((elem, index) => (
                        <div
                            className="general-select-option"
                            key={index}
                            onClick={() => handleSeleccion(index)}
                            style={{
                                paddingLeft: (size * 20) / 50,
                                paddingTop: (size * 10) / 50,
                                fontSize: (size * 16) / 50
                            }}
                        >
                            {elem}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
