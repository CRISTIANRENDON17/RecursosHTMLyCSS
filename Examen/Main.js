/* Punto1 Crear una un arreglo de 10 posicion, y en una funcion anonima 
    mostrar en una ventana emergente el array al revez
*/

var Array = [];

function Punto1() {
    
    for (var i = 0; i < 10; i++) {
        var Datos = prompt("Ingrese datos al array:");
        Array[i] = Datos;
    }
   
    alert("Arreglo Creado:" + Array);

    //funcion anonima
    (function () {

        Aux = [];
        var con = 0;
        for (var i = 9; i >= 0; i--) {
            Aux[con] = Array[i];
            con++;
        }

        alert("Arreglo Al reves: " + Aux);

    })();
}
document.getElementById('Punto1').addEventListener('click', Punto1);

/*
  Crear un array con 10 posiciones que muestre en la pagina web el numero primo mayor  
 */


function Punto2() {

    var Array2 = [];
    for (var e = 0; e < 10; e++) {
        var Datos = prompt("Ingrese datos al array Punto2:");
        Array2[e] = Datos;
    }
    var Aux2 = [];
    var Con, Con2 = 0;
    var Mayor = 0;
    for (var i = 0; i < Array2.length; i++) {
        Con = 0;
        for (var j = 1; j <= Array2[i]; j++) {
            if (Array2[i] % i == 0) {
                Con++;
            }
        }
        if (Con < 2) {
            Aux2[Con2] = Array2[i];

            if (Aux2[Con2] > Mayor) {
                Mayor = Aux2[Con2];
            }
            Con2++;
        }
    }
    PrimoMayor = document.getElementById("PrimoMayor");
    Resultado2 = document.getElementById("Resultado2");
    Resultado2.innerHTML = "Respuesta punto 2 (Array): " + Array2;
    PrimoMayor.innerHTML = "Respuesta punto 2 (Primo mayor): " + Mayor;
    Resultado2.preventDefault();
    PrimoMayor.preventDefault();
}
document.getElementById('Punto2').addEventListener('click', Punto2);


/* Punto3
Crear un arreglo que contenga 10 números, con este crear una función que retorne y 
muestre en la página web el número mayor que se encuentra en las posiciones impares.
*/

function Punto3() {

    var Array3 = [];
    for (var i = 0; i < 10; i++) {
        var Datos = prompt("Ingrese datos al array:");
        Array3[i] = Datos;
    }
    var Mayor = 0;
 
    for (var i = 0; i < Array3.length; i++) {
       
        if(Array3[i]%2 != 0)
        {
            if(Array3[i] > Mayor)
            {
                Mayor = Array3[i];
            }
        }
    }
    ImparMayor= document.getElementById("ImparMayor");
    Resultado3 = document.getElementById("Resultado3");
    Resultado3.innerHTML = "Respuesta punto 3 (Array): " + Array3;
    ImparMayor.innerHTML = "Respuesta punto 3 (Impar mayor): "+Mayor;
    Resultado3.preventDefault();
    ImparMayor.preventDefault();
}
document.getElementById('Punto3').addEventListener('click', Punto3);