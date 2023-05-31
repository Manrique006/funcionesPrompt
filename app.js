const prompt = require("prompt-sync")({sigint:true});

let nombre = prompt("ingrese su nombre: ");
console.log(`Hola ${nombre}`);

let edad = prompt("ingrese su edad: ");
console.log(`edad ${edad}`);

let nacionalidad = prompt("cual es tu nacionalidad: ");
console.log(`nacionalidad ${nacionalidad}`);

let telefono = prompt("ingresa tu numero de telefono: ");
console.log(`telefono ${telefono}`);
