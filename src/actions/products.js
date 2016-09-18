import {PRODUCT_SELECTED} from '../constants';

export function selectProduct(checked, product) {
    return {
        type: PRODUCT_SELECTED,
        checked: checked,
        payload: product
    };
}