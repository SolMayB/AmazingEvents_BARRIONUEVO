import data from "./amazing.js";
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
const template = document.querySelector("#card_tpl").content;
const fregment = document.createDocumentFragment();

upcomingEvents(data.events, data.currentDate).forEach(event => {
    template.querySelector(".card-img-top").src = event.image;
    template.querySelector(".card-title").textContent = event.name;
    template.querySelector(".card-text").textContent = event.description;
    template.querySelector(".card-price").textContent = "$ " + event.price;
    const clone = template.cloneNode(true);
    fregment.appendChild(clone);
});

contCard.appendChild(fregment);