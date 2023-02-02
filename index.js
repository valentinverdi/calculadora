const teclaC = document.querySelector(".restablecer")
const teclaDivision = document.querySelector(".division")
const teclaMultiplicacion = document.querySelector(".multiplicacion")
const teclaSuma = document.querySelector(".mas")
const teclaResta = document.querySelector(".menos")
const teclaPorcentaje = document.querySelector(".porcentaje")
const teclaIgual = document.querySelector(".igual")
const tecla1 = document.querySelector(".uno")
const tecla2 = document.querySelector(".dos")
const tecla3 = document.querySelector(".tres")
const tecla4 = document.querySelector(".cuatro")
const tecla5 = document.querySelector(".cinco")
const tecla6 = document.querySelector(".seis")
const tecla7 = document.querySelector(".siete")
const tecla8 = document.querySelector(".ocho")
const tecla9 = document.querySelector(".nueve")
const tecla0 = document.querySelector(".cero")
const pantalla = document.querySelector(".pantalla")
const calculadora = document.querySelector(".grid-container")

let numero1 = null;
let numero2 = null;
let operacion = null;


tecla1.addEventListener("click", function e1(){
    pantalla.innerHTML += 1;
})

tecla2.addEventListener("click", function e2(){
    pantalla.innerHTML += 2;
})

tecla3.addEventListener("click", function e3(){
    pantalla.innerHTML += 3;
})

tecla4.addEventListener("click", function e4(){
    pantalla.innerHTML += 4;
})

tecla5.addEventListener("click", function e5(){
    pantalla.innerHTML += 5;
})

tecla6.addEventListener("click", function e6(){
    pantalla.innerHTML += 6;
})

tecla7.addEventListener("click", function e7(){
    pantalla.innerHTML += 7;
})

tecla8.addEventListener("click", function e8(){
    pantalla.innerHTML += 8;
})

tecla9.addEventListener("click", function e9(){
    pantalla.innerHTML += 9;
    
})

tecla0.addEventListener("click", function e0(){
    pantalla.innerHTML += 0;
})

teclaC.addEventListener("click", function e0(){
    pantalla.innerHTML = null;
    numero1 = null;
    numero2 = null;
    operacion = null;
})

teclaSuma.addEventListener("click",function es(){
    operacion = "+";
    numero1 = parseInt(pantalla.innerHTML);
    pantalla.innerHTML = null;
})

teclaResta.addEventListener("click",function er(){
    operacion = "-";
    numero1 = parseInt(pantalla.innerHTML);
    pantalla.innerHTML = null;
})

teclaMultiplicacion.addEventListener("click",function em(){
    operacion = "x";
    numero1 = parseInt(pantalla.innerHTML);
    pantalla.innerHTML = null;
})

teclaDivision.addEventListener("click",function ed(){
    operacion = "/";
    numero1 = parseInt(pantalla.innerHTML);
    pantalla.innerHTML = null;
})

teclaPorcentaje.addEventListener("click",function ep(){
    operacion = "%";
    numero1 = parseInt(pantalla.innerHTML);
    pantalla.innerHTML = null;
})

calculadora.addEventListener("keydown",function keydown(e){
    if (e.key == "+"){
        operacion = "+";
        numero1 = parseInt(pantalla.innerHTML);
        pantalla.innerHTML = null; 
    } else if (e.key == "-"){
        operacion = "-";
        numero1 = parseInt(pantalla.innerHTML);
        pantalla.innerHTML = null;
    } else if (e.key == "X" || e.key == "x"){
        operacion = "x";
        numero1 = parseInt(pantalla.innerHTML);
        pantalla.innerHTML = null;
    } else if (e.key == "/"){
        operacion = "/";
        numero1 = parseInt(pantalla.innerHTML);
        pantalla.innerHTML = null;
    } else if (e.key == "%"){
        operacion = "%";
        numero1 = parseInt(pantalla.innerHTML);
        pantalla.innerHTML = null;
    } else if (e.key == "1"){
        pantalla.innerHTML += 1;
    } else if (e.key == "2"){
        pantalla.innerHTML += 2;
    } else if (e.key == "3"){
        pantalla.innerHTML += 3;
    } else if (e.key == "4"){
        pantalla.innerHTML += 4;
    } else if (e.key == "5"){
        pantalla.innerHTML += 5;
    } else if (e.key == "6"){
        pantalla.innerHTML += 6;
    } else if (e.key == "7"){
        pantalla.innerHTML += 7;
    } else if (e.key == "8"){
        pantalla.innerHTML += 8;
    } else if (e.key == "9"){
        pantalla.innerHTML += 9;
    } else if (e.key == "0"){
        pantalla.innerHTML += 0;
    } else if (e.key == "c" || e.key == "C" || e.key == "Escape"){
        pantalla.innerHTML = null;
        numero1 = null;
        numero2 = null;
        operacion = null;
    } else if (e.key == "Enter" || e.key == " "){
        e.preventDefault()
        numero2 = parseInt(pantalla.innerHTML);
        if (operacion == "+"){
            pantalla.innerHTML = numero1 + numero2;
        } else if (operacion == "-") {
            pantalla.innerHTML = numero1 - numero2;
        } else if (operacion == "x") {
            pantalla.innerHTML = numero1 * numero2;
        } else if (operacion == "/") {
            pantalla.innerHTML = numero1 / numero2;
        } else if (operacion == "%") {
            pantalla.innerHTML = (numero1 * numero2)/100;
        }
        numero1 = parseInt(pantalla.innerHTML);
        operacion = null;
        numero2 = null;
    } else if (e.key == "Backspace"){
        pantalla.innerHTML = pantalla.innerHTML.substring(0, (pantalla.innerHTML.length - 1));
    } else {
        pantalla.innerHTML = pantalla.innerHTML
    } 
})

teclaIgual.addEventListener("click",function ei(){
    numero2 = parseInt(pantalla.innerHTML);
    if (operacion == "+"){
        pantalla.innerHTML = numero1 + numero2;
    } else if (operacion == "-") {
        pantalla.innerHTML = numero1 - numero2;
    } else if (operacion == "x") {
        pantalla.innerHTML = numero1 * numero2;
    } else if (operacion == "/") {
        pantalla.innerHTML = numero1 / numero2;
    } else if (operacion == "%") {
        pantalla.innerHTML = (numero1 * numero2)/100;
    }
    
    numero1 = parseInt(pantalla.innerHTML);
    operacion = null;
    numero2 = null;
})