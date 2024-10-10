const display = document.getElementById('display');
//Añade al display el valor ingresado por el boton correspondiente
function appendToDisplay(value) {
    display.value += value;
}
//Limpia el display poniendo su valos como " " (nada)
function clearDisplay() {
    display.value = '';
}
//Elimina el ultimo valor ingresado en el display
function deleteLast() {
    let displayCopyValue = display.value;
    display.value = displayCopyValue.slice(0, -1);
}
//Calcula el resultado de la operación ingresada
function calculateResult() {
    try {
        let result = eval(display.value);
        display.value = result;
    } catch (error) {
        alert('Expresión Invalida')
    }
}
