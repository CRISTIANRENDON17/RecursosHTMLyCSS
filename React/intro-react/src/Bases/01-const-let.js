//Variables y Constantes

//const, no cambia los valores iniciales
const nombre = 'Luz Andrea';
const apellido = 'Páez Martínez';

//let, para declarar variables
let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

if(true){
    //valorDado se crea local y se destruye cuando sale del if
    let valorDado = 6;
    console.log(valorDado);
}

//imprime la variable global
console.log(valorDado);