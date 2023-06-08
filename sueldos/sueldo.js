



function obtenerSueldoMasBajo() {
    let cantidadSueldos = parseInt(prompt("Ingrese la cantidad de sueldos:"));
  
    
    if (isNaN(cantidadSueldos) || cantidadSueldos <= 0) {
      console.log("La cantidad ingresada no es válida.");
      return;
    }
  
    let sueldos = [];


    for (let i = 1; i <= 4; i++) {
        let sueldo = parseFloat(prompt("Ingrese el sueldo " + i + ":"));
    
        if (isNaN(sueldo) || sueldo <= 0) {
          console.log("El sueldo ingresado no es válido.");
          return;
        }
    
        sueldos.push(sueldo);
      }
    
      let sueldoMasBajo = sueldos[0];

      for (let i = 1; i < sueldos.length; i++) {
        if (sueldos[i] < sueldoMasBajo) {
          sueldoMasBajo = sueldos[i];
        }
      }
    
      console.log("Sueldos ingresados: " + sueldos.join(", "));
      console.log("Sueldo más bajo: " + sueldoMasBajo);
    }
    
    
    obtenerSueldoMasBajo();