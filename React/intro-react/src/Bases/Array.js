const Arreglo1 = new Array (100); //crear arreglo
Arreglo1.push(1); //ampliando el tamaño del arreglo
//Arreglo1[0] = 'Cristian';
console.log(Arreglo1);

const Arreglo2 = [];
//no se recomienda utilizar el push el arreglo principal
Arreglo2.push(1);
Arreglo2.push(2);
Arreglo2.push(3);
Arreglo2.push(4);
Arreglo2.push(5);

console.log(Arreglo2);

//todo lo que se modifique en el arreglo 4 e ve reflejado en el 3
const Arreglo3 = [1,2,3,4]; 
let Arreglo4 = Arreglo3;
Arreglo4.push(5);
console.log(Arreglo3);
console.log(Arreglo4);


let Arreglo5 = [Arreglo3,6]; //incluir un array en otro arry y agregar una nueva variable
console.log(Arreglo3);
console.log(Arreglo5);

let Arreglo6 = [...Arreglo3,6]; //hacer de un array igual a el y agregarle una nueva posicion
console.log(Arreglo3);
console.log(Arreglo6);

//mostrar arreglo 7 con los datos del array 3 multiplicado por 2
const Arreglo7 = Arreglo3.map(function(numero)
{
    return numero * 2;
});
console.log(Arreglo7);