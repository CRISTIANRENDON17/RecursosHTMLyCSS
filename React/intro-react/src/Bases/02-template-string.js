const nombre = 'Luz Andrea';
const apellido = 'Páez Martínez';

//const nombreCompleto = nombre + ' ' + apellido; //concatenar de forma básica
//utilizando javascript con el concepto template String, lo que se copia entre las `` sale exactamente en el navegador
const nombreCompleto1 = `${nombre} ${apellido}`;
const nombreCompleto2 = `
${nombre}
${apellido}
${1 + 1}
`;

console.log(nombreCompleto1);
console.log(nombreCompleto2);

function getSaludo1(){
    return 'Hola Mundo';
}

console.log(`
Este es un texto: ${getSaludo1()}`);

function getSaludo2(nombre){
    return 'Hola ' + nombre;
}

//envío el parámetro a la función
console.log(`
Este es un texto: ${getSaludo2(nombre)}`);