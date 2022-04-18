//Arrays

/* 3.a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).*/

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(meses [5] + " " + meses [11]);


/* 3.b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

console.log(meses.sort());

/* 3.c)Agregar un elemento al principio y al final del array (utilizar unshift y push).*/

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

meses.unshift("Verano");
meses.push("Otoño");

console.log(meses);

/* 3.d) Quitar un elemento del principio y del final del array (utilizar shift y pop).*/

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

meses.shift("Enero");
meses.pop("Diciembre");

console.log(meses);

/* 3.e) Invertir el orden del array (utilizar reverse).*/

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(meses.reverse());

/* 3.f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).*/

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(meses.join("-"));

/* 3.g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var mayo = meses.indexOf("Mayo");
var noviembre = meses.indexOf("Noviembre");

console.log(meses.slice(mayo, noviembre+1));
