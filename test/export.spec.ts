import _m0 = require('../');
import _m1 from '../';

test(`import check`, () =>
{

	let actual = Object.keys(_m0);
	let expected = Object.keys(_m1);

	expect(actual).toStrictEqual(expected);
	//expect(actual).toBeInstanceOf(Date);
	expect(actual).toMatchSnapshot();

});

test(`__esModule`, () =>
{

	expect(_m0).toHaveProperty('__esModule', true);
	expect(_m1).toHaveProperty('__esModule', true);

});
