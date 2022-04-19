//If Else

/* 4.a) Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar 
una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.*/

console.log("------------------");
console.log("4.a");


var num = Math.random();

console.log(num);

if(num >= 0.5){
    alert("4.1" + "Greater than 0,5")
} else {
    alert("4.a" + "Lower than 0,5");
}

/* 4.b) Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
“Bebe” si la edad es menor a 2 años;
“Niño” si la edad es entre 2 y 12 años;
“Adolescente” entre 13 y 19 años;
“Joven” entre 20 y 30 años;
“Adulto” entre 31 y 60 años;
“Adulto mayor” entre 61 y 75 años;
“Anciano” si es mayor a 75 años.*/

console.log("------------------");
console.log("4.b");


var Age = Math.floor(Math.random() *101);

console.log("4.b" + " " + Age);

if (Age < 2){
    alert("Bebe")
} else if ((Age <= 12) && (Age >= 3)){
    alert("Niño");
} else if ((Age <= 19) && (Age >= 12)){
    alert("Adolescente");
} else if ((Age <= 30) && (Age >= 20)){
    alert("Joven");
} else if ((Age <= 60) && (Age >= 31)){
    alert("Adulto");
} else if ((Age <= 75) && (Age >= 61)){
    alert("Adulto mayor");
} else if (Age > 75){
    alert("Anciano");
}