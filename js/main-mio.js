const formulario = document.querySelector("#carta-a-santa");
const nombre = formulario.nombre.value;
const ciudad = formulario.ciudad.value;
const comportamiento = formulario.comportamiento.value;
const descripcionRegalo = formulario['descripcion-regalo'].value;

function validarNombre(nombre) {
    if (nombre.length === 0) {
        return "Este campo no debe quedar vacio.";
    } else if (nombre.length >= 50) {
        return "Este campo debe tener menos caracteres.";
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
    } else if (descripcionRegalo.length >= 250) {
        return "Este campo debe tener menos caracteres.";
    } else {
        return "";
    }
}