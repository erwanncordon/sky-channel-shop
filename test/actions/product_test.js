import expect from 'expect'
import * as actions from '../../src/actions/products'
import * as types from '../../src/constants'

describe('product actions', () => {
    it('should create an action to select a product passing true', () => {
        let product = {
            id: 'someID'
        };
        const expectedAction = {
            type: types.PRODUCT_SELECTED,
            checked: true,
            payload: product
        };
        expect(actions.selectProduct(true, product)).toEqual(expectedAction)
    });

    it('should create an action to select a product passing false', () => {
        let product = {
            id: 'someID'
        };
        const expectedAction = {
            type: types.PRODUCT_SELECTED,
            checked: false,
            payload: product
        };
        expect(actions.selectProduct(false, product)).toEqual(expectedAction)
    });
});