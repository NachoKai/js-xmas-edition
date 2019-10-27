const formulario = document.querySelector("#carta-a-santa");
const nombre = formulario.nombre.value;
const ciudad = formulario.ciudad.value;
const comportamiento = formulario.comportamiento.value;
const descripcionRegalo = formulario['descripcion-regalo'].value;
const contieneSoloLetras = /^[A-z]+$/;
const contieneSoloLetrasONumeros = /^[A-z0-9]+$/;

function validarNombre(nombre) {
    if (nombre.length === 0) {
        return "Este campo no debe quedar vacio.";
    } else if (nombre.length >= 50) {
        return "Este campo debe tener menos caracteres.";
    } else if (!contieneSoloLetras.test(nombre)) {
        return "Este campo tiene caracteres inválidos.";
    } else {
        return "";
    }
}

function validarCiudad(ciudad) {
    if (ciudad.length === 0) {
        return "Este campo no debe quedar vacio.";
    } else {
        return "";
    }
}

function validarComportamiento(comportamiento) {
    if (comportamiento.length === 0) {
        return "Este campo no debe quedar vacio.";
    } else {
        return "";
    }
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length === 0) {
        return "Este campo no debe quedar vacio.";
    } else if (descripcionRegalo.length >= 100) {
        return "Este campo debe tener menos caracteres.";
    } else if (!contieneSoloLetrasONumeros.test(descripcionRegalo)) {
        return "Este campo tiene caracteres inválidos.";
    } else {
        return "";
    }
}