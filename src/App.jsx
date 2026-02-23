import { useState } from "react";
import { GobMainCard } from "./components/maincard/maincard";
import Menu from "./components/menu/menu";
import { MenuOption } from "./components/menu/menuoptions/menuoption";
import { GobButton } from "./components/Button/Button";
import { GobIcon } from "./components/GobIcon";
import { GobSelect } from "./components/select";
import { GobGantDiagram } from "./components/gantdiagram";

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

    let fakedata = [
    {
      area: "Contabilidad",
      empleados: [
        {
          nombre: "Jose Lopez",
          licencias: [
            { tipo: "LAR", desde: "2026-01-05", hasta: "2026-02-01" },
            { tipo: "LAR", desde: "2026-02-18", hasta: "2026-02-22" },
          ],
        },
        {
          nombre: "Maria Gonzalez",
          licencias: [
            {tipo: "LAR", desde: "2026-01-05", hasta: "2026-01-07" },
            {tipo: "LAR", desde: "2026-01-20", hasta: "2026-01-25" },
            {tipo: "LAR", desde: "2026-02-03", hasta: "2026-02-06" },
          ],
        },
        {
          nombre: "Carlos Perez",
          licencias: [
            { tipo: "LAR", desde: "2026-01-12", hasta: "2026-01-15" },
            { tipo: "LAR", desde: "2026-02-24", hasta: "2026-02-28" },
          ],
        },
      ],
    },
    {
      area: "Recursos Humanos",
      empleados: [
        {
          nombre: "Laura Martinez",
          licencias: [
            { tipo: "LAR", desde: "2026-01-08", hasta: "2026-01-14" },
            { tipo: "LAR", desde: "2026-02-10", hasta: "2026-02-13" },
          ],
        },
        {
          nombre: "Diego Fernandez",
          licencias: [
            { tipo: "LAR", desde: "2026-01-18", hasta: "2026-01-22" },
            { tipo: "LAR", desde: "2026-02-01", hasta: "2026-02-05" },
          ],
        },
        {
          nombre: "Sofia Ramirez",
          licencias: [
            { tipo: "LAR", desde: "2026-01-27", hasta: "2026-01-31" },
            { tipo: "LAR", desde: "2026-02-20", hasta: "2026-02-24" },
          ],
        },
      ],
    },
    {
      area: "Sistemas",
      empleados: [
        {
          nombre: "Martin Alvarez",
          licencias: [
            { tipo: "LAR", desde: "2026-01-03", hasta: "2026-01-07" },
            { tipo: "LAR", desde: "2026-02-14", hasta: "2026-02-18" },
          ],
        },
        {
          nombre: "Nicolas Torres",
          licencias: [
            { tipo: "LAR", desde: "2026-01-15", hasta: "2026-01-19" },
            { tipo: "LAR", desde: "2026-02-25", hasta: "2026-02-28" },
          ],
        },
        {
          nombre: "Valentina Rios",
          licencias: [
            { tipo: "LAR", desde: "2026-01-22", hasta: "2026-01-26" },
            { tipo: "LAR", desde: "2026-02-06", hasta: "2026-02-09" },
          ],
        },
      ],
    },
  ];

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
      <GobSelect setvalue={setSelectvalue} options={selectoptions} placeholder="Selecciona algo" />
      <GobGantDiagram data={fakedata} />
    </div>
  );
}

export default App;
