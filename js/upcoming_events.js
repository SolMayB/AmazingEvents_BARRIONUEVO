import { dibujarCards} from "./main.js";
import { checkGobalX} from "./check.js";

async function obtenerInfo(){
    let response = await fetch("../algun_lugar/amazing.json")
    const data = await response.json();
    let eventos = data.events;
    let uEvent = upcomingEvents(eventos, data.currentDate);
    dibujarCards(uEvent)
    checkGobalX(uEvent)
}

obtenerInfo(); 



export function upcomingEvents(events, date) {
    let lista=[];
        for (let i = 0; i < events.length; i++) {
            let element = events[i];
            if (element.date > date)
            lista.push(element)
        }
        return lista;
}

