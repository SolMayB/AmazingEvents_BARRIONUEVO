
const container1 = document.getElementById("tabla1")
const container2 = document.getElementById("tabla2")
const container3 = document.getElementById("tabla3")


async function obtenerInfo(){
    let response = await fetch("../algun_lugar/amazing.json")
    const data = await response.json();
    let eventos = data.events;

    drawTable2(generateInfo(eventos,true,data.currentDate),container2);

    drawTable2(generateInfo(eventos,false,data.currentDate),container3);

    drawTable1(getMaxAttendanceEvent(eventos),getMinAttendanceEvent(eventos),
            getMaxCapacityEvent(eventos).name, container1);

}

obtenerInfo(); 

function filtrarEvents(array, upcoming, date){
    let arrayEvents = (array.filter((event) => upcoming?event.date > date:event.date < date));
    return arrayEvents;
}

function drawTable1(highest, lowest, larger, container){
    let tr = '';
        tr += `<tr>
            <td>${highest}</td>
            <td>${lowest}</td>
            <td>${larger}</td>
        </tr>`;
    container.innerHTML = tr;
}

function getMaxAttendanceEvent(array){
    let result = 0;
    let nombreEvento = "";
    array.forEach((event => {
        let calculo =(event.attendance?event.attendance:event.estimate/event.capacity)*100;
        if(calculo>result){
            result=calculo;
            nombreEvento = event.name;
        }
    }))
    return nombreEvento;
} 

function getMinAttendanceEvent(array){
    let result = 100;
    let nombreEvento = "";
    array.forEach((event => {
        let calculo =(event.attendance?event.attendance:event.estimate/event.capacity)*100;
        if(calculo<result){
            result=calculo;
            nombreEvento = event.name;
        }
    }))
    return nombreEvento;
} 

function getMaxCapacityEvent(evento){
    return evento.find(e => e.capacity === Math.max(...evento.map(e=>e.capacity)));
}

function generateInfo(array, upcoming, date){
    let arrayEvents = filtrarEvents(array, upcoming, date);
    let setCategories = new Set(arrayEvents.map(array => array.category));
    let arrayCategories = [];
    setCategories.forEach(category => {
        let totalCapacity = 0;
        let totalAssistance = 0;
        let objCategory = {};
        objCategory.revenues = 0;
        arrayEvents.forEach(evento => {
            if (evento.category == category){
                objCategory.name = category;
                totalCapacity += evento.capacity;
                if(upcoming){
                    totalAssistance += evento.estimate;
                    objCategory.revenues += parseFloat(evento.price) * parseFloat(evento.estimate);
                }
                else{
                    totalAssistance += evento.assistance;
                    objCategory.revenues += parseFloat(evento.price) * parseFloat(evento.assistance);
                }
            }
        })
        objCategory.asistencia = (totalAssistance*100)/totalCapacity;
        arrayCategories.push(objCategory);

    });return arrayCategories
} 

function drawTable2 (objectList, container){
    let table = ``;
    if(objectList.length != 0){
        for (let i = 0; i < objectList.length; i++) {
            table += 
                    `<tr>
                        <td>${objectList[i].name} </td>
                        <td>$${objectList[i].revenues}</td>
                        <td>${(objectList[i].asistencia).toFixed(2)}%</td>
                    </tr>
                    `;
        }
    }
    container.innerHTML = table;
}
