import data from "./amazing.js";
import { dibujarCards } from "./check.js";


function pastEvents(events, date) {
    let lista=[];
        for (let i = 0; i < events.length; i++) {
            let element = events[i];
            if (element.date < date)
            lista.push(element)
        }
        return lista;
}

const contCard = document.querySelector("#card_main");


let pEvent = pastEvents(data.events, data.currentDate);
const ruta = "./"
dibujarCards(pEvent,ruta)
console.log(dibujarCards);