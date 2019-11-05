function validarNombre(nombre) {
    if (nombre === '') {
        return 'El campo nombre no debe quedar vacio.';
    } else if (nombre.length >= 50) {
        return 'El campo nombre debe tener menos caracteres.';
    } else if (!/^[A-z ]+$/i.test(nombre)) {
        return 'El campo nombre tiene caracteres inválidos.';
    } else {
        return '';
    }
}

function validarCiudad(ciudad) {
    if (ciudad === '') {
        return 'El campo ciudad no debe quedar vacio.';
    } else {
        return '';
    }
}

function validarComportamiento(comportamiento) {
    if (comportamiento === '') {
        return 'El campo comportamiento no debe quedar vacio.';
    } else {
        return '';
    }
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo === '') {
        return 'El campo descripción no debe quedar vacio.';
    } else if (descripcionRegalo.length >= 100) {
        return 'El campo descripción debe tener menos caracteres.';
    } else if (!/^[0-9a-z !\?,\.-]+$/i.test(descripcionRegalo)) {
        return 'El campo descripción tiene caracteres inválidos.';
    } else {
        return '';
    }
}