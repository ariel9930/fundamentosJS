console.log("Conexion exitosa con js...")

// 🔹 Ejercicio 1: Edad proyectada
// Declara tu edad actual y calcula:
// Tu edad en 5 años
// Tu edad hace 10 años
// Muestra ambos resultados en consola.

function edadProyectada(){
    let edad = 16;
    alert(`Mi edad es: ${edad}
        \nEn 5 años tendré: ${edad + 5}
        \nHace 10 años tenia: ${edad -10}`);
};

// 🔹 Ejercicio 2: Compra con descuento
// Un producto cuesta $25.000 y tiene un descuento del 20%.
// Calcula el precio final
// Muestra el resultado

function compraDescuento(){
 let precio = 25000
 alert(`El precio inicial es de ${precio}
    \nEl precio con 20% de descuento es: ${precio*0.8}`);

};
// 🔹 Ejercicio 3: Promedio de notas
// Declara 3 notas decimales:
// Calcula el promedio
// Redondea el resultado usando Math.round()

function promedioNotas(){
    let nota1 = 5.6
    let nota2 = 6.7
    let nota3 = 4.4
    let suma = nota1 + nota2 + nota3
    let promedio = (Math.round(suma/3))
    alert(`El promedio de notas de: ${nota1} , ${nota2} y ${nota3} es: ${(nota1 + nota2 + nota3) / 3}
    \nY redondeado seria ${Math.round(promedio)}`);
};
// 🔹 Ejercicio 4: Temperatura
// Declara una temperatura actual en grados Celsius:
// Auméntala en 3 grados
// Luego disminúyela en 5 grados
// Muestra el resultado final

function calcularTemperatura(){
    let temperatura = 12
    alert(`La temperatura actual es: ${temperatura}
        \n aumento 3 grados: ${(temperatura + 3)}
        \n y disminuyo 5 grados: ${temperatura - 2} `);
}
// 🔹 Ejercicio 5: Sueldo semanal
// Un trabajador gana $8.000 por hora y trabaja 45 horas:
// Calcula su sueldo
// Si trabaja 5 horas extra, agrégalas usando incremento
// Muestra el nuevo sueldo

function calcularSueldo(){
    let sueldoHora = 8000
    alert(`El sueldo que gana despues de 45 horas es: $${sueldoHora * 45}
        \n si trabaja 5 horas extras seria: $${sueldoHora * 45 + 40000} `);
};
// 🔹 Ejercicio 6: División y resto
// Declara dos números:
// Calcula la división
// Calcula el módulo (%)
// Explica el resultado en consola

function divisionResto(){
    let numero1 = 5
    let numero2 = 10
    alert(` los numeros ${numero1} y ${numero2}
        \ndivididos son: ${numero1 / numero2}
        \nel modulo de esta division es: ${numero1 % numero2}`);
};
// 🔹 Ejercicio 7: Comparación de números
// Declara dos números:
// Muestra si el primero es mayor que el segundo
// Verifica si uno de ellos es igual a 10

function comparacionDenumeros(){
    let Num1 = 67
    let Num2 = 61
    alert(` el numero1 es mayor al numero2?  ${Num1 > Num2}
    \nel numero1 es igual a 10?  ${Num1 === 10}`)
}
// 🔹 Ejercicio 8: Notación científica aplicada
// Declara:
// Una población usando notación científica (ej: 1e6)
// Divide esa población en 4 grupos
// Muestra el resultado

function notacionAplicada(){
    let poblacion = 2e7
    alert(`la poblacion total es: ${poblacion}
        \ndividida en 4 grupos es: ${poblacion / 4}`)
}
// 🔹 Ejercicio 9: Potencia y cálculo combinado
// Calcula:
// 3 elevado a 4
// Luego multiplícalo por 2
// Resta 10 al resultado final

function potenciaCalculocombinado(){
    let Number1 = 3
    let Number2 = 4
    alert(`si elevamos 3 a 4 nos da: ${Number1 ** Number2}
        \nsi a eso lo multiplicamos por dos seria: ${Number1 ** Number2 * 2}
        \ny si a esta multiplicacion le restamos 10 el resultado final es: ${Number1 ** Number2 * 2 - 10}`)
}
// 🔹 Ejercicio 10: Dado aleatorio 🎲
// Simula el lanzamiento de un dado:
// Genera un número entre 1 y 6
// Muestra el resultado
// Indica si el número es mayor o igual a 4 (gana) o menor (pierde)

function dadoAleatorio(){
    let dado1 = 1
    let dado2 = 2
    alert(`Si lanzamos un dado `)
}
