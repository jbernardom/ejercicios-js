/*Llenar un arreglo con los primeros 100 números de la sucesión Fibonacci.
0,1,1,2,3,5,8,13*/


let fibonacci = [0, 1]; 


for (let i = 2; i < 100; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}


console.log("Los primeros 100 números de la sucesión de Fibonacci son:");
console.log(fibonacci);