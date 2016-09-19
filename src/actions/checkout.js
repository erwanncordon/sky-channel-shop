import {CHECKOUT, CONFIRM_CHECKOUT} from '../constants';

export function checkout() {
    return {
        type: CHECKOUT
    };
}

export function confirmCheckout() {
    return {
        type: CONFIRM_CHECKOUT
    };
}