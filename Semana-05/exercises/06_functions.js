//Funciones

/* 6.a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una 
variable, mostrando el valor de dicha variable en la consola del navegador.*/

console.log("------------------");
console.log("6.a");

function suma (x,y){
    return (x + y);
}

var resultado = suma(1,2);
console.log(resultado);

/* 6.b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número,
 mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/


 console.log("------------------");
 console.log("6.b");

 function sumaEnteros(x,y){
    if((isNaN(x) || isNaN(y))){
    return alert(NaN);
    } else {
      console.log(suma(x,y));
    }
}
sumaEnteros("f",4);


/* 6.c) Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.*/

console.log("------------------");
console.log("6.c");

function validateInteger(z){
    if(Number.isInteger(z)){
        return (Number.isInteger(z));
    }
}
(validateInteger(2.5));


/* 6.d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. 
En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).*/

console.log("------------------");
console.log("6.d");

function validarSuma(x,y){
    if (Number.isInteger(x) && Number.isInteger(y)){
        sumaEnteros(x,y);
    } else {
        console.log(Math.round(x + y));
        return alert("6.d" + " " + "Not an integer number");
    }
}
(validarSuma(2.1,3));

// /* 6.e) Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga 
// funcionando igual.*/

console.log("------------------");
console.log("6.e");



function lastValidation(x,y){
    if (Number.isInteger(x) && Number.isInteger(y)){
        return console.log(+ (x + y));
    } else {
        console.log(Math.round(x + y));
        return alert("6.e Not an integer number")
    }
}

function sumaFinal(x, y){
    if((isNaN(x) || isNaN(y))){
        return alert(NaN);
    } else {
        lastValidation(x,y);
    }
}

sumaFinal(7,8.3);