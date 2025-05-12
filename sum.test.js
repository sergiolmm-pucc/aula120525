
const sum = require('./sum');

test('Soma 1 + 2 igual a 3', () => {

   expect(sum(1,2)).toBe(3);
});

describe("teste 2 ", () => {

	test(' soma de 2 + 2 deve ser 4 ', () => {
		expect(sum(2,2)).toBe(4);
	});

}); 
