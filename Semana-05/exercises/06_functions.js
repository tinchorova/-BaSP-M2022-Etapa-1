//Funciones

/* 6.a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una 
variable, mostrando el valor de dicha variable en la consola del navegador.*/

function suma (x,y){
    return (x + y);
}
var resultado = suma(1,2);
console.log(resultado);

/* 6.b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número,
 mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/

 function suma (x,y){
     if((IsNaN(x) || IsNaN(y))){
    return alert(NaN);
    } else {
        return (x + y);
    }
}
console.log(suma("a",4));

/* 6.c) Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.*/




/* 6.d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar 
un alerta con el error y retorna el número convertido a entero (redondeado).*/

/* 6.e) Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga 
funcionando igual.*/
