function validarNombre(nombre) {
    if (nombre.lenght === 0) {
        return "Este campo no debe quedar vacio.";
    } 
    else if (nombre.lenght >= 50) {
        return "Este campo debe tener menos caracteres.";
    } 
    else {
        return "";
    }
}

const formulario = document.querySelector("#carta-a-santa");
const nombre = formulario.nombre.value;
const ciudad = formulario.ciudad.value;
const comportamiento = formulario.comportamiento.value;
const descripcionRegalo = formulario['descripcion-regalo'].value;