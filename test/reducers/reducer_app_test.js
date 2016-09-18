import expect from 'expect'
import reducer from '../../src/reducers/reducer_app'
import * as constant from '../../src/constants'

describe('app reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual(constant.CATALOG);
    });
    it('should return the Checkout', () => {
        expect(
            reducer(null, {type:constant.CHECKOUT})
        ).toEqual(constant.CHECKOUT);
    });
});