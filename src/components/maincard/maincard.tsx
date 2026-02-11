import comillaslight from "./svgs/comillaslight.svg"
import comillasorange from "./svgs/comillasorange.svg"
import comillaswhite from "./svgs/comillaswhite.svg"

type comillascolor = "white" | "orange" | "light"
type comillasdirection = "up" | "down"
type itemscolor = "white" | "orange" | "light"
type backgroundcolor = "black" | "orange" | "light"

type PropsMaincard = {
    comillascolor?: comillascolor,
    comillasdirection?: comillasdirection,
    itemscolor?: itemscolor,
    backgroundcolor?: backgroundcolor
    items: [],
    height?: string,
    width?: string,
    padding?: string
}

const MainCard: React.FC<PropsMaincard> = ({
    backgroundcolor = "black",
    itemscolor="white",
    comillasdirection="up",
    comillascolor="white",
    items = ["+ Gestión", "+ Transparencia"],
    height = "256px", 
    width = "496px",
    padding = "48px"
}) =>{
    let bckcolor = "black"
    switch(backgroundcolor){
        case "black":
            bckcolor = "#413E43";
            break;
        case "orange":
            bckcolor = "#EC6608";
            break;
        case "light":
            bckcolor = "#615E62";
            break;
        default:
            bckcolor = "#615E62";
    }

        let itmcolor = "black"
    switch(itemscolor){
        case "white":
            itmcolor = "#FFFFFF";
            break;
        case "orange":
            itmcolor = "#EC6608";
            break;
        case "light":
            itmcolor = "#C7C7C7";
            break;
        default:
            itmcolor = "#FFFFFF"
    }

    let rotation = "0deg"
    if(comillascolor === "white"){
        if(comillasdirection === "up"){
            rotation = "180deg"
        }
    }else{
        if(comillasdirection === "down"){
            rotation = "180deg"
        }
    }

return <div style={{backgroundColor: "#413E43", width: width, height: height, padding: padding, borderRadius: "2px", gap: "0px"}}>
    <img src={comillascolor === "white" ? comillaswhite : (comillascolor === "orange" ? comillasorange : comillaslight)} style={{rotate: rotation}} />
    <div style={{display: "flex", flexDirection: "row", gap: "10px"}}>
        <h2 style={{color: "#FFFFFF", fontFamily: "Ubuntu", fontWeight: "200", fontSize: "40px"}}>Nuestro</h2>
    <h2 style={{color: "#FFFFFF", fontFamily: "Ubuntu", fontWeight: "700", fontSize: "40px"}}>Trabajo</h2>
    </div>
    <div style={{display: "flex", flexDirection: "column", justifyItems: "flex-start"}}>
        {items.map((obj, index) => (<h4 key={index} style={{color: itmcolor, fontFamily: "Ubuntu", fontWeight: "200", fontSize: "19px", textTransform: "uppercase", margin: "0px"}}>{obj}</h4>) )}
    </div>
</div>
}

export default MainCard