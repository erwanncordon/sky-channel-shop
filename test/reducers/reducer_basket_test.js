import expect from 'expect'
import reducer from '../../src/reducers/reducer_basket'
import * as constant from '../../src/constants'

describe('baskket reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer([], {})
        ).toEqual([]);
    });
    it('should return the new and previous product Id', () => {
        expect(
            reducer([44], {type: constant.PRODUCT_SELECTED, payload: {id: 55}, checked: true})
        ).toEqual([44, 55]);
    });

    it('should not return the passed product Id if checked is false', () => {
        expect(
            reducer([44, 55], {type: constant.PRODUCT_SELECTED, payload: {id: 55}, checked: false})
        ).toEqual([44]);
    });

    it('should return original state if nothing is removed', () => {
        expect(
            reducer([44, 55], {type: constant.PRODUCT_SELECTED, payload: {id: 33}, checked: false})
        ).toEqual([44, 55]);
    });

    it('should get the product ids from the cookie if no type is passed', () => {
        //initialise by adding 55 to the basket
        reducer([], {type: constant.PRODUCT_SELECTED, payload: {id: 55}, checked: true})
        expect(
            reducer([], {})
        ).toEqual([55]);
    });
});