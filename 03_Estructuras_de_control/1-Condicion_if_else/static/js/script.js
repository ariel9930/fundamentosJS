console.log("Conexión exitosa con JS...")

/*
================================
¿Qué es una condición en JS?
===============================
Una condición nos permite tomar decisiones en el
código. Separando dos caminos el si (if) y el no (else).

Estructura basica:(Sintaxis--> Reglas del Lenguaje de programacion).

if (condicion){
  //código que se ejecuta si la condicion es verdadera.
}else {
    //Codigo que se ejecuta si la condicion es falsa.
}
*/

//Ejemplo 1: (Numerico) -- IF
let edad = 18;

if (edad == 18){ //Condicion Si
console.log("Eres mayor de edad");
}

//Ejemplo 2: Dos caminos posibles
let temperatura = 21;

if(temperatura >  20){ //Condicion si
    console.log("Hace calor");
} else { //condicion no
    console.log("Hace frio");
}

//Ejemplo 3: IF - ELSE IF - ELSE (Multiplicacion condiciones)

let nota = 3.0;


if(nota >= 6.0){ //Primera condicion
console.log("Exelente!");
} else if(nota >= 4.0){ //segunda condicion
    console.log("Aprovado");
} else{ //tercera condicion
    console.log("Reprovado, estudia flojo ql");
}

//Ejemplo 4: Condiciones con STRING
let nombre = "Ratalan";

//Comparacion exacta (===)
if (nombre == "Ratalan"){
    console.log("Hola! " + nombre);
} else {
    console.log("Tu no eres " + nombre)
}

/* 
OPERADORES DE COMPARACION:

>MAYOR QUE
<MENOR QUE
>=MAYOR O IGUAL
<=MENOS O IGUAL
=== ESTRICTA  IGUALDAD
!== DISTINTO ESCRITO
== IGUALDAD
!= DISTINTO
*/
//Ejemplo de distinto
let num = 10
let num2 = 5
if(num !== num2){
console.log(`El numero: ${num} es distinto que ${num2}`);
} else{
    console.log("Son iguales!");
}
