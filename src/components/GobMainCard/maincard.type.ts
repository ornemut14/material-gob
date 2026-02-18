type comillascolor = "white" | "orange" | "light"
type comillasdirection = "up" | "down"
type itemscolor = "white" | "orange" | "light"
type backgroundcolor = "black" | "orange" | "light"

export type MainCardProps = {
    comillascolor?: comillascolor,
    comillasdirection?: comillasdirection,
    itemscolor?: itemscolor,
    backgroundcolor?: backgroundcolor
    items: string[],
    title1: string,
    title2: string,
    height?: string,
    width?: string,
    padding?: string
}