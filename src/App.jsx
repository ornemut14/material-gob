import { useState } from "react";
import { GobMainCard } from "./components/maincard/maincard";
import Menu from "./components/menu/menu";
import { MenuOption } from "./components/menu/menuoptions/menuoption";
import { GobButton } from "./components/Button/Button";
import { GobIcon } from "./components/GobIcon";
import Select from "./components/select/select";
import GantDiagram from "./components/gantdiagram/gantdiagram";

function App() {

  const [ismenuopen, setIsmenuopen] = useState(false)
  const [selectvalue, setSelectvalue] = useState(null)
  const selectoptions = ["Opción 1", "Opción 2", "Opción 3", "Opción 4"]
  const handleMenuToggle = () =>{
    if(ismenuopen){
      setIsmenuopen(false)
    }else{
      setIsmenuopen(true)
    }
  }

  return (
    <div style={{ display: "flex", gap: "20px", padding: "40px" }}>
      <GobMainCard items={["Trabajo", "Televisores"]} itemscolor="light" />
      <div style={{position: "relative", top: "40px"}}>
      <Menu isopen={ismenuopen} axis="vertical" variant={2}>
        <MenuOption text="consulta" onclick={() => alert("hola")} variant={3} />
        <MenuOption iconName="calendarstar" text="consulta y Solicitudes" onclick={() => alert("hola")} variant={2} />
        <MenuOption iconName="marketplace" text="consulta y Solicitudes" onclick={() => alert("hola")} variant={1} />
      </Menu>
      </div>
      <GobButton onClick={() => handleMenuToggle()} PrimaryiconName="calendarday" SecondaryiconName="marketplace">hola</GobButton>
      <Select setvalue={setSelectvalue} options={selectoptions} placeholder="Selecciona algo" />
      <GantDiagram />
    </div>
  );
}

export default App;
