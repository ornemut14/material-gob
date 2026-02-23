import type { Dayjs } from "dayjs"

export type Licencia = {
    tipo: string
    desde: string
    hasta: string
}

export type Empleado = {
    nombre: string
    licencias: Licencia[]
}

export type Area = {
    area: string
    empleados: Empleado[]
}

export type GobGantDiagramProps = {
    data: Area[]
    fechaInicial?: Dayjs
}

export interface TableProps {
    fecha: Dayjs
    data: Area[]
}

export interface RowPainterProps {
    employeename: string
    licencias: Licencia[]
    fecha: Dayjs
}

export type Interval = [number, number, string];
export type DayPaint = ["none" | "start" | "middle" | "end" | "single", string];

type ColorLimit = "start" | "middle" | "end" | "single" | "none"
export interface ColorcellProps {
    color?: string
    limit?: ColorLimit
    height?: string
}