/*Llenar un arreglo con los primeros 100 números pares y muestre la suma de
los elementos del arreglo.*/



let numerosPares = [];


for (let i = 2; i <= 200; i += 2) {
  numerosPares.push(i);
}

let suma = numerosPares.reduce((a, b) => a + b, 0);


console.log("La suma de los primeros 100 números pares es: " + suma);