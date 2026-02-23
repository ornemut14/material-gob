import dayjs from "dayjs"
import { Colorcell } from "../../colorcell/colorcell"
import "./rowpainter.css"
import type { Licencia, RowPainterProps, Interval, DayPaint } from "../../GobGantDiagram.types"

export const Rowpainter = ({ employeename, licencias, fecha }: RowPainterProps) => {
    const numdays = fecha.daysInMonth()
    const larcolor = "#85CAB7"
    const permtempcolor = "#AB6B3C"

    const intervals: Interval[] = []
    const daysinmont: DayPaint[] = []

    // Construcción de intervalos
    for (let i = 0; i < licencias.length; i++) {
        const licencia: Licencia = licencias[i]

        const newdayfrom = dayjs(licencia.desde).locale("es")
        const newdayto = dayjs(licencia.hasta).locale("es")

        const diasenmes = fecha.daysInMonth()
        const limitinf = fecha.set("date", 1)
        const limitsup = fecha.set("date", diasenmes)

        if (
            (newdayfrom.isBefore(limitsup, "day") || newdayfrom.isSame(limitsup, "day")) &&
            (newdayto.isAfter(limitinf, "day") || newdayto.isSame(limitinf, "day"))
        ) {
            const newinterval: Interval = [
                newdayfrom.month() === limitinf.month() && newdayfrom.year() === limitinf.year()
                    ? newdayfrom.date()
                    : limitinf.date(),

                newdayto.month() === limitsup.month() && newdayto.year() === limitsup.year()
                    ? newdayto.date()
                    : limitsup.daysInMonth(),

                licencia.tipo,
            ]

            intervals.push(newinterval)
        }
    }

    // Pintado de días
    for (let i = 1; i <= numdays; i++) {
        let word: DayPaint[0] = "none"
        let color = "white"

        for (let j = 0; j < intervals.length; j++) {
            if (word === "none") {
                const [from, to, tipo] = intervals[j]

                if (i >= from && i <= to) {
                    if (from === to) {
                        word = "single"
                    } else if (i === from) {
                        word = "start"
                    } else if (i === to) {
                        word = "end"
                    } else {
                        word = "middle"
                    }

                    if (tipo === "LAR") {
                        color = larcolor
                    }
                }
            }
        }

        daysinmont.push([word, color])
    }

    return (
        <tr>
            <td className="rp-emp-name">{employeename}</td>

            {daysinmont.map(([limit, color], index) => (
                <Colorcell key={index} color={color} limit={limit} />
            ))}
        </tr>
    )
}