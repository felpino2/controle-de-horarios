
const diaSemana = document.getElementById("dia-semana");
const dataAtual = document.getElementById("data-atual");
const horaAtual = document.getElementById("hora-atual");

function updateContentHour() {
    dataAtual.textContent = getCurrentDate();
    horaAtual.textContent = getCurrentTime();
}

//retorna a hora atual (hora/minuto/segundo)
function getCurrentTime(){
    const date = new Date();
    return String(date.getHours()).padStart(2, '0') + ":" + String(date.getMinutes()).padStart(2, '0') + ":" + String(date.getSeconds()).padStart(2, '0');
}


//retorna a data atual no padrão dd/mm/yyyy
function getCurrentDate(){
    const date = new Date();
    return date.toLocaleDateString("pt-br");
}

setInterval(updateContentHour,1000);

console.log(getCurrentTime());
console.log(getCurrentDate());