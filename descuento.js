/* calcular el salario de un empleado según los siguientes
parámetros.
a.Si gana menos de 699.999, Descuento de pensión =2%, y más un Aux. de transporte= 6%.
b. Si gana entre 700.000 y 999.999, Descuento de pensión =4%, Subsidio familiar = 12.000,
sino le pagan el mismo salario.
c. Si gana más del millón Descuento de pensión =6%*/



function calcularSalario(empleado) {
    let salario = empleado.salario;
    let descuentoPension = 0;
    let auxTransporte = 0;
    let subsidioFamiliar = 0;
  
    if (salario < 699999) {
      descuentoPension = salario * 0.02;
      auxTransporte = salario * 0.06;
    } else if (salario >= 700000 && salario < 1000000) {
      descuentoPension = salario * 0.04;
      subsidioFamiliar = 12000;
    } else if (salario >= 1000000) {
      descuentoPension = salario * 0.06;
    }
  
    let salarioNeto = salario - descuentoPension + auxTransporte + subsidioFamiliar;
  
    return salarioNeto;
  }
  
  // Ejemplo de uso
  let empleado = {
    salario: 850000,
  };
  
  let salarioNeto = calcularSalario(empleado);
  console.log("El salario neto del empleado es: " + salarioNeto);