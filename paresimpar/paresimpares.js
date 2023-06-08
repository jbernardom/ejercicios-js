/*Leer n cantidad números y determinar cantidad de impares, imprimir
cantidad de impares.*/



let num = parseInt(prompt("Ingrese la cantidad de números a leer:"));


let cantidadImpares = 0;


for (let i = 1; i <= 6; i++) {
  let numero = parseInt(prompt("Ingrese el número " + i + ":"));
  
  
  if (numero % 2 !== 0) {
    cantidadImpares++;
  }
}


console.log("La cantidad de números impares es: " + cantidadImpares);
