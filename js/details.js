import data from "./amazing.js";

let detailConteiner = document.querySelector("#details_card");

const queryString = location.search;
const params = new URLSearchParams(queryString);
const cardId = params.get("id");

const card = data.events.find(card=>card._id == cardId);

console.log(card);

function createDetails(card, container){
    let div = document.createElement("div")
    div.classList = "row g-2"
    div.innerHTML =`  <img class="bd-placeholder-img img-fluid py-4" width="500" height="300" src="${card.image}" alt="">
        <h3 class="card-title">${card.name}</h3>
        <div>
            <h4 class="card-text mb-3">Date: ${card.date}</h4>
            <h4 class="card-text mb-3">Description: ${card.description}</h4>
            <h4 class="card-text mb-3">Category: ${card.category}</h4>
            <h4 class="card-text mb-3">Place: ${card.place}</h4>
            <h4 class="card-text mb-3">Capacity: ${card.capacity}</h4>
            <h4 class="card-text mb-3">Assistance: ${card.assistance}</h4> 
            <h4 class="card-text mb-3">Price: $${card.price}</h4>
        </div>
    </div>
</div>
<a id="botonD" class="boton btn btn-outline-secondary" href="javascript:history.back()"> 
Go back</a>

</div>`

detailConteiner.appendChild(div);

}
createDetails(card,detailConteiner);


