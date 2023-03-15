import data from "./amazing.js";
import { dibujarCards } from "./check.js";

function upcomingEvents(events, date) {
    let lista=[];
        for (let i = 0; i < events.length; i++) {
            let element = events[i];
            if (element.date > date)
            lista.push(element)
        }
        return lista;
}

const contCard = document.querySelector("#card_main");

let uEvent = upcomingEvents(data.events, data.currentDate);
const ruta = "./"
dibujarCards(uEvent,ruta)