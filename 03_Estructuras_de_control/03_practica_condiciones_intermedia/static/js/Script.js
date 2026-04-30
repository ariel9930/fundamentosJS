console.log("Conexion exitosa con JS...")
// EJERCICIO 11
// Resultado esperado en alert:
// `El estudiante Juan tiene nota 6.5 y su resultado es: Excelente rendimiento`

function ejercicio11() {
let nota = 6.7;
let nota1 = "ariel"

if(nota >= 6.0){
    alert(` El estudiante ${nota1} tiene nota ${nota}
        \ny su resultado es: Exelente rendimiento!`);
} else if(nota >= 4.0){ 
    alert(` Estudiante aprobado`);
} else{
    alert(`Estudiante reprobado`);
}
}


// EJERCICIO 12
// Resultado esperado en alert:
// `El nombre convertido es: DANIEL PÉREZ y tiene 12 caracteres`

function ejercicio12() {
    let nombre = "jorge rocas sabia"
alert(`El nombre convertido es: ${nombre.toUpperCase()} y tiene ${nombre.length} caracteres `);
}


// EJERCICIO 13
// Resultado esperado en alert:
// `El correo convertido es: ejemplo@gmail.com y el resultado es: correo válido`

function ejercicio13() {
let correo = "PIGGERDESTROYER@GMAIL.COM"
if (correo.length>=15) {
    alert(`El correo convertido es: ${correo.toLowerCase()} y el resultado es:
        \nCorreo valido`)
} else {
    alert(`Correo demasiado corto`)
}
}


// EJERCICIO 14
// Resultado esperado en alert:
// `La frase "Estoy aprendiendo JavaScript" tiene 28 caracteres y corresponde a una frase larga`

function ejercicio14() {
let frase = "Estoy aprendiendo CSS"
if (frase.length > 20){
    alert(`La frase "${frase}" tiene ${frase.length} caracteres y corresponde a una frase larga`)
} else if (frase.length >= 11) {
    alert(`La frase "${frase}" tiene ${frase.length} caracteres y corresponde a una frase mediana`)
} else {
    alert(`La frase "${frase}" tiene ${frase.length} caracteres y corresponde a una frase corta`)
}
}





// EJERCICIO 15
// Resultado esperado en alert:
// `El producto TECLADO tiene un precio final de $45000`

function ejercicio15(){
let precio = 5000
let producto = "teclado"
if (precio >= 50000) {
    alert(`El producto ${producto.toUpperCase()} tiene un precio final de ${precio*0.8} con un 20% de descuento`);
} else if (precio >= 20000) {
    alert(`El producto ${producto.toUpperCase()} tiene un precio final de ${precio*0.9} con un 10% de descuento`);
} else{
   alert(`El producto ${producto.toUpperCase()} tiene un precio final de ${precio} sin descuento`); 
}

}

function ejercicio16(){
let precio = 100000
let producto = "ram"
let nombre = "Alan ronaldo"
if (precio >= 100000) {
    alert(`${nombre.toUpperCase()} ah comprado una ram de 16GB
        \nPrecio original : ${precio} 
        \nEl producto ${producto.toLowerCase()} tiene un precio final de: ${precio*0.8} un 20% de descuento: cliente premium`);
} else if (precio >= 50000) {
    alert(`El producto ${producto.toLowerCase()} tiene un precio final de: ${precio*0.9} un 10% de descuento: cliente frecuente`);
} else{
   alert(`El producto ${producto.toLowerCase()} tiene un precio final de: ${precio} sin descuento: cliente normal`); 
}
}
function ejercicio17(){
    let frase = "CAPUCHINO PRESENTINO"
    let puntaje = 90
if (puntaje>=90) {
        alert(`la frase ${frase.toLowerCase()} tiene ${frase.length} caracteres
    \ny tiene un puntaje de ${puntaje} por lo cual su calificacion es excelente`);
} else if (puntaje>=70) {
        alert(`la frase ${frase.toLowerCase()} tiene ${frase.length} caracteres
    \ny tiene un puntaje de ${puntaje} por lo cual su calificacion es buena`);
} else{
        alert(`la frase ${frase.toLowerCase()} tiene ${frase.length} caracteres
    \ny tiene un puntaje de ${puntaje} por lo cual su calificacion es insuficiente`);
}
}
function ejercicio18(){
    let nombre = "tititisahur"
    let nota = 5.0
    let nota1 = 4.0
    let nota2 = 3.0
    let promedio = (nota + nota1 + nota2) / 3
if (nota>=6.0) {
    alert(`El estudiante ${nombre.toUpperCase()} saco un promedio de ${promedio}
    \npor lo cual destacado`);
} else if (nota>=4.0) {
     alert(`El estudiante ${nombre.toUpperCase()} saco un promedio de ${promedio}
    \npor lo cual es aprobado `);
}
   else{
     alert(`El estudiante ${nombre.toUpperCase()} saco un promedio de ${promedio}
    \npor lo cual es reprobado `);
} 
}

