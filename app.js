// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
// declaramos una funcion con el mismo nombre "fromDollarToYen"
const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a yen
    let valueInYen = valueInDollar * 1.2 * 127.9;
    // retornamos el valor
    return valueInYen;
}

// declaramos una funcion con el mismo nombre "fromYenToPound"
const fromYenToPound = function(valueInYen){
    // convertimos el valor a pound
    let valueInPound = ((valueInYen / 127.9) * 0.8);
    // retornamos el valor
    return valueInPound;
}

const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}

/* codigo de funcion
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
let fromDollarToYen = function(oneEuroIs) {
    return oneEuroIs * "JPY";
};
let fromEuroToDollar = function(oneEuroIs) {
    return oneEuroIs * "USD";
};
let fromYenToPound = function(oneEuroIs) {
    return oneEuroIs * "USD";
}; */

