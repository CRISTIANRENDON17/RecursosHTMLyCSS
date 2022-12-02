function saludar1(nombre) {
    return `Hola, ${nombre}`;
};

console.log(saludar1('Cristian Rendon'));
//console.log(saludar1(30));


//saludar=30;//genera un error ya que el numero 30 no corresponde
//a strig sino numerico

const saludar2 = function (nombre) {
    return `Hola, ${nombre}`;
};
console.log(saludar2('Cristian Rendon'));

//funcion y flecha
const saludar3 = (nombre) => {
    return `Hola, ${nombre}`;
};
console.log(saludar3('Cristian Rendon'));

//funcion flecha resumida
const saludar4 = (nombre) => `Hola, ${nombre}`;
console.log(saludar4('Cristian Rendon'));

//funcion flecha resumida sin parametro
const saludar5 = () => `Hola mundo`;
console.log(saludar5());

const getUser1 = () => {
    return {
        id: 'ABC123',
        username: 'Cristian Rendon'
    }
};
console.log(getUser1());
console.table(getUser1());

//funcion flecha aun mas resumida
const getUser2 = () =>
    ({
        id: 'ABC123',
        username: 'Cristian Rendon'
    });
console.log(getUser2());
console.table(getUser2());

//funcion anonima
const usuario = function(nombre){
    return{
        id:'ABC123',
        nombre: nombre
    }
};
console.log(usuario('cristian'));

//funcion anonima con flecha
const usuario2 = (nombre) =>{
    return{
        id:'ABC123',
        nombre: nombre
    }
};
console.log(usuario2('cristian'));

//funcion anonima con flecha
const usuario3 = (nombre) =>
    ({
        id:'ABC123',
        nombre: nombre
    });
console.log(usuario3('cristian'));

const persona ={
    nombre: 'Cristian rendon',
    edad: 20,
    clave: 'CRR2016'
}
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

const {nombre,edad,clave} = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

const retornaPersona1 = (usuario) =>{
    console.log(usuario);
};
retornaPersona1(persona);

const retornaPersona2 = (usuario) =>{
    const {nombre,edad,clave} = usuario;
    console.log(nombre,edad,clave);
};
retornaPersona1(persona);


const retornaPersona3 = ({nombre,edad}) =>
{
    console.log(nombre,edad);
}
retornaPersona3(persona);

const retornaPersona4 = ({nombre,edad,rango = 'alumno' }) =>
{
    console.log(nombre,edad,rango);
}
retornaPersona4(persona);

const retornaPersona5 = ({clave,nombre,edad,rango = 'alumno' }) =>
{
    return{
        nombreClave: clave,
        anios: edad
    }
}
const empleado1 = retornaPersona5(persona);
console.log(empleado1);

const retornaPersona6 = ({clave,nombre,edad,rango = 'alumno' }) =>
{
    return{
        nombreClave: clave,
        anios: edad,
        asignatura:{
            codigo: 1,
            nombreAsig: 'Taller 2'
        }
    }
}
const {nombreClave, anios, asignatura: {codigo,nombreAsig}} = retornaPersona6(persona);
console.log(nombreClave,anios);
console.log(codigo,nombreAsig);

//--------------------------------------------------------------------------------------
