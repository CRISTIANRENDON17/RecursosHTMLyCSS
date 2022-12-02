/*var nombre = "landreapaez"; //variable global
//console.log(nombre); //imprime en la consola

function modificar() {
  var nombre = "Luz"; //variable local
}

modificar();
console.log(nombre);*/

/*(function () {})(//sintaxis de una función anónima
   function () {}
 )();*/ //sintaxis para que se ejecute la función anónima

/*(function () {
  var nombre = "landreapaez"; //variable global
  console.log(nombre); //imprime en la consola

  function modificar() {
    nombre = "Luz";
  }
  
  modificar();
  console.log(nombre);
  
})();*/

/*
Ejercicio
Crear un arreglo de números global.
Crear una función global que imprima solamente los números que se encuentran en las posiciones pares, es decir, los valores se van a mostrar en la consola libremente.
Crear una función anónima que imprima solamente los números que se encuentran en las posiciones impares.
*/
(function () {
   var numbers = [1, 2, 3, 4, 5];
   document.write(numbers);
 })();
console.log(numbers);

var numbers = [1, 2, 3, 4, 5];
document.write("<p>",numbers);
var text1 = "";

function printGlobal1() {
  for (var i in numbers) {
    if (i % 2 == 0) {
      text1 += numbers[i] + " - ";
    }
  }
  console.log(text1);
}

printGlobal1();

(function () {
  function printGlobal2() {
    var numbers2 = [8, 12, 13, 14, 15];
    var text2 = "";
    for (var i = 0; i < numbers2.length; i = i + 2) {
      text2 += numbers2[i] + " - ";
    }
    console.log(text2);
  }
  printGlobal2();
})();

//------------------------------------------------------
function retornar(otraFuncion) {
  console.log(otraFuncion());
  if (otraFuncion() == 1) {
    return true;
  } 
  else {
    return false;
  }
}

console.log(
  retornar(
    function(){
      console.log("Se imprime texto");
      return 0;
    }
  )
);
