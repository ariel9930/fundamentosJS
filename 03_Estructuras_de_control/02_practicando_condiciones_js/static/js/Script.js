console.log("Conexion exitosa con JS...")
// Resultado esperado en alert:
// "Bienvenido Juan"

function ejercicio1() {
    let saludo = "Bienvenido Estefano"
    alert(`${saludo}`);
}


// EJERCICIO 2
// Resultado esperado en alert:
// "La suma es: 15"

function ejercicio2() {
    let s= 10
    let s1= 5
    alert(`La suma de ${s} + ${s1}
        \nes: ${s + s1}`);
}


// EJERCICIO 3
// Resultado esperado en alert:
// "La resta es: 12"

function ejercicio3() {
    let r = 15
    let r1 = 3
    alert(`La resta de ${r} - ${r1}
        \nes: ${r - r1}`);

}


// EJERCICIO 4
// Resultado esperado en alert:
// "La multiplicación es: 24"

function ejercicio4() {
 let m = 8
 let m1 = 3
 alert(`El resultado de ${m} * ${m1}
    \nes: ${m * m1}`);
}


// EJERCICIO 5
// Resultado esperado en alert:
// "El promedio es: 5.7"

function ejercicio5(){
let nota = 6.0;
let nota1 = 5.5;
let nota2 = 5.7
let promedio = Math.round((nota + nota1 + nota2) / 3);
alert(`El promedio del estudiante
    \nEstefano Poblete Ronaldo Colque
    \nes: ${promedio}`);
}


// EJERCICIO 6
// Resultado esperado en alert:
// "Es mayor de edad"

function ejercicio6(){
    let edad = 67;

if (edad => 18){ 

alert(`Edad es: ${edad}
    \nEres mayor de edad`);
}
}


// EJERCICIO 7
// Resultado esperado en alert:
// "El número es par"

function ejercicio7() {
let num = 6
let resto = num%2
if (resto = 1) {
    alert(`El numero ${num} es par`);
} else {
   alert(`El numero ${num} es impar`);
}
}
// EJERCICIO 8
// Resultado esperado en alert:
// "Estudiante aprobado"

function ejercicio8(){
    let nota = 6.7
    if (nota >= 4.0) {
        alert(`La nota es: ${nota} 
            \nestudiante aprobado`);
    } else if(nota <= 4.0){
        alert(`Estudante reprobado`)
    }
}


// EJERCICIO 9
// Resultado esperado en alert:
// "Precio final con descuento: $18000"

function ejercicio9() {
let pr = 20000
alert(`El precio del producto es: ${pr}
    \nPrecio final con descuento es: ${pr * 0.9}`);
}


// EJERCICIO 10
// Resultado esperado en alert:
// "El número mayor es: 22"

function ejercicio10() {
let num = 67
let num67 = 62
if (num > num67){
    alert(`El numero mayor es: ${num}`);
} else {
    alert(`El numero mayor es: ${num67}`);
}
}
