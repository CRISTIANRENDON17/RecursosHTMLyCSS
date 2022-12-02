//var filas = prompt("Ingrese la cantidad de filas para la tabla");

var numbers = [12, 14, 123, 11, 2, 16, 5, 23, 27, 13, 77777, 24, 12, 11, 15, 33];


/*-------------------Imprimir en una ventana emergente el número mayor.---------------------------*/
function Funcion1() {
  Mayor = document.getElementById("Mayor");
  var ma = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (ma < numbers[i]) {
      ma = numbers[i];
    }
  }
  Mayor.innerHTML = "Respuesta/ " + ma;
  Mayor.preventDefault();
}
document.getElementById('BotonMayor').addEventListener('click', Funcion1);

function EliminarFuncion1() {
  Mayor = document.getElementById("Mayor");
  Mayor.innerHTML = "";
  Mayor.preventDefault();
}
document.getElementById('BotonEliminarMayor').addEventListener('click', EliminarFuncion1);

/*-----------------------Imprimir en la página web los números que son primos.-------------------------*/
function Funcion2() {
  Primos = document.getElementById("Primos");
  Primos.innerHTML = "Primos/ ";
  var contador;
  for (var i = 0; i < numbers.length; i++) {
    contador = 0;
    for (var j = 1; j <= numbers[i]; j++) {
      if (numbers[i] % i == 0) {
        contador++;
      }
    }
    if (contador < 2) {
      Primos.innerHTML += numbers[i] + ".  ";
    }
  }
  Primos.preventDefault();
}
document.getElementById('BotonPrimos').addEventListener('click', Funcion2);

function EliminarFuncion2() {
  Primos = document.getElementById("Primos");
  Primos.innerHTML = "";
  Primos.preventDefault();
}
document.getElementById('BotonEliminarPrimos').addEventListener('click', EliminarFuncion2);

/*-------Imprimir en consola los números que no son mayores de un valor ingresado en un input y recibido como parámetro.-----------*/

function Funcion3() {
  Menores = document.getElementById("Menores");
  Numero = document.getElementById("Numero");

  Menores.innerHTML = "Respuesta/ ";
  for (var i = 0; i < numbers.length; i++) {
    if (parseInt(Numero.value) > numbers[i]) {
      Menores.innerHTML += numbers[i] + ".  ";
    }
  }

  Menores.preventDefault();
}
document.getElementById('BotonMenor').addEventListener('click', Funcion3);

function EliminarFuncion3() {
  Menores = document.getElementById("Menores");
  Menores.innerHTML = "";
  Menores.preventDefault();
}
document.getElementById('BotonEliminarMenor').addEventListener('click', EliminarFuncion3);

/*-------------Imprimir en una ventana emergente el porcentaje de números que tienen entre dos y
  cuatro cifras.---------------------*/

function Funcion4() {
  Porcentaje = document.getElementById("Porcentaje");
  Porcentaje.innerHTML = "Respuesta/ ";
  var contador = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 9 && numbers[i] < 1000) {
      contador++;
    }
  }
  if (contador == 0) {
    Porcentaje.innerHTML = "No hay numeros con esas cantidades de cifras";
  } else {
    Porcentaje.innerHTML = (100 * contador) / numbers.length + "%";
  }
  Porcentaje.preventDefault();
}
document.getElementById('BotonPorcentaje').addEventListener('click', Funcion4);


function EliminarFuncion4() {
  Porcentaje = document.getElementById("Porcentaje");
  Porcentaje.innerHTML = "";
  Porcentaje.preventDefault();
}
document.getElementById('BotonEliminarPorcentaje').addEventListener('click', EliminarFuncion4);

/*-----------Crear otro arreglo de 10 números e imprimir en la página web los números que no están
  repetidos.----------------------*/
var Arreglo = [];
var cont = 0;

function Agregar() {
  cont += 1;
  if (cont < 11) {
    Numero = document.getElementById("Numero2");
    Arreglo2 = document.getElementById("Arreglo2");
    Arreglo[Arreglo.length] = parseInt(Numero.value);
    var text = "";
    text = Arreglo.toString();
    Arreglo2.innerHTML = text;
    Arreglo2.preventDefault();
    Numero.innerHTML = "";

  }
}
document.getElementById('BotonAgregar').addEventListener('click', Agregar);


function Funcion5() {
  if (cont >= 1) {
    Arreglo3 = document.getElementById("Arreglo3");
    Arreglo3.innerHTML = "Respuesta/ ";
    Arreglo.sort(); //ordena el arraylist
    var Aux = Arreglo;
    var Aux3 = [];
    var pos = 0;
    for(var i = 0; i<Aux.length ; i++)
    {
      if(Aux[i] == Aux[i+1] && Aux.length != i)
      {
        i++;
      }
      else if(Aux[i] == Aux[i-1]){
        i++;
      }
      else
      {
        Aux3[pos] = Aux[i];
        pos++;
      }
    }
    var text = "";
    text = Aux3.toString();
    Arreglo3.innerHTML = text;
    Arreglo3.preventDefault();

  }
}
document.getElementById('BotonArreglo').addEventListener('click', Funcion5);

function EliminarFuncion5() {
  Arreglo3 = document.getElementById("Arreglo3");
  Arreglo3.innerHTML = "";
  Arreglo3.preventDefault();
  
}
document.getElementById('BotonEliminaArreglo').addEventListener('click', EliminarFuncion5);