// Pedimos distancia y velocidad
let distancia = prompt("¿Cuántos km es el recorrido?")
let velocidad = prompt("¿A cuántos km/h vas en promedio?")

// Convertimos a número
let km = Number(distancia)
let vel = Number(velocidad)

// Fórmula: tiempo = distancia ÷ velocidad
let tiempoHoras = km / vel

// Mostramos resultado
alert("El viaje tomará aproximadamente " + tiempoHoras + " horas")