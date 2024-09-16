
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



/*
const btnDialogEntrada = document.getElementById("btn-dialog-entrada");
btnDialogEntrada.addEventListener("click", () => { //arrow function quando é clicado, chama essa função, mesma coisa de function() {...}, função anonima sem nome

    saveRegisterLocalStorage(getObjectRegister("Entrada"));
})

const btnDialogSaida = document.getElementById("btn-dialog-saida");
btnDialogSaida.addEventListener("click", () => {
    saveRegisterLocalStorage(getObjectRegister("Saída"));
})

*/

const selectRegisterType = document.getElementById("register-type");

const btnDialogRegister = document.getElementById("btn-dialog-register");
btnDialogRegister.addEventListener("click", () => {

    let register = getObjectRegister(selectRegisterType.value);
    saveRegisterLocalStorage(register);

    localStorage.setItem("lastRegisterType", selectRegisterType.value);
    setRegisterType()

    dialogPonto.close();
});


function setRegisterType(){
    let lastType = localStorage.getItem("lastRegisterType");
    if (lastType == "entrada") {
        selectRegisterType.value = "intervalo";
    }
    if (lastType == "intervalo") {
        selectRegisterType.value = "volta-intervalo";
    }
    if (lastType == "volta-intervalo") {
        selectRegisterType.value = "saida";
    }
    if (lastType == "saida") {
        selectRegisterType.value = "entrada";
    }
}





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




let registerLocalStorage = getRegisterLocalStorage("register");

function saveRegisterLocalStorage(register) {

    registerLocalStorage.push(register);
    localStorage.setItem("register", JSON.stringify(registerLocalStorage));
}

function getRegisterLocalStorage(key){
    let registers = localStorage.getItem(key);

    if(!registers) {
        return [];
    }

    return JSON.parse(registers);

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