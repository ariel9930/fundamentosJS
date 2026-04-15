console.log("conexion con js correcta...");
/*
Dato: Tipo texto (string)
Concanetacion de texto con el signo +
Podemos unir textos y variables
*/
//concanetación: unir texto y/o variables.
const nombre = "Ariel";
const apellido = "Faundez";
// Unimos ambas constantes con un texto extra.
console.log("Hola, mi nombre es: " + nombre + " " + apellido);
/*
2.- Ver el tipo de dato (typeof)
*/
console.log("La variable nombre es un tipo de dato: " + typeof nombre);

// Template literals (forma moderna para concanetar)
console.log(`Hola, mi nombre es: ${nombre} ${apellido}`);

//mostrar el largo de un string(texto) - contar los caracteres.
//.Lenght = para contar caracteres y espacios.
let palabra = "Paralelepipedo";
console.log(`La palabra ${palabra} tiene ${palabra.length} letras.`);

//Crear una frase y contar sus caracteres.
let frase = "Sonion pipipikiwi";
console.log(`La frase "${frase}" tiene ${frase.length} caracteres.`);

// Metodos comunes en JS para formatear texto
// Transformar texto en mayuscula
let texto1 =  "tetESAhuR es LO MeJoR";
console.log(texto1.toUpperCase());

//Transformar a minusculas Tolocalelowercase()
console.log(texto1.toLocaleLowerCase());

// Buscar un texto dentro de un string .Inlcudes
let texto2 = "Leche, azucar, pan, huevos";
console.log(texto2.includes("huevos")); //true

// Convertir una variable a texto
let numero = 9993003990;
let telefono_texto = String(numero);
console.log(`Mi numero de telefono: ${telefono_texto}
    es de tipo; ${typeof telefono_texto}`);