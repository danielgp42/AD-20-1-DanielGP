const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('divides 10 by 2 to equal 5', () => {
    expect(calculator.divide(10, 2)).toBe(5);
});

test('divides 7 by 2 to equal 3.5', () => {
    expect(calculator.divide(7, 2)).toBe(3.5);
});

test('multiplies 4 by 5 to equal 20', () => {
    expect(calculator.multiply(4, 5)).toBe(20);
});

test('multiplies -3 by 6 to equal -18', () => {
    expect(calculator.multiply(-3, 6)).toBe(-18);
});

test('multiplies 4 by 5 to equal 20', () => {
    expect(calculator.multiply(4, 5)).toBe(20);
});

test('multiplies -3 by 6 to equal -18', () => {
    expect(calculator.multiply(-3, 6)).toBe(-18);
});

test('divide by 0 should throw an error', () => {
    expect(() => calculator.divide(10, 0)).toThrow('No se puede dividir por cero.');
});
