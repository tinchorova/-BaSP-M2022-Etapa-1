//Variables and Operators

/* 1.a) Crear dos variables numéricas y utilizar el operador suma 
para guardar el valor de la suma de ambos números en una 3er variable. */

var a, b, c;
a = 1;
b = 2;
c = a + b;

console.log("1.a = " + c)

/* 1.b) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable. */

var myFirstName, myLastName, myFullName;

myFirstName = "Martín";
myLastName = "Rova";
myFullName = myFirstName + " " + myLastName;

console.log(myFullName)

/* 1.c) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) 
guardando el resultado de la suma en una 3er variable (utilizar length).*/

var nombrePadre, nombreMadre, sumaNombres;

nombrePadre = "Marcelo";
nombreMadre = "Analía";
sumaNombres = nombrePadre.length + nombreMadre.length;

console.log(sumaNombres)