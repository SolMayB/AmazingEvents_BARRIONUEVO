import data from "./amazing.js";
import { dibujarCards } from "./check.js";

const contCard = document.getElementById("card_main");
/* 

const template = document.querySelector("#card_tpl").content;
const fregment = document.createDocumentFragment();
let eventS = data.events;

eventS.forEach(event => {
    template.querySelector(".card-img-top").src = event.image;
    template.querySelector(".card-title").textContent = event.name;
    template.querySelector(".card-text").textContent = event.description;
    template.querySelector(".card-price").textContent = "$ " + event.price;
    template.querySelector("#botonD").href = `./pages/details.html?id=${event._id}`;
    const clone = template.cloneNode(true);
    fregment.appendChild(clone);
});

contCard.appendChild(fregment);

 */
const ruta = "../pages/";
dibujarCards(contCard,ruta)