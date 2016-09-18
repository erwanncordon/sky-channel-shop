import expect from 'expect'
import * as actions from '../../src/actions/checkout'
import * as constant from '../../src/constants'

describe('checkout actions', () => {
    it('should create an action to confirm checkout', () => {
        const expectedAction = {
            type: constant.CONFIRM_CHECKOUT
        };
        expect(actions.confirmCheckout()).toEqual(expectedAction)
    });

    it('should create an action to checkout', () => {
        const expectedAction = {
            type: constant.CHECKOUT
        };
        expect(actions.checkout()).toEqual(expectedAction)
    });
});