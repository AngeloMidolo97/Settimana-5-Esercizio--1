var dataAttuale = new Date();
const mesi = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre"
];

document.getElementById(
  "dataOggi"
).innerHTML = `${dataAttuale.getDate()} / ${mesi[dataAttuale.getMonth()]}
 / ${dataAttuale.getFullYear()}`;
document.getElementById("data").innerHTML = dataAttuale;
document.getElementById("giorno").innerHTML += dataAttuale.getDate();
document.getElementById("mese").innerHTML += mesi[dataAttuale.getMonth()];
document.getElementById('oggi').innerHTML += `${dataAttuale.getDate()}-${dataAttuale.getMonth()}-${dataAttuale.getFullYear()}`;

/* function calcolaMese() {
    let meseCorrente;
    if (dataAttuale.getMonth() == 0) {
        meseCorrente = mesi[0];
        return meseCorrente;
    }else if (dataAttuale.getMonth() == 1) {
        meseCorrente = mesi[1];
        return meseCorrente;
    }else if (dataAttuale.getMonth() == 2) {
        meseCorrente = mesi[2];
        return meseCorrente;
    }else if (dataAttuale.getMonth() == 3) {
        meseCorrente = mesi[3];
        return meseCorrente;
    }else if (dataAttuale.getMonth() == 4) {
        meseCorrente = mesi[4];
        return meseCorrente;
    }else if (dataAttuale.getMonth() == 5) {
        meseCorrente = mesi[5];
        return meseCorrente;
    }else if (dataAttuale.getMonth() == 6) {
        meseCorrente = mesi[6];
        return meseCorrente;
    }else if (dataAttuale.getMonth() == 7) {
        meseCorrente = mesi[7];
        return meseCorrente;
    }else if (dataAttuale.getMonth() == 8) {
        meseCorrente = mesi[8];
        return meseCorrente;
    }else if (dataAttuale.getMonth() == 9) {
        meseCorrente = mesi[9];
        return meseCorrente;
    }else if (dataAttuale.getMonth() == 10) {
        meseCorrente = mesi[10];
        return meseCorrente;
    }else if (dataAttuale.getMonth() == 11) {
        meseCorrente = mesi[11];
        return meseCorrente;
    }
} */


var orario = dataAttuale.getHours();
var nome = document.getElementById('nome');
var btn = document.getElementById('bottone');
var ora = `${dataAttuale.getHours()}:${dataAttuale.getMinutes()}`

btn.addEventListener('click', function() {
    saluto();
})


/* saluto(orario, nome); */
function saluto() {
    if(orario < 13) {
        document.getElementById('saluto').innerHTML = `Buongiorno ${nome.value} sono le ${ora}`;
        return;
    } else if(orario < 18) {
        document.getElementById('saluto').innerHTML = `Buonpomeriggio ${nome.value} sono le ${ora}`;
        return;
    } else {
        document.getElementById('saluto').innerHTML = `Buonasera ${nome.value} sono le ${ora}`;
        return;
    } 
}

