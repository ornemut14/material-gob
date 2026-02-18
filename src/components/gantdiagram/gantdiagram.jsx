import dayjs from "dayjs";
import "dayjs/locale/es";
import { useState } from "react";
import singlearrow from "../../assets/icons/singlearrow.svg";
import "./gantdiagram.css";
import Tab from "@mui/material/Tab";
import Table1 from "./table1/table1";

function GantDiagram() {
  let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const [fecha, setFecha] = useState(dayjs("2026-02-15").locale("es"));
  const [titleMonth, setTitleMonth] = useState("Enero");
  const [titleYear, setTitleYear] = useState("1997");

  const handleSubstractmonth = () => {
    let nuevafecha = fecha.subtract(1, "month").locale("es");
    console.log(nuevafecha.format("YYYY-MMMM-DDDD"), "fecha");
    console.log(nuevafecha.month(), "numero mes");
    console.log(nuevafecha.year(), "numeroaño");
    console.log(meses[nuevafecha.month()]);
    setFecha(nuevafecha);
    setTitleMonth(meses[nuevafecha.month()]);
    setTitleYear(fecha.year());
  };

  const handleAddmonth = () => {
    let nuevafecha = fecha.add(1, "month").locale("es");
    console.log(nuevafecha.month(), "numero mes");
    console.log(nuevafecha.year(), "numeroaño");
    console.log(meses[nuevafecha.month()]);
    setFecha(nuevafecha);
    setTitleMonth(meses[nuevafecha.month()]);
    setTitleYear(nuevafecha.year());
  };

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
    <div className="Gantdiagram-container">
      <div className="G-Diagram-Month-container">
        <div className="g-diagram-left-arrow" onClick={handleSubstractmonth}>
          <img src={singlearrow} />
        </div>
        <h2>
          {titleMonth} {titleYear}
        </h2>
        <div className="g-diagram-right-arrow" onClick={handleAddmonth}>
          <img src={singlearrow} />
        </div>
      </div>
      <Table1 fecha={fecha} data={fakedata} />
    </div>
  );
}

export default GantDiagram;
