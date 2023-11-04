// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


test("One euro should be 1.07 dollars", function () {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});

test("un dolar es 149,37 yens", function () {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromDollarToYen(149.37);

    // Si 1 dolar son 149.37 yenes, entonces 3.5 dolares debe ser (3.5 * 149.37)
    const expected = 2 * 149.37;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(2)).toBe(298.74); // si 1 dolar son 149.37 yenes 3.5 dolares debe ser (2 * 149.37)
});

test("un yen es 0.0054 libras esterlinas", function () {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const libras = fromYenToPound(0.0054);

    const expected = 1000 * 0.0054; //si un yen son 0.0054 libras 1000 yenes deben ser (1000 * 0.0054);

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(1000)).toBe(5.4);//si un yen son 0.0054 libras 1000 yenes deben ser (1000 * 0.0054);
})



