/*Llenar un arreglo de tamaño n que se llene con números ingresados por el
usuario y determine cantidad de positivos y negativos*/



function llenarArregloYContarPositivosNegativos(n) {
    let arreglo = [];
    let positivos = 0;
    let negativos = 0;
  
    for (let i = 0; i < n; i++) {
      let numero = parseInt(prompt("Ingrese un número:"));
  
      arreglo.push(numero);
  
      if (numero > 0) {
        positivos++;
      } else if (numero < 0) {
        negativos++;
      }
    }
  
    console.log("El arreglo ingresado es:");
    console.log(arreglo);
    console.log("Cantidad de números positivos: " + positivos);
    console.log("Cantidad de números negativos: " + negativos);
  }
  
  // Ejemplo de uso
  let n = parseInt(prompt("Ingrese el tamaño del arreglo:"));
  llenarArregloYContarPositivosNegativos(n);



