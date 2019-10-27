function pruebaValidarNombre() {
    console.assert(validarNombre("") === "Este campo no debe quedar vacio.",
        "Validar nombre no validó que el nombre sea mayor a 1 caracter.",
    );
    console.assert(validarNombre("12345678910111213141516171819202122232425262728293031323334353637383940") === "Este campo debe tener menos caracteres.",
        "Validar nombre no validó que el nombre sea menor a 50 caracteres.",
    );
    console.assert(validarNombre("/^[A-z]+$/") === "Este campo tiene caracteres inválidos.",
        "Validar nombre no validó que el nombre no tenga caracteres invalidos.",
    );
}

function pruebaValidarCiudad() {
    console.assert(validarCiudad("") === "Este campo no debe quedar vacio.",
        "Validar ciudad no validó que la ciudad sea mayor a 1 caracter.",
    );
}

function pruebaValidarComportamiento() {
    console.assert(validarComportamiento("") === "Este campo no debe quedar vacio.",
        "Validar comportamiento no validó que la ciudad sea mayor a 1 caracter.",
    );
}

function pruebaValidarDescripcionRegalo() {
    console.assert(validarDescripcionRegalo("") === "Este campo no debe quedar vacio.",
        "Validar descripcion regalo no validó que la descripcion sea mayor a 1 caracter.",
    );
    console.assert(validarDescripcionRegalo("123456789101112131415161718192021222324252627282930313233343536373839401234567891011121314151617181920212223242526272829303132333435363738394012345678910111213141516171819202122232425262728293031323334353637383940122232425262728293031323334353637383940") === "Este campo debe tener menos caracteres.",
        "Validar descripcion no validó que la descripcion sea menor a 50 caracteres.",
    );
    console.assert(validarNombre("/^[A-z0-9]+$/") === "Este campo tiene caracteres inválidos.",
        "Validar descripcion no validó que la descripcion no tenga caracteres invalidos.",
    );
}

pruebaValidarNombre();
pruebaValidarCiudad();
pruebaValidarComportamiento();
pruebaValidarDescripcionRegalo();