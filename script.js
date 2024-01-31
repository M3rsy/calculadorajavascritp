
function calcular(operacion) {
    var num1 = document.getElementById('numero1').value;
    var num2 = document.getElementById('numero2').value;

    num1 = Number(num1);
    num2 = Number(num2);

    var resultado;
    switch(operacion) {
        case 'sumar':
            resultado = num1 + num2;
            break;
        case 'restar':
            resultado = num1 - num2;
            break;
        case 'multiplicar':
            resultado = num1 * num2;
            break;
        case 'dividir':
            resultado = num1 / num2;
            break;
        default:
            resultado = 'Operación no válida';
    }

    document.getElementById('resultado').textContent = resultado;
}
