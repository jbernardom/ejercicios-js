function convertirGaloALitro(galon) {
 let litros = galon * 3.785;
 console.log(litros); 
 return `El total en litros de gasolina son ${litros}`;
}

function convertirLitrosACentilitros(litros) {
    let centi = litros * 100 * 25;
    console.log(centi);
}

convertirGaloALitro(5)
convertirLitrosACentilitros(5)