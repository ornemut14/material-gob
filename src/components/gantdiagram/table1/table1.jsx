import dayjs from "dayjs";
import "dayjs/locale/es";
import { useEffect, useRef, useState } from "react";
import Rowpainter from "./rowpainter/rowpainter";
import "./table1.css"

function Table1({ fecha, data }) {
  let hoy = dayjs().locale("es");
  const [listdays, setListdays] = useState([]);
  useEffect(() => {
    generateDays();
  }, [fecha]);

  const generateDays = () => {
    let newlist = [];
    let dias = fecha.daysInMonth();
    let mes = fecha.month();
    let year = fecha.year();
    let i = 1;
    mes = mes + 1;
    if (mes < 10) {
      mes = `0${mes}`;
    } else {
      mes = `${mes}`;
    }

    console.log([dias, mes, year], "dias mes year");

    for (i = 1; i <= dias; i++) {
      let tempday = `${i}`;
      if (i < 10) {
        tempday = `0${i}`;
      }
      let tempdate = `${year}-${mes}-${tempday}`;
      let tempdate2 = dayjs(tempdate).locale("es");
      let day = tempdate2.format("dd");
      day = day.toUpperCase(day);
      day = day.charAt(0);
      let text = [`${day}`, `${i}`];
      newlist.push(text);
    }
    setListdays(newlist);
  };

  console.log(fecha.format("DD"), "dia de prueba")

  return (
    <div className="diagram-table-wrapperr">
      <table className="diagram-inner-table">
      <thead className="diagram-inner-thead">
        <tr>
          <th className="diagram-inner-th">EMPLEADOS POR ÁREA</th>
          {listdays.map((obj, index) => (
            <th className="gd-days-h-container" key={index}>
              <div className="gd-days-h">{obj[0]}</div>
              <div className="gd-days-h">{obj[1]}</div>
            </th>
          ))}
        </tr>
      </thead>
      {data.map((area, llave) => (<tbody><tr><td className="gd-area-rows"><div className="gd-area-rows-name">{area.area}</div></td>{listdays.map((relleno, keyre) => (<td className="gd-area-rows"></td>))}</tr>{area.empleados.map((emp, llavemp) => (<Rowpainter key={llavemp} employeename={emp.nombre} fecha={fecha} licencias={emp.licencias} />))}</tbody>))}
    </table>
    </div>
  );
}

export default Table1;
