"use strict"

var casa = {
    ventanas:2,
    cuantasVentanas(){
        console.log("la casa tiene " + this.ventanas + " ventanas");
    }
};

function Coche() {
    this.ruedas=4;
    this.cuantasRuedas = function(){
        console.log("el coche tiene " + this.ruedas + " ruedas");
    }
}

casa.cuantasVentanas();

var coche = new Coche();

coche.cuantasRuedas();

setTimeout(casa.cuantasVentanas.bind(casa),1000);

setTimeout(coche.cuantasRuedas.bind(coche),1000);

