
//  Presentación completa
// Crea las variables:
// nombre: Camila
// edad: 25
// Debes mostrar un mensaje que:
// Presente a la persona
// Indique su edad
// Indique el tipo de dato de edad
// 👉 Todo en un solo mensaje.

console.log("Conexión correcta con js");
const nombre = "camila";
const edad = "25";
console.log("Hola, mi nombre es: " + nombre + " y tengo " + edad + " años.");

// 2️⃣ Ubicación con transformación
// Crea las variables:
// comuna: Maipú
// region: Metropolitana
// Debes mostrar un mensaje que:
// Indique dónde vive la persona
// Muestre la comuna en MAYÚSCULAS
// Muestre la región en minúsculas

const comuna = "maipú"
const region = "metropolitana"
console.log("Vivo en la comuna de " + comuna.toLocaleUpperCase() + " de la region " + region.toLocaleLowerCase());


// 3️⃣ Análisis de palabra
// Crea la variable:
// lenguaje: Python
// Debes mostrar un mensaje que:
// Indique cuántos caracteres tiene
// Muestre la palabra en MAYÚSCULAS
// Indique el tipo de dato

let lenguaje = "Python"
console.log(`La palabra "${lenguaje.toLocaleUpperCase()}" tiene ${lenguaje.length} caracteres.`);

// 4️⃣ Frase completa analizada
// Crea la variable:
// mensaje: Me encanta programar en JavaScript
// Debes mostrar un mensaje que:
// Indique la cantidad de caracteres
// Verifique si contiene la palabra "JavaScript"
// Muestre el mensaje completo en minúsculas

let mensaje = "Me encanta programar en JavaScript"
console.log(`la frase "${mensaje.toLocaleLowerCase()}" tiene ${mensaje.length} caracteres y contiene "javascript": ${mensaje.toLocaleLowerCase().includes("javascript")}`);
// 5️⃣ Lista con búsqueda y transformación
// Crea la variable:
// compras: arroz, fideos, aceite, sal
// Debes mostrar:
// Si existe la palabra "aceite"
// El texto completo en MAYÚSCULAS
// La cantidad total de caracteres

let compras = "arroz, fideos, aceite, sal"
console.log(`${compras.toLocaleUpperCase()} "tiene ${compras.length} caracteres" y tiene la palabra aceite? ${compras.includes("aceite")}`);
// 6️⃣ Conversión + análisis
// Crea las variables:
// numeroCasa: 456
// numeroCasaTexto (vacía)
// Debes:
// Convertir el número a texto
// Mostrar el número convertido
// Indicar su tipo de dato
// Indicar cuántos caracteres tiene

let numeroCasa = "456"
let numeroCasaTexto = String(numeroCasa);
console.log(`Mi numero de casa: ${numeroCasa}
    es de tipo; ${typeof numeroCasa} tiene ${numeroCasa.length} letras`);
// 7️⃣ Identificación personal extendida
// Crea las variables:
// nombre: Diego
// apellido: Rojas
// Debes mostrar un mensaje que:
// Muestre el nombre completo
// Indique cuántos caracteres tiene el nombre completo (incluyendo espacio)
// Muestre todo en MAYÚSCULAS

let nombre1 = "Diego"
let apellido1 = "Rojas"
console.log(`el nombre: ${nombre1.toUpperCase() + " " + apellido1.toUpperCase()} tiene ${nombre1.length + apellido1.length} caracteres.`);
// 8️⃣ Verificación de contenido
// Crea la variable:
// frase: Hoy aprenderemos sobre strings
// Debes mostrar:
// Si contiene la palabra "strings"
// La frase en MAYÚSCULAS
// La cantidad de caracteres

let frase = "Hoy aprenderemos sobre strings"
console.log(`La frase ${frase} contiene la palabra "stringhs"
    ${frase.includes("strings")}`);
    console.log(`${frase.toUpperCase()} - Tiene ${frase.length} caracteres.`);


// 9️⃣ Comparación de formatos
// Crea la variable:
// texto: Programar es divertido
// Debes mostrar en un solo mensaje:
// El texto original
// El texto en minúsculas
// El texto en mayúsculas
// La cantidad de caracteres

let texto = "Programar es divertido"
console.log(` Texto original${texto}
    \ntexto en minusculas: ${texto.toLowerCase()}
    \ntexto en mayuscula: ${texto.toUpperCase()}
    \nEl texto tiene: ${texto.length} caracteres`);
    
// 🔟 Desafío completo integrado
// Crea las variables:
// curso: 4C
// anio: 2026
// Debes mostrar un mensaje que:
// Indique el curso y año
// Convierta el año a texto
// Indique el tipo de dato del año convertido
// Muestre todo el mensaje en MAYÚSCULAS
let curso = "4C";
let anio = "2026";
let anioTexto = String(anio); // anio a texto

console.log(` Curso ${curso} del año ${anioTexto}
    \nAño es de tipo: ${typeof anioTexto}` .toUpperCase());
    