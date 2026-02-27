// declaramos las variables
let producto;
let precio;
let cantidad;
let total;

// datos de entrada
producto = prompt("Ingrese el nombre del producto:");
precio = prompt("Ingrese el precio del producto:");
cantidad = prompt("Ingrese la cantidad comprada:");

// operaciones
total = precio * cantidad;

// datos de salida
console.log("El total a pagar por " + cantidad + " " + producto + " es: " + total);
