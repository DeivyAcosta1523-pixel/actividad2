// Pedimos las 4 edades (una por una)
let edad1 = prompt("Edad de la persona 1:")
let edad2 = prompt("Edad de la persona 2:")
let edad3 = prompt("Edad de la persona 3:")
let edad4 = prompt("Edad de la persona 4:")

// Convertimos lo que escribió el usuario (texto) a número
let e1 = Number(edad1)
let e2 = Number(edad2)
let e3 = Number(edad3)
let e4 = Number(edad4)

// Sumamos las 4 edades y dividimos entre 4
let promedio = (e1 + e2 + e3 + e4) / 4

// Mostramos el resultado
alert("El promedio de edad es: " + promedio)