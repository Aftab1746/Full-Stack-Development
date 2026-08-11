function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function isFreezing(celsius) {
    return celsius <= 0;
}   
 function isBoiling(celsius) {   
    return celsius >= 100;
}

module.exports = {
    celsiusToFahrenheit,
    fahrenheitToCelsius,
    isFreezing,
    isBoiling
};