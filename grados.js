/*formula (0°C x 9/5) +32 = 32°F*/

function convertirCelsiusAFahrenheit(celsius) {
    let resultado = celsius * 9 / 5.0 + 32;

    return resultado;
}

let celsius = 32;
let resultado = convertirCelsiusAFahrenheit(celsius);
console.log(`${celsius}°C = ${resultado}°F`);




function convertirfahrenheitACelsius(fahrenheit) {
    let resultado = (fahrenheit - 32) * 5 / 9.0;

    return resultado;
}

let fahrenheit = resultado;
resultado = convertirfahrenheitACelsius(fahrenheit);
console.log(`${fahrenheit}°F = ${resultado}°C`);