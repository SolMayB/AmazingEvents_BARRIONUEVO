import { dibujarCards} from "./main.js";

async function obtenerInfo(){
    let response = await fetch("../algun_lugar/amazing.json")
    const data = await response.json();
    let eventos = data.events;
    console.log(eventos);
    checkGobalX(eventos);
}

obtenerInfo(); 

export function checkGobalX(eventos){
    createCheck(eventos);
    console.log(createCheck);
    dibujarCards(eventos)
    filtroX(eventos)
    input.addEventListener('keyup',()=>{
        filtroX(eventos)
    })
    checkBoxes.addEventListener('change',()=>{
        filtroX(eventos)
    })
}



const checkBoxes = document.getElementById("checkContainer");
const containerCard = document.getElementById("card_main")
const input = document.getElementById("search"); 


function createCheck(array){
    let check = array.map((events)=>events.category);
    let setCheck = new Set(check)
    //console.log(setCheck);
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


function filtroX(eventos){
    
    let primerFiltro = filtrarText(eventos,input.value)
    let segundoFiltro = filtrarCategory(primerFiltro)
    dibujarCards(segundoFiltro)
}

function filtrarText(array,texto){
    let arrayFiltrado = array.filter(elemento => elemento.name.toLowerCase().includes(texto.toLowerCase()))
    return arrayFiltrado
}

function filtrarCategory(array){
    let checkbox = document.querySelectorAll("input[type='checkbox']")
    let arrayChecks = Array.from(checkbox)
    let arrayChecked = arrayChecks.filter(check => check.checked)
    let arrayCheckedValues = arrayChecked.map(checkChecked => checkChecked.value)
    let arrayFiltrado = array.filter(events => arrayCheckedValues.includes(events.category))
    console.log(arrayFiltrado);
    if(arrayChecked.length > 0){
        return arrayFiltrado
    }
    return array
}



