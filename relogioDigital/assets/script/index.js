const horas = document.querySelector("#horas");
const minutos = document.querySelector("#minutos");
const segundos = document.querySelector("#segundos");
const milissegundos = document.querySelector("#milissegundos");

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    let ms = dateToday.getMilliseconds();

    if (hr < 10) hr = "0" + hr;
    if (min < 10) min = "0" + min;
    if (s < 10) s = "0" + s;
    if (ms < 100 || ms >= 10) {
        ms = "0" + ms;
    } else if (ms < 10) {
        ms = "00"
    }

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
    milissegundos.textContent = ms;
 })