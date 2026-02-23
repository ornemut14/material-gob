import { useState } from "react";
import dayjs, { type Dayjs } from "dayjs";
import "dayjs/locale/es";
import singlearrow from "./svgs/singlearrow.svg";
import "./GobGantDiagram.css";
import { GobGantDiagramProps } from "./GobGantDiagram.types";
import { monthConstant } from '../../constant';
import { Table } from "./table/table";

export const GobGantDiagram = ({
    data,
    fechaInicial = dayjs().locale("es"),
}: GobGantDiagramProps) => {
    const [fecha, setFecha] = useState<Dayjs>(fechaInicial)
    const [titleMonth, setTitleMonth] = useState<string>(
        monthConstant[fechaInicial.month()]
    )
    const [titleYear, setTitleYear] = useState<string>(
        String(fechaInicial.year())
    )

    const handleSubstractmonth = () => {
        const nuevaFecha = fecha.subtract(1, "month")
        setFecha(nuevaFecha)
        setTitleMonth(monthConstant[nuevaFecha.month()])
        setTitleYear(String(nuevaFecha.year()))
    }

    const handleAddmonth = () => {
        const nuevaFecha = fecha.add(1, "month")
        setFecha(nuevaFecha)
        setTitleMonth(monthConstant[nuevaFecha.month()])
        setTitleYear(String(nuevaFecha.year()))
    }

    return (
        <div className="Gantdiagram-container">
            <div className="G-Diagram-Month-container">
                <div className="g-diagram-left-arrow" onClick={handleSubstractmonth}>
                    <img src={singlearrow} alt="previous month" />
                </div>

                <h2 className="G-Diagram-H-Yearandmonth">
                    {titleMonth} {titleYear}
                </h2>

                <div className="g-diagram-right-arrow" onClick={handleAddmonth}>
                    <img src={singlearrow} alt="next month" />
                </div>
            </div>

            <Table fecha={fecha} data={data} />
        </div>
    )
}