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
    } else if (!/^[0-9a-z ¡¿!\?,\.-]+$/i.test(descripcionRegalo)) {
        return 'El campo descripción tiene caracteres inválidos.';
    } else {
        return '';
    }
}

function validarFormulario(event) {
    const $form = document.querySelector('#carta-a-santa');
    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form['descripcion-regalo'].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo
    }

    const esExito = (manejarErrores(errores) === 0)

    if (esExito) {
        $form.className = 'oculto'
        document.querySelector('#exito').className = '';
    }

    event.preventDefault();
}

function manejarErrores(errores) {
    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');
    let cantidadErrores = 0;

    keys.forEach(function (key) {
        const error = errores[key];

        if (error) {
            cantidadErrores++;
            $form[key].className = 'error'
            const $error = document.createElement('li');
            $error.innerText = error;
            $errores.appendChild($error)
        }
    });
    return cantidadErrores;
}

const $form = document.querySelector('#carta-a-santa')
$form.onsubmit = validarFormulario