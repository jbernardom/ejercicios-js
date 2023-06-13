/*Leer n cantidad de notas de un estudiante e imprimir por pantalla*/

let n;


let notas = [];


n = parseInt(prompt("Ingrese la cantidad de notas:"));


for (let i = 1; i <= n; i++) {

   
let nota = parseFloat(prompt("Ingrese la nota #" + i + ":"));


    notas.
   
push(nota);
}

console.log("Las notas del estudiante son:");

for (let nota of notas) {
    
   
console.log(nota);
}