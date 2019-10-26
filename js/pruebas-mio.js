function pruebaValidarNombre() {
    console.assert(validarNombre("") === "Este campo no debe quedar vacio.",
        "Validar nombre no validó que el nombre sea mayor a 1 caracter.",
    );
    console.assert(validarNombre("12345678910111213141516171819202122232425262728293031323334353637383940") === "Este campo debe tener menos caracteres.",
    "Validar nombre no validó que el nombre sea menor a 50 caracteres.",
    );
}

pruebaValidarNombre();