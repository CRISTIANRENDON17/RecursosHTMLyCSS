

const empleados1=['Cristian','Kevin','Brian'];
console.log(empleados1[0]);
console.log(empleados1[1]);
console.log(empleados1[2]);

//coge el primer primer dato de empleado 2
const empleados2=['Cristian','Kevin','Brian'];
const [profesor1] = empleados2;
console.log(profesor1);


//coge el segundo dato del empleado 3
const empleados3=['Cristian','Kevin','Brian'];
const [,profesor2] = empleados3;
console.log(profesor2);


//coge el tercer dato del empleado 4
const empleados4=['Cristian','Kevin','Brian'];
const [,,profesor3] = empleados4;
console.log(profesor3);

const retornarArreglo1 = () =>
{
    return ['ABC',123];
}
const arr1 = retornarArreglo1();
console.log(arr1);


const retornarArreglo2 = () =>
{
    return ['ABC',123];
}
const [letras,numeros] = retornarArreglo2();
console.log(letras,numeros);

const usarEstado1 = (valor) =>{
    return[valor,() => {
        console.log('Hola mundo')
    }]; 
};

const arr2 = usarEstado1('Cristian');
console.log(arr2);
arr2[1](); //la forma de ejecutar la funcion anonima en la posicion 1