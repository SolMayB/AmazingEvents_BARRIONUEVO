async function obtenerInfo(){
    let response = await fetch("../algun_lugar/amazing.json")
    const data = await response.json();
    let eventos = data.events.find(eventos=>eventos._id == cardId);;
    console.log(eventos);
    createDetails(eventos,detailConteiner);
    
}

obtenerInfo(); 

let detailConteiner = document.querySelector("#details_card");

const queryString = location.search;
const params = new URLSearchParams(queryString);
const cardId = params.get("id");





function createDetails(card, container){
    let div = document.createElement("div")
    div.classList = "row g-2"
    div.innerHTML = `<img class="bd-placeholder-img img-fluid py-4" width="500" height="300"    src="${card.image}" alt="">
    <h3 class="card-title">${card.name}</h3>
        <div>
            <h4 class="card-text mb-3">Date: ${card.date}</h4>
            <h4 class="card-text mb-3">Description: ${card.description}</h4>
            <h4 class="card-text mb-3">Category: ${card.category}</h4>
            <h4 class="card-text mb-3">Place: ${card.place}</h4>
            <h4 class="card-text mb-3">Capacity: ${card.capacity}</h4>
            <h4 class="card-text mb-3">Assistance / Estimate: ${card.assistance? card.assistance: card.estimate}</h4> 
            <h4 class="card-text mb-3">Price: $${card.price}</h4>
        </div>
    </div>
</div>
<a id="botonD" class="boton btn btn-outline-secondary" href="javascript:history.back()"> 
Go back</a>

</div>`

detailConteiner.appendChild(div);

}