/*Llenar un arreglo de tamaño n, este tamaño debe ser impar, y el contenido
del arreglo deben ser los números pares partiendo de 2.*/

function llenarArregloNumerosPares(n) {
    if (n % 2 === 0) {
      console.log("El tamaño del arreglo debe ser impar.");
      return;
    }
  
    let arreglo = [];
  
    for (let i = 0; i < n; i++) {
      arreglo.push(2 + 2 * i);
    }
  
    return arreglo;
  }
  
  let n = 7; 
  let resultado = llenarArregloNumerosPares(n);
  console.log(resultado);