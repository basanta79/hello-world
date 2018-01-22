"use strict";

var empleado ={
    nombre: "Smith",
    profesion: "agente",
    edad: 42,
    armas: ["pistola", "rifle", "kungfu"]
};

console.log(empleado);

var serializado = JSON.stringify(empleado);

console.log(serializado);

//serializado = serializado + '}';

var leido;
try{
    leido = JSON.parse(serializado);
    console.log(leido);
}catch (error){
    console.log("no se pudo leer serializado");
}

if (typeof(leido)!='undefined'){
    console.log("hay algo en leido");
}else{
    console.log("No hay nada  en leido");
}

for (var i=0; i<empleado.armas.length; i++){
    var arma = empleado.armas[i];
    console.log(empleado.nombre + (arma=="kungfu"? ' sabe ' : ' tiene ') + arma);
}