"use strict";

//info de sistema
var info={
	pid: process.pid,
	version: process.version,
	platform: process.platform,
	title: process.title,
	argumentos: process.argumentos,
	execPath: process.execPath,
	carpeta: process.cwd()
};

console.log('entro en ',info);

process.on('exit',function(){
	console.log('Adios. Antes de terminar me despido.');
});