import data from "./amazing.js";
//quiapp

const checkBoxes = document.getElementById("checkContainer");
const containerCard = document.getElementById("card_main")
const input = document.getElementById("search");


function createCheck(array){
    let check = data.events.map((events)=>events.category);
    let setCheck = new Set(check)
    console.log(setCheck);
    let arrayCheck = Array.from(setCheck)
    let checkbox = ''
    arrayCheck.forEach(category => {
        checkbox += ` <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="${category}" value="${category}">
        <label class="form-check-label" for="${category}">${category}</label>
        </div>
        `
    })
    checkBoxes.innerHTML = checkbox;
}

createCheck(data.events)
dibujarCards(data.events)

// el despues
input.addEventListener('keyup',filtroX)

checkBoxes.addEventListener('change',filtroX)


function filtroX(){
    let primerFiltro = filtrarText(data.events,input.value)
    let segundoFiltro = filtrarCategory(primerFiltro)
    dibujarCards(segundoFiltro)
}

/* input.addEventListener('keyup', (event) => {
   event.preventDefault()
   filtrarText(data.events,input.value)
   let primerFiltro = filtrarText(data.events,input.value)
   dibujarCards(primerFiltro)

}); */ 

function filtrarText(array,texto){
    let arrayFiltrado = array.filter(elemento => elemento.name.toLowerCase().includes(texto.toLowerCase()))
    return arrayFiltrado
}

function filtrarCategory(array){
    let checkbox = document.querySelectorAll("input[type='checkbox']")
    console.log(checkbox);
    let arrayChecks = Array.from(checkbox)
    let arrayChecked = arrayChecks.filter(check => check.checked)
    console.log(arrayChecked);
    let arrayCheckedValues = arrayChecked.map(checkChecked => checkChecked.value)
    console.log(arrayCheckedValues);
    let arrayFiltrado = array.filter(events => arrayCheckedValues.includes(events.category))
    console.log(arrayFiltrado);
    if(arrayChecked.length > 0){
        return arrayFiltrado
    }
    return array
}

export function dibujarCards(array,rutas="./pages/"){
    if(array.length == 0){
        containerCard.innerHTML = `<img class="align-items-center" width="300" height="300" src="../img/not_found.jpg"
        <h2 class="d-flex fw-bolder"></h2>`
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
                        <a id="botonD" class="boton btn btn-outline-secondary" href="${rutas}details.html?id=${events._id}" >Details</a>
                    </div>
                    <small class="card-price">$${events.price}</small>
                </div>
            </div>
        </div>
    </div>`
    })
    containerCard.innerHTML = tarjetas
}
 









/* let checked = [];
let check = data.events.map((events)=>events.category);
for (let checkbox of checkBoxes) {
    checkbox.addEventListener("change",(e)=>{
        if(e.target.checked){
            checked.push(e.target.value)
        }
    })
}
console.log(checked);
  
console.log(check); 
 */
