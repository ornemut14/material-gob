
type variant = "color" | "black" | "white"
type name = "calendarday" | "calendarstar" | "marketplace" | "notebook"

type iconProps = {
    size?: number
    variant?: variant
    name?: name
}

const GobIcon: React.FC<iconProps> = ({
    size=40,
    variant="color",
    name="calendarday"
}) =>{
    return <img src={`/gobicons/${name}/${variant}.svg`} style={{height: ((20*size)/20), width: ((20*size)/20)}} />
}

export default GobIcon;

