/*Realizar un programa que permita sumar los 150 primeros números*/


function sumaNumeros() {
    let acumulador = 0;
    for (let num = 1; num <= 150; num +=1) {
        acumulador +=num;
    }
    return `la suma de los numeros del 1 al 150 es ${acumulador}`;
}
console.log(sumaNumeros());