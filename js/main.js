async function obtenerInfo(){
    let response = await fetch("../algun_lugar/amazing.json")
    const data = await response.json();
    let eventos = data.events;
    dibujarCards(eventos)
    
}

obtenerInfo(); 

const containerCard = document.getElementById("card_main")

function dibujarCards(array){
    if(array.length == 0){
        containerCard.innerHTML = 
        `<div class="d-flex align-items-center"> >
        <img id="not_found" src="../img/not_found.jpg">
        </div> `
        return
    }
    let tarjetas = ''
    array.forEach(events => {
        tarjetas += `<div class="col">       
        <div id="cardS" class="card shadow-sm h-100">
            <img class="bd-placeholder-img card-img-top" width="100" height="225" src="${events.image}"
            alt="">
            <h3 class="card-title">${events.name}</h3>
            <div class="card-body ">
                <p class="card-text">${events.description}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <a id="botonD" class="boton btn btn-outline-secondary" href="./details.html?id=${events._id}" >Details</a>
                    </div>
                    <small class="card-price">$${events.price}</small>
                </div>
            </div>
        </div>
    </div>`

    })
    containerCard.innerHTML = tarjetas
}


export {dibujarCards}