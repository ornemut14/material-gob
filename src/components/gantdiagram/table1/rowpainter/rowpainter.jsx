import dayjs from "dayjs";
import Colorcell from "../../colorcell/colorcell";
import "./rowpainter.css"

function Rowpainter({ employeename, licencias, fecha}){
    let numdays = fecha.daysInMonth()  // Numero de dias en el mes
    let larcolor = "#85CAB7" 
    let permtempcolor = "#AB6B3C"  //Colores de licencias
    let intervals = [] // Intervalos de dias en el mes que se posiciona el componente
    // let intervals = [[2,3, "LAR",], [4,5, "LAR"], [3,5, "LAR"]]
    let daysinmont = [] // Lista final que le dice al painter como debe pintar las celdas
    let i = 0;

    //console.log([numdays, employeename, licencias], "Estado de empleado")


    for(i=0;i<licencias.length;i++){
        let newinterval = []
        let newdayfrom = dayjs(licencias[i].desde).locale("es")
        let newdayto = dayjs(licencias[i].hasta).locale("es")
        let diasenmes = fecha.daysInMonth()
        let limitinf = fecha.set("date", 1)
        let limitsup = fecha.set("date", diasenmes)


            // Toma las fechas y comienza a generar los invervalos de dias del mes actual
            if(((newdayfrom.isBefore(limitsup, "day")) || (newdayfrom.isSame(limitsup, "day"))) && ((newdayto.isAfter(limitinf, "day")) || (newdayto.isSame(limitinf, "day")))){
                if(newdayfrom.month() === limitinf.month() &&  newdayfrom.year() === limitinf.year()){
                    newinterval.push(newdayfrom.date()) // Esta dentro del mes
                }else{
                    newinterval.push(limitinf.date()) //Esta fuera del mes
                }

                if(newdayto.month() === limitsup.month() &&  newdayto.year() === limitsup.year()){
                    newinterval.push(newdayto.date())
                }else{
                    newinterval.push(limitsup.daysInMonth())
                }


                newinterval.push(licencias[i].tipo)
                console.log([newinterval, employeename], "nuevo intervaloxd")
                intervals.push(newinterval)
            }        

    }

    
    //Aqui comienza a "pintar" diciendole al componente que dias van de cada color
    let j = 0;
    i=1;
    let word = "none"
    let color = "white"
    for(i=1; i<=numdays; i++){
        let tam = intervals.length
        word = "none"
        color = "white"
        j = 0;

        for(j=0;j<tam;j++){
            if(word === "none"){
                let intervalo = intervals[j]
                if(i>=intervalo[0] && i<=intervalo[1]){
                    word = "middle"
                    if(intervalo[0] === intervalo[1]){
                        word = "single"
                    }else{
                        if(i === intervalo[0]){
                            word = "start"
                        }

                        if(i === intervalo[1]){
                            word = "end"
                        }
                    }
                }
                if(intervalo[2] === "LAR"){
                    color = larcolor
                }
            }
        }

        daysinmont.push([word, color])
    }

    console.log(daysinmont.length, "Dias en el mes")

    //Finalmente se Retorna el componente

    return <tr><td className="rp-emp-name">{employeename}</td>{daysinmont.map((dia, index) =>(<Colorcell color={dia[1]} limit={dia[0]} />))}</tr>
}

export default Rowpainter;