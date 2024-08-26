
const diaSemana = document.getElementById("dia-semana");
const dataAtual = document.getElementById("data-atual");
const horaAtual = document.getElementById("hora-atual");
const btnRegistrarPonto = document.getElementById("btn-registrar-ponto")

btnRegistrarPonto.addEventListener("click", register);

function register() {
    alert("Bater ponto!");
}

function updateContentHour() {
    horaAtual.textContent = getCurrentTime();
}

diaSemana.textContent = getWeekday();
dataAtual.textContent = getCurrentDate();

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

//pega o dia da semana atual
function getWeekday(){
    const weekday = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"];
    const d = new Date();
    return weekday[d.getDay()];
}


updateContentHour();
setInterval(updateContentHour,1000);

console.log(getWeekday());
console.log(getCurrentTime());
console.log(getCurrentDate());