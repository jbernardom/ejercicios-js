/*Leer los primeros 50 números y contar cuantos múltiplos de 3 hay, imprimir
la cantidad.*/

let contador = 0;

for (let i = 1; i <= 50; i++) {
    if ( i % 3 === 0) {
        contador++;
    }
}

console.log(`La cantidad de multiplos de en los primeros 50 numeros e: ${contador}`);