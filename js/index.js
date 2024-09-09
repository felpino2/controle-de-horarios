
function getUserLocation(){
navigator.geolocation.getCurrentPosition((position) => {
    let userLocation = {    
            lat: position.coords.latitude,
            long: position.coords.longitude
        }
        return userLocation;
    });
}

const diaSemana = document.getElementById("dia-semana");
const dataAtual = document.getElementById("data-atual");
const horaAtual = document.getElementById("hora-atual");
const btnRegistrarPonto = document.getElementById("btn-registrar-ponto")

btnRegistrarPonto.addEventListener("click", register);



const dialogPonto = document.getElementById("dialog-ponto");

const dialogData = document.getElementById("dialog-data");
dialogData.textContent = getCurrentDate();

const dialogHora = document.getElementById("dialog-hora");
dialogHora.textContent = getCurrentTime();


const btnDialogEntrada = document.getElementById("btn-dialog-entrada");
btnDialogEntrada.addEventListener("click", () => { //arrow function quando é clicado, chama essa função, mesma coisa de function() {...}, função anonima sem nome

    saveRegisterLocalStorage(JSON.stringify(getObjectRegister("ENTRADA")));
})

const btnDialogSaida = document.getElementById("btn-dialog-saida");
btnDialogSaida.addEventListener("click", () => {
    saveRegisterLocalStorage(JSON.stringify(getObjectRegister("SAÍDA")));
})

function getObjectRegister(registerType){
    ponto = {
        "date": getCurrentDate(),
        "time": getCurrentTime(),
        "location": getUserLocation(),
        "id": 1,
        "type": registerType
    }
    return ponto;
}

const btnDialogFechar = document.getElementById("dialog-fechar");
btnDialogFechar.addEventListener("click", () => {
    dialogPonto.close();
})

function saveRegisterLocalStorage(register) {
    localStorage.setItem("register", register)
}

function getRegisterLocalStorage(key){
    //getItem(chave)
}

function register() {
    dialogPonto.showModal();
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