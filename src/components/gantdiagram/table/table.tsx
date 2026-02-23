import dayjs, { type Dayjs } from "dayjs"
import "dayjs/locale/es"
import { useEffect, useState } from "react"
import "./table.css"
import type { TableProps } from "../GobGantDiagram.types"
import { Rowpainter } from "./rowpainter/rowpainter"

type DayCell = [string, string]

export const Table = ({
    fecha,
    title = 'EMPLEADOS POR ÁREA',
    data
}: TableProps) => {
    const hoy = dayjs().locale("es")
    const [listdays, setListdays] = useState<DayCell[]>([])

    useEffect(() => {
        generateDays()
    }, [fecha])

    const generateDays = (): void => {
        const newlist: DayCell[] = []

        const dias = fecha.daysInMonth()
        let mes: string | number = fecha.month() + 1
        const year = fecha.year()

        if (mes < 10) {
            mes = `0${mes}`
        } else {
            mes = `${mes}`
        }

        for (let i = 1; i <= dias; i++) {
            const tempday = i < 10 ? `0${i}` : `${i}`
            const tempdate = `${year}-${mes}-${tempday}`

            const tempdate2 = dayjs(tempdate).locale("es")
            let day = tempdate2.format("dd").toUpperCase().charAt(0)

            newlist.push([day, `${i}`])
        }

        setListdays(newlist)
    }
    //   console.log(fecha.format("DD"), "dia de prueba")

    return (
        <div className="diagram-table-wrapperr">
            <table className="diagram-inner-table">
                <thead className="diagram-inner-thead">
                    <tr>
                        <th className="diagram-inner-th">{title}</th>

                        {listdays.map(([day, number], index) => (
                            <th className="gd-days-h-container" key={index}>
                                <div className="gd-days-h">{day}</div>
                                <div className="gd-days-h">{number}</div>
                            </th>
                        ))}
                    </tr>
                </thead>

                {data.map((area, indexArea) => (
                    <tbody key={indexArea}>
                        <tr>
                            <td className="gd-area-rows">
                                <div className="gd-area-rows-name">{area.area}</div>
                            </td>

                            {listdays.map((_, indexDay) => (
                                <td className="gd-area-rows" key={indexDay} />
                            ))}
                        </tr>

                        {area.empleados.map((emp, indexEmp) => (
                            <Rowpainter
                                key={indexEmp}
                                employeename={emp.nombre}
                                fecha={fecha}
                                licencias={emp.licencias}
                            />
                        ))}
                    </tbody>
                ))}
            </table>
        </div>
    )
}