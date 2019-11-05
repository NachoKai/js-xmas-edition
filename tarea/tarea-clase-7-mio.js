/*
 * Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
 * Escribir pruebas para esas funciones.
 *
 * Adicional: Escribir pruebas para las funciones de tareas anteriores.
 *
 * */

function pruebaValidarNombre() {
    console.assert(validarNombre('') === 'El campo nombre no debe quedar vacio.',
        'Validar nombre no validó que el nombre sea mayor a 1 caracter.',
    );
    console.assert(validarNombre('12345678910111213141516171819202122232425262728293031323334353637383940') === 'El campo nombre debe tener menos caracteres.',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres.',
    );
    console.assert(validarNombre('/^[A-z ]+$/') === 'El campo nombre tiene caracteres inválidos.',
        'Validar nombre no validó que el nombre no tenga caracteres invalidos.',
    );
    console.assert(validarNombre('Nacho') === '',
        'Validar nombre falló con un nombre válido.'
    );
}

function pruebaValidarCiudad() {
    console.assert(validarCiudad('') === 'El campo ciudad no debe quedar vacio.',
        'Validar ciudad no validó que la ciudad sea mayor a 1 caracter.',
    );
    console.assert(validarCiudad('Buenos Aires') === '',
        'Validar ciudad falló con un nombre de ciudad válido.'
    );
}

function pruebaValidarComportamiento() {
    console.assert(validarComportamiento('') === 'El campo comportamiento no debe quedar vacio.',
        'Validar comportamiento no validó que la ciudad sea mayor a 1 caracter.',
    );
    console.assert(validarComportamiento('Bueno') === '',
        'Validar ciudad falló con un comportamiento válido.'
    );
}

function pruebaValidarDescripcionRegalo() {
    console.assert(validarDescripcionRegalo('') === 'El campo descripción no debe quedar vacio.',
        'Validar descripción regalo no validó que la descripción sea mayor a 1 caracter.',
    );
    console.assert(validarDescripcionRegalo('12345678910123456789101234567891012345678910123456789101234567891012345678910123456789101234567891012345678910') === 'El campo descripción debe tener menos caracteres.',
        'Validar descripción no validó que la descripción sea menor a 50 caracteres.',
    );
    console.assert(validarDescripcionRegalo('/^[0-9a-z !\?,\.-]+$/i') === 'El campo descripción tiene caracteres inválidos.',
    'Validar descripcion no validó que la descripcion no tenga caracteres invalidos.',
);
    console.assert(validarDescripcionRegalo('Lorem ipsum dolor sit amet consectetur adipisicing elit') === '',
        'Validar descripción falló con una descripción válida.'
    );
}

pruebaValidarNombre();
pruebaValidarCiudad();
pruebaValidarComportamiento();
pruebaValidarDescripcionRegalo();