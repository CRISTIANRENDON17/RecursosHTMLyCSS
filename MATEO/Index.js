function Funcion1() {
    numeroaleatorio = document.getElementById("numeroaleatorio");
    edad = document.getElementById("edad")
    generar =  document.getElementById("generar")
    var numero = Math.random() * (2015 - 1990) + 1990;
    var numero2 = (2020 - numero);
    var table = '<table border="1"><tr><th> <h4 > imagen < /h4> </th> <th ><h4 > nombre < /h4> </th> <th ><h4 > nota: < /h4> </th> <th ><h4 > nota: < /h4> </th> <th > <h4 > nota: < /h4> </th> <th ><h4 > nota: < /h4> </th> <th ><h4 > nota: < /h4> </th> <th >h4 > nota: < /h4> < /th> <th > <h4 > nota: < /h4> </th> <th ><h4 > Promedio: < /h4> </th> </tr> </table>';
    generar.innerHTML = table;
    numeroaleatorio.innerHTML = numero.toFixed(0);
    edad.innerHTML = numero2.toFixed(0);
    numeroaleatorio.preventDefault();
    edad.preventDefault();
    generar.preventDefault();
   


}
document.getElementById('botonnumeroaleatorio').addEventListener('click', Funcion1);

/*
function EliminarFuncion1() {
  Mayor = document.getElementById("Mayor");
  Mayor.innerHTML = "";
  Mayor.preventDefault();
}
document.getElementById('BotonEliminarMayor').addEventListener('click', EliminarFuncion1);
*/