import userplusiconcolor from "./userplusiconcolor.svg"
import userplusiconblack from "./userplusiconblack.svg"
import userplusiconwhite from "./userplusiconwhite.svg"

type variant = "color" | "black" | "white"

type iconProps = {
    size?: number
    variant?: variant
}

const UserplusIcon: React.FC<iconProps> = ({
    size=40,
    variant="color"
}) =>{
    return <img src={variant === "color" ? userplusiconcolor : (variant === "black" ? userplusiconblack : userplusiconwhite)} style={{height: ((20*size)/20), width: ((20*size)/20)}} />
}

export default UserplusIcon;