// Revilla Antonio
function round(value, decimals) {
  return Number(value.toFixed(decimals));
}

// Revilla Antonio
function toCelsius(f) {
  if (!Number.isFinite(f)) throw new TypeError("Numero invalido");
  return round((f - 32) * 5 / 9, 1);
}

// Revilla Antonio
function toFahrenheit(c) {
  if (!Number.isFinite(c)) throw new TypeError('Numero invalido');
  return round((c * 9 / 5) + 32, 1);
}

// Revilla Antonio
function movingAverage(series, window) {
  if (!Array.isArray(series)) throw new TypeError('Serie no es una lista');
  if (!Number.isInteger(window) || window < 2 || window > series.length)
    throw new RangeError('Ventana invalida');

  if (series.some(x => !Number.isFinite(x)))
    throw new TypeError('Valor no numerico');

  const result = [];

  for (let i = 0; i <= series.length - window; i++) {
    const slice = series.slice(i, i + window);
    const avg = slice.reduce((a, b) => a + b, 0) / window;
    result.push(Number(avg.toFixed(2)));
  }

  return result;
}

module.exports = { toCelsius, toFahrenheit, movingAverage};