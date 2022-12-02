const Persona1 = {

};
//en la consola se imprime las propiedadesdel objeto
console.log(Persona1);

const Persona2 = {
    nombre: 'Cristian',
    apellido: 'Rendon Rodriguez',
    edad: 20
};
//se imprime los atributos del objeto
console.log(Persona2);
//se imprime como tabla
console.table(Persona2);

//Un objeto dentro de otro objeto
const Persona3 = {
    nombre: 'Cristian',
    apellido: 'Rendon Rodriguez',
    edad: 20,
    direccion:{
        ciudad: 'Medellin',
        departamento: 'Antioquia',
        pais: 'Colombia'
    }
};

console.log(Persona3);
console.table(Persona3);


//copiar un objeto y cambiar valores de los dos al mismo tiempo
const Persona4 = Persona3;
Persona4.nombre = 'Federico';
console.table(Persona3);
console.table(Persona4);

//copiar un objeto y cambiar valores sin alterar el objeto anterior
const Persona5 = {...Persona3};
Persona5.nombre = 'Salome';
console.table(Persona3);
console.table(Persona4);
console.table(Persona5);

