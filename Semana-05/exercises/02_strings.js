//Strings

// 2.a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

var clima = "Está soleado";

console.log(clima.toUpperCase());

/* 2.b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 
5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

var comida = "empanadas fritas";
var cinco = comida.substring(0,5);
console.log(cinco);

/* 2.c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 
caracteres guardando el resultado en una nueva variable (utilizar substring). */

var diez, tres;

diez = "saxofon alto";
tres = diez.substring(((diez.length)-3));

console.log(tres);

/* 2.d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra 
en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, 
    toLowerCase y el operador +).*/

    var notas, notas1;

    notas = "doReMiFaSolLaSi";
    notas1 = notas.substring(0,1).toUpperCase() + notas.substring(1).toLowerCase();

    console.log(notas1);

/* 2.e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer 
espacio en blanco y guardarla en una variable (utilizar indexOf).*/

    var palabra1, palabra2;

    palabra1 = "saxofon tenor";
    palabra2 = palabra1.indexOf(" ");

    console.log(palabra2);

/* 2.f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los 
métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las 
demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

var palabra3, espacio, resultado3;

palabra3 = "saxofon baritono";
espacio = palabra3.indexOf(" ");
resultado3 = palabra3.substring(0,1).toUpperCase() + palabra3.substring(1, espacio) + palabra3.substring(espacio, (espacio+1)) + 
            palabra3.substring(espacio, (espacio+2)).toUpperCase() + palabra3.substring((espacio+2));

console.log(resultado3);









