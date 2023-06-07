/*Leer 10 precios de productos y calcular cuánto cuestan los 10 productos*/


let precios = [];

for (let i = 1; i <= 10; i++) {
    let precio = prompt(`Ingrese el precio del producto ${i}`);
    precios.push(precio);
}

let total = 0;
for (let i = 0; i < precios.length; i++) {
    total += precios[i];

    console.log(`El costo total de los 10 productos es: ${total}`); 
}

