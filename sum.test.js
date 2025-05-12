
const sum = require('./sum');
const multi = require('./multi');


test('Soma 1 + 2 igual a 3', () => {

   expect(sum(1,2)).toBe(3);
});

describe("teste matematicos das funçóes ", () => {

	test(' soma de 2 + 2 deve ser 4 ', () => {
		expect(sum(2,2)).toBe(4);
	});

	test('multiplica 1 parametro zero', () => {
		expect(multi.multi(0,3)).toBe(0);
	});
	
	test('divid segundo parametro zero retorna -1', () => {
		expect(multi.divid(3,0)).toBe(-1);
	});

}); 
