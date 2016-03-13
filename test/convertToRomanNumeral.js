var should = require('should');

function convertToRomanNumeral(arabic) {

	var rules = [
		{ limit: 1000, roman: 'M' },
		{ limit: 900, roman: 'CM' },
		{ limit: 500, roman: 'D' },
		{ limit: 400, roman: 'CD' },
		{ limit: 100, roman: 'C' },
		{ limit: 90, roman: 'XC' },
		{ limit: 50, roman: 'L' },
		{ limit: 40, roman: 'XL' },
		{ limit: 10, roman: 'X' },
		{ limit: 9, roman: 'IX' },
		{ limit: 5, roman: 'V' },
		{ limit: 4, roman: 'IV' },
		{ limit: 9, roman: 'IX' },
		{ limit: 1, roman: 'I' },
	]

	for (var i = 0; i < rules.length; i++) {
		if (arabic >= rules[i].limit) {
			return rules[i].roman + convertToRomanNumeral(arabic - rules[i].limit);
		}	
	}

	return '';
}

describe('roman numerals converter should convert:', function() {
	it('0 to nothing', function() {
		convertToRomanNumeral(0).should.be.exactly('');
	});

	it('1 to I', function() {
		convertToRomanNumeral(1).should.be.exactly('I');
	});

	it('2 to II', function() {
		convertToRomanNumeral(2).should.be.exactly('II');
	});

	it('3 to III', function() {
		convertToRomanNumeral(3).should.be.exactly('III');
	});

	it('4 to IV', function() {
		convertToRomanNumeral(4).should.be.exactly('IV');
	});

	it('5 to V', function() {
		convertToRomanNumeral(5).should.be.exactly('V');
	});

	it('6 to VI', function() {
		convertToRomanNumeral(6).should.be.exactly('VI');
	});

	it('7 to VII', function() {
		convertToRomanNumeral(7).should.be.exactly('VII');
	});

	it('8 to VIII', function() {
		convertToRomanNumeral(8).should.be.exactly('VIII');
	});

	it('9 to IX', function() {
		convertToRomanNumeral(9).should.be.exactly('IX');
	});

	it('10 to X', function() {
		convertToRomanNumeral(10).should.be.exactly('X');
	});

	it('11 to XI', function() {
		convertToRomanNumeral(11).should.be.exactly('XI');
	});

	it('12 to XII', function() {
		convertToRomanNumeral(12).should.be.exactly('XII');
	});

	it('27 to XXVII', function() {
		convertToRomanNumeral(27).should.be.exactly('XXVII');
	});

	it('39 to XXXIX', function() {
		convertToRomanNumeral(39).should.be.exactly('XXXIX');
	});

	it('40 to XL', function() {
		convertToRomanNumeral(40).should.be.exactly('XL');
	});

	it('41 to XLI', function() {
		convertToRomanNumeral(41).should.be.exactly('XLI');
	});

	it('50 to L', function() {
		convertToRomanNumeral(50).should.be.exactly('L');
	});

	it('68 to LXVIII', function() {
		convertToRomanNumeral(68).should.be.exactly('LXVIII');
	});

	it('90 to XC', function() {
		convertToRomanNumeral(90).should.be.exactly('XC');
	});

	it('100 to C', function() {
		convertToRomanNumeral(100).should.be.exactly('C');
	});

	it('400 to CD', function() {
		convertToRomanNumeral(400).should.be.exactly('CD');
	});

	it('500 to D', function() {
		convertToRomanNumeral(500).should.be.exactly('D');
	});

	it('900 to CM', function() {
		convertToRomanNumeral(900).should.be.exactly('CM');
	});

	it('1000 to M', function() {
		convertToRomanNumeral(1000).should.be.exactly('M');
	});
});