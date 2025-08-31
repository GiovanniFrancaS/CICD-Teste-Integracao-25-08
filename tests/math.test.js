const math = require('../math'); 

test('soma 2 + 3 igual a 5', () => {  
    expect(math.add(2, 3)).toBe(5);  
});  

test('subtração 3 - 2 igual a 1', () => {  
    expect(math.subtract(3, 2)).toBe(1);  
}); 

test('multiplicação de 2 * 3 igual a 6', () => {  
    expect(math.multiply(2, 3)).toBe(6);  
}); 

test('divisão 6 / 3 igual a 2', () => {  
    expect(math.divide(6, 3)).toBe(2);  
}); 