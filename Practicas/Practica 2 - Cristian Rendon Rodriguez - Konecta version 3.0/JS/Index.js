const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
    //usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos
    //password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    celular: /^\d{7,14}$/, // 7 a 14 numeros.
    areaoperacion: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, //solo letras
    cargo: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, //solo letras
    identificacion:/^\d{7,14}$/ // 7 a 14 numeros.
}
const campos = {
    nombre: false,
    celular: false,
    areaoperacion: false,
    correo: false,
    identificacion: false,
    cargo: false,
    horario: false,
    lugar: true
}


const validarFormulario = (e) => {
    switch (e.target.name) {
        case "identificacion":
            validarCampo(expresiones.identificacion, e.target, 'identificacion');
            break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
        case "celular":
            validarCampo(expresiones.celular, e.target, 'celular');
            break;
        case "areaoperacion":
            validarCampo(expresiones.areaoperacion, e.target, 'areaoperacion');
            break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
            break;
        case "cargo":
            validarCampo(expresiones.cargo, e.target, 'cargo');
            break;
        case "horario":
            if (new Date() < Date.parse(document.getElementById("horario").value)) {
                document.getElementById(`grupo__horario`).classList.remove('formulario__grupo-incorrecto');
                document.getElementById(`grupo__horario`).classList.add('formulario__grupo-correcto');
                document.querySelector(`#grupo__horario i`).classList.remove('fa-times-circle');
                document.querySelector(`#grupo__horario i`).classList.add('fa-check-circle');
                document.querySelector(`#grupo__horario .formulario__input-error`).classList.remove('formulario__input-error-activo');
                campos["horario"] = true;
            } else {
                document.getElementById(`grupo__horario`).classList.add('formulario__grupo-incorrecto');
                document.getElementById(`grupo__horario`).classList.remove('formulario__grupo-correcto');
                document.querySelector(`#grupo__horario i`).classList.add('fa-times-circle');
                document.querySelector(`#grupo__horario i`).classList.remove('fa-check-circle');
                document.querySelector(`#grupo__horario .formulario__input-error`).classList.add('formulario__input-error-activo');
                campos["horario"] = false;
            }
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if (campos.nombre && campos.correo && campos.celular && campos.areaoperacion && campos.identificacion && campos.cargo && campos.horario && campos.lugar) {
        formulario.reset();
        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 5000);
        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });
    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
})

function Funcion1() {
    var form = document.getElementById("formulario");
    form.className = "formulario aparecer";
}

function BorrarFuncion1() {
    var form = document.getElementById("formulario");
    form.reset();
    form.className = "formulario desaparecer";
    formulario.reset();
    document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
    document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
        icono.classList.remove('formulario__grupo-correcto');
    });
    document.querySelectorAll('.formulario__grupo-incorrecto').forEach((icono) => {
        icono.classList.remove('formulario__grupo-incorrecto');
    });
}

function BorrarCalculadora() {
    BotonesCalculadora = document.getElementById("Botones-Calculadora");
    form2 = document.getElementById("form2");
    form2.innerHTML = '';
    BotonesCalculadora.innerHTML = '';
    BotonesCalculadora.preventDefault();
    form2.preventDefault();
}

function Funcion2() {

    BotonesCalculadora = document.getElementById("Botones-Calculadora");
    form2 = document.getElementById("form2");
    form2.innerHTML = ' ' +
        ' <div class="form-group">' +
        ' <label>' +
        '   <h3>CALCULADORA</h3>' +
        ' </label>' +
        ' <br>' +
        ' <div class="row">' +
        '   <div class="col-4">' +
        '     <label for="Identificacion">Valor A</label>' +
        '     <input type="number" class="form-control" id="Valor-A" placeholder="Ingresar Valor A">' +
        '   </div>' +
        '   <div class="col-4">' +
        '     <label for="Operador-label">Operador</label>' +
        '     <select class="form-control" name="Operador" placeholder="Operador"' +
        '        id="Operador">' +
        '       <option>Elija Operdor</option>' +
        '       <option value="+">Sumar (+)</option>' +
        '       <option value="-">Restar (-)</option>' +
        '       <option value="*">Multiplicar (*)</option>' +
        '       <option value="/">Dividir (/)</option>' +
        '     </select>' +
        '   </div>' +
        '   <div class="col-4">' +
        '       <label for="Valor-B">Valor B</label>' +
        '       <input type="number" class="form-control" id="Valor-B" placeholder="Ingresar Valor B">' +
        '   </div>' +
        ' </div>' +
        '</div>' +
        '<div  class="alert alert-primary" role="alert">' +
        ' <h4 id="Resultado"></h4>' +
        ' </div>';

    BotonesCalculadora.innerHTML =
        '<div class="margin"><button id="Ingresar-Formulario" type="submit" class="btn btn-primary" onclick="OperarFuncion2()">OPERAR</button></div>' +
        '<div class="margin"><button id="Limpiar-formulario" type="submit" class="btn btn-success"  onclick="LimpiarFuncion2()">LIMPIAR</button></div>' +
        '<div class="margin"><button id="Eliminar-formulario" type="submit" class="btn btn-danger"  onclick="BorrarCalculadora()">ELIMINAR</button><div>';

    BotonesCalculadora.preventDefault();
    form2.preventDefault();

}

function LimpiarFuncion2() {
    document.getElementById("Valor-A").value = "";
    document.getElementById("Valor-B").value = "";
    document.getElementById("Operador").value = "Elija Operdor";

    var Resultado = document.getElementById("Resultado");
    Resultado.innerHTML = "";
    Resultado.preventDefault();
}

function OperarFuncion2() {
    var text2 = "";
    var ValorA = document.getElementById("Valor-A").value;
    var ValorB = document.getElementById("Valor-B").value;
    var Operador = document.getElementById("Operador").value;

    if (Operador == "Elija Operdor" && Number.isInteger(parseInt(ValorA)) && Number.isInteger(parseInt(ValorB))) {
        text2 = "Primero Elija Un operador antes de operar";
    } else if (Operador == "Elija Operdor" && !Number.isInteger(parseInt(ValorA)) && Number.isInteger(parseInt(ValorB))) {
        text2 = "Elija un operador y llene el campo Valor A";
    } else if (Operador == "Elija Operdor" && Number.isInteger(parseInt(ValorA)) && !Number.isInteger(parseInt(ValorB))) {
        text2 = "Elija un operador y llene el campo Valor B";
    } else if (Operador != "Elija Operdor" && !Number.isInteger(parseInt(ValorA)) && !Number.isInteger(parseInt(ValorB))) {
        text2 = "Llene el campo Valor A y llene el campo Valor B";
    } else if (Operador != "Elija Operdor" && Number.isInteger(parseInt(ValorA)) && !Number.isInteger(parseInt(ValorB))) {
        text2 = "Llene el campo Valor B";
    } else if (Operador != "Elija Operdor" && !Number.isInteger(parseInt(ValorA)) && Number.isInteger(parseInt(ValorB))) {
        text2 = "Llene el campo Valor A";
    } else if (Operador == "Elija Operdor" && !Number.isInteger(parseInt(ValorA)) && !Number.isInteger(parseInt(ValorB))) {
        text2 = "Llene todos los campos";
    } else {
        if (Operador == "+") {
            text2 = "Respuesta = " + (parseInt(ValorA) + parseInt(ValorB));
        } else if (Operador == "-") {
            text2 = "Respuesta = " + (parseInt(ValorA) - parseInt(ValorB));
        }
        if (Operador == "*") {
            text2 = "Respuesta = " + (parseInt(ValorA) * parseInt(ValorB));
        }
        if (Operador == "/") {
            text2 = "Respuesta = " + (parseInt(ValorA) / parseInt(ValorB));
        }
    }
    var Resultado = document.getElementById("Resultado");
    Resultado.innerHTML = text2;
    Resultado.preventDefault();
}
