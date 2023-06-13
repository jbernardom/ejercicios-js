/*Leer 12 notas de estudiantes y determinar cuántas aprobó y cuantas reprobó,
dado un rango 0 a 10, reprueba cuando la nota está entre 0 y 5.*/

let aprobadas = 0;
let reprobadas = 0;

for (let i = 1; i <= 12; i++) {
  let nota = parseFloat(prompt("Ingrese la nota del estudiante #" + i + ":"));
  

if (nota >= 0 && nota <= 5) {
    reprobadas++;
  } 
    reprobadas++;

   
else if (nota > 5 && nota <= 10) {
    aprobadas++;
  } 
    aprobadas++;
  }

    aprobadas++;
else {
    console.log("La nota ingresada no está dentro del rango válido (0-10).");
    i--; 
    i

  }

console.log("Cantidad de estudiantes aprobados: " + aprobadas);
console.log("Cantidad de estudiantes reprobados: " + reprobadas);

