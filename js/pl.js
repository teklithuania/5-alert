"use strict"

//Zadanie 1

function sprawdz() {
    // pobrac liczbe wpisana do pola edycyjnego
    let liczba = document.getElementById("pole").value;
    // podejmij decyzje jaka to liczba (dodatnia czy ujemna)
    if (liczba > 0) {
        return document.getElementById("wynik").innerHTML='Dodatnia';
    } else if ( liczba ==  0) {
        return document.getElementById("wynik").innerHTML='Rowna 0';
    } else if ( liczba < 0 ){
        return document.getElementById("wynik").innerHTML='Ujemna';
    } else {
        return document.getElementById("wynik").innerHTML='To nie jest liczba';
    }
    //wyswietl odpowiedni komentarz

}


//Zadanie2

function wypisz() {
    let liczba1 = document.getElementById('pole1').value;
    let liczba2 = document.getElementById('pole2').value;
    let napis ='';

    for (let i = liczba1; i <= liczba2; i++) {
        napis = napis + i + '';
    }
    document.getElementById('wynik').innerHTML = napis;
}


//Zadanie3

let numer = Math.floor(Math.random()*5)+1;

function zmienSlide() {
    numer++;
    if (numer>5) {
        numer=1;
    }
    let plik = '<img src=\'slajdy/slajd'+numer+'.jpg\'>'
    document.getElementById('slider').innerHTML = plik;

    setTimeout('zmienSlide()', 3000);
}