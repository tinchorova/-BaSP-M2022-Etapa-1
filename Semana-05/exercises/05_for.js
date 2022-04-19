//For

/* 5.a) Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar 
una alerta utilizando cada una de las palabras.*/

console.log("------------------");
console.log("5.a");

var colores = ["rojo", "amarillo", "verde", "azul", "violeta"];

for (var i = 0; i < 5; i++){
    alert("5.a" + " " + colores[i]);
}
/* 5.b) Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por
 cada palabra modificada.*/

console.log("------------------");
console.log("5.b");

var colores = ["rojo", "amarillo", "verde", "azul", "violeta"];

for (var i = 0; i < 5; i++){
    colores[i] = (colores[i].substring(0,1).toUpperCase())
    alert("5.b" + " " + colores[i]);
}

/* 5.c) Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para 
ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.*/

console.log("------------------");
console.log("5.c");

var colores = ["rojo", "amarillo", "verde", "azul", "violeta"];

var sentence = " ";

for (var i = 0; i < 5; i++){
    sentence += " ";
    sentence += colores [i];
}
alert("5.c" + sentence);

/* 5.d) Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al 
final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la 
consola del navegador el array final (utilizar console.log).*/

console.log("------------------");
console.log("5.d");

var num = [""];

for (var i = 0; i < 10; i++){
    num [i] = i;
}
console.log(num);
