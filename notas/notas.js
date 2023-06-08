/*Leer 12 notas de estudiantes y determinar cuántas aprobó y cuantas reprobó,
dado un rango 0 a 10, reprueba cuando la nota está entre 0 y 5.*/

function contarAprobadosReprobados () {
    let notas = [];
    let aprobados = 0;
    let reprobados = 0;

    for ( i = 1; i <= 12; i++) {
        let nota = prompt(`Ingrese la nota del estudiante ${i}`);
        notas.push(nota);

        if (nota >= 0 && nota <= 5) {
            reprobados++;
        }   else {
            aprobados++;
        }
    }
    console.log(`Cantidad de notas aprobadas es: ${aprobados}`);
    console.log(`Cantidad de notas reprobadas es: ${reprobados}`);
}
