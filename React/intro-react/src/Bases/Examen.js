//-----------------------------------------------------//
/*
Crear un arreglo de 5 posiciones, almacenarle números, luego recorrer el
arreglo y multiplicar cada valor por un número aparte que llegue como
parámetro a la función. Imprimir el arreglo final por consola.
*/
const Arreglo1 = new Array(0);
Arreglo1.push(1);
Arreglo1.push(2);
Arreglo1.push(3);
Arreglo1.push(4);
Arreglo1.push(5);
//Arreglo de 5 posiciones  con 5  valores
console.log(Arreglo1); //se muestra el arreglo normal

//arreglo finalpor consola
console.log(
    Arreglo1.map(function (numero) {
        return numero * 5;
    })
);

//----------------------------------------------------//
/*
Crear dos arreglos, uno con números pares y otro con impares, crear un tercer
arreglo que contenga todos los números de los dos arreglos. Imprimir el
arreglo final por consola.
*/


const Arreglo2 = [2, 4, 6, 8, 10, 12, 14];
const Arreglo3 = [1, 3, 5, 7, 9];
console.log(Arreglo2); //se muestra el arreglo normal con pares
console.log(Arreglo3); //se muestra el arreglo normal con inpares
//arreglo finalpor consola


var bandera;

if (Arreglo2.length <= Arreglo3.length) {
    bandera = true;
} else {
    bandera = false;
}
var Arreglo4;
if (bandera == true) {
    Arreglo4 = [...Arreglo3];
    for (let i = 0; i < Arreglo2.length; i++) {
        Arreglo4[i] += Arreglo2[i];
    }
} else {

    Arreglo4 = [...Arreglo2];
    for (let i = 0; i < Arreglo3.length; i++) {
        Arreglo4[i] += Arreglo3[i];
    }
}

console.log(Arreglo4);



/*---------------------------------------------------------------------*/

/*
Crear un objeto con los atributos: carné, nombre, apellido, dentro de este crear
un subobjeto del atributo asignatura con los atributos: código, nombre, horario
y otro subobjeto de notas, con los atributos: nota1, nota2 y nota3. Imprimir por
consola en formato tabla el nombre, código de la asignatura y las tres notas.
*/

//Un objeto dentro de otro objeto
const Persona3 = {
    carne: 'Nose que escribir',
    nombre: 'Cristian',
    apellido: 'Rendon Rodriguez',
    asignatura:{
        codigo: '1001',
        nombre: 'cristian',
        horario: '10 AM'
    },
    notas:
    {
        nota1: '5.0',
        nota2: '3.9',
        nota3: '4.5'
    }
};

console.table(Persona3);
