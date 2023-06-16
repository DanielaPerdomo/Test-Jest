// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

// Segundo TEST
test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

// Tercer TEST
test("One dollar should be 153.48 yen", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(1)).toBe(153.48); //1 dollar es 1.2 euro, 1 euro son 127.9 yen, entonces 1 dolar deberian ser = (1 * 1.2 * 127.9)
})
// Cuarto TEST
test("A thousand yen should be 6.254886630179828 pound", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(1000)).toBe(6.254886630179828); //1000 yen es 7.81 euro, 1 euro es 0.8 pound, entonces 1000 yen deberian ser = ((1000 / 127.9) * 0.8)
})