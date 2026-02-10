// Revilla Antonio
const { toCelsius, toFahrenheit, movingAverage } = require('../src/utils/conversions');

test('32F -> 0C', () => {
  expect(toCelsius(32)).toBe(0.0);
});

test('0C -> 32F', () => {
  expect(toFahrenheit(0)).toBe(32.0);
});

test('100C -> 212F', () => {
  expect(toFahrenheit(100)).toBe(212.0);
});

test('-40 conversion', () => {
  expect(toCelsius(-40)).toBe(-40.0);
  expect(toFahrenheit(-40)).toBe(-40.0);
});

test('movimiento promedio simple', () => {
  expect(movingAverage([10,20,30,40], 2))
    .toEqual([15.00,25.00,35.00]);
});

// Revilla Antonio
test('movimiento promedio de ventana mayor a la serie', () => {
  expect(movingAverage([1,2,3], 3))
    .toEqual([2.00]);
});

test('valor no numerico', () => {
  expect(() => movingAverage([1,2,3,'x'], 3)).toThrow(TypeError);
});

test('numero invalido', () => {
  expect(() => toCelsius('x')).toThrow(TypeError);
});

test('ventana invalida', () => {
  expect(() => movingAverage([1,2], 5)).toThrow(RangeError);
});
