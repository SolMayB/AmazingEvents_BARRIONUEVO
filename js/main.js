import data from "./amazing.js";

function fullList(data) {
let lista=[];
    for (let i = 0; i < data.length; i++) {
        let element = data[i];
            lista.push(element)
    }
    return lista;
}

const contCard = document.querySelector("#card_main");
const template = document.querySelector("#card_tpl").content;
const fregment = document.createDocumentFragment();

fullList(data.events).forEach(event => {
    template.querySelector(".card-img-top").src = event.image;
    template.querySelector(".card-title").textContent = event.name;
    template.querySelector(".card-text").textContent = event.description;
    template.querySelector(".card-price").textContent = "$ " + event.price;
    const clone = template.cloneNode(true);
    fregment.appendChild(clone);
});

contCard.appendChild(fregment);

/*function todayEvents(events, date) {
    let lista=[];
        for (let i = 0; i < events.length; i++) {
            let element = events[i];
            if (element.date == date)
            lista.push(element)
        }
        return lista;
}*/



//info(data.events);

//pastEvents(data.events, data.currentDate);

//upcomingEvents(data.events, data.currentDate);

//todayEvents(data.events, "2022-08-12");

