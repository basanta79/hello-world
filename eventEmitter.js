"use strict";

var events=require('events');
var myEmitter = new events.EventEmitter();

myEmitter.on('llamar telefono', sonarTelefono);
myEmitter.on('llamar telefono', vibrarTelefono);

function sonarTelefono(quien){
	if (quien=='jefe'){return;}
	console.log('ring ring ring');
}

function vibrarTelefono(quien){
	console.log('brrr brrr brrr');
}

console.log('llama el jefe:')
myEmitter.emit('llamar telefono', 'jefe');

console.log('llama un compi:')
myEmitter.emit('llamar telefono', 'compi');


