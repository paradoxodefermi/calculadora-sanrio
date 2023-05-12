function appendToDisplay(value) {
    var display = document.getElementById('display');
    if (value === 'pi') {
        display.value += '3.14';
    } else {
        display.value += value;
    }

}

function calculate() {
    var display = document.getElementById('display');
    var result = eval(display.value);
    display.value = result;
}

function clearDisplay() {
    var display = document.getElementById('display');
    display.value = '';
}

function calculateSquareRoot() {
    var display = document.getElementById('display');
    var number = parseFloat(display.value);
    var result = Math.sqrt(number);
    display.value = result;
}

function calculateLogarithm() {
    var display = document.getElementById('display');
    var number = parseFloat(display.value);
    var result = Math.log10(number);
    display.value = result;
}

function calculatePower() {
    var display = document.getElementById('display');
    var expression = display.value.split("^");
    var base = parseFloat(expression[0]);
    var exponent = parseFloat(expression[1]);
    var result = Math.pow(base, exponent);
    display.value = result;
}