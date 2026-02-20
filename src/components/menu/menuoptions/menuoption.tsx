import React from "react";
import { GobIcon } from "../../GobIcon";
import { GobButton } from "../../Button/Button";
import { menuOptionProps } from "./menuoption.types";

export const MenuOption = ({
    iconName=null, secondaryiconName=null, text="Texto", variant=1 , size=100, onclick=()=>{}
}: menuOptionProps) =>{
    let estilo1 = {display: "flex" , flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "var(--gob-secondary-color-600)", borderRadius: ((2*size)/100), color: "white", height: size, width:size, userSelect: "none"}
    let estilo2 = {display: "flex" , flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "transparent", borderRadius: ((2*size)/100), color: "white", height: size, width:size, userSelect: "none"}
    let iconstyle1 = {display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" , backgroundColor: "white", height: ((60*size)/100), width: ((60*size)/100), borderStyle: "solid", borderColor: "orange", borderRadius: ((40*size)/100)}
    let estilo = {}
    if(variant === 1){
        estilo = estilo1
        iconstyle1 = {}
    }else{
        estilo = estilo2
    }
    return (<div style={estilo} onClick={onclick}>
        {variant != 3 ? (<div style={iconstyle1}>
            {<GobIcon variant={variant === 1 ? "white" : "color"} name={iconName} />}
        </div>) : <GobButton PrimaryiconName={iconName} SecondaryiconName={secondaryiconName}>{text}</GobButton>}
        {variant != 3 ? <p style={{margin: "0px", textAlign: "center", fontSize: ((12*size)/100), fontWeight: ((500*size)/100)}}>{text}</p> : <div />}
    </div>)
}