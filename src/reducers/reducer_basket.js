import {PRODUCT_SELECTED, CONFIRM_CHECKOUT} from '../constants';
import {setCookie, getCookie} from '../helpers/helper_cookies';

export default function (state = [], action) {
    switch (action.type) {
        case PRODUCT_SELECTED:
            //remove the item you just clicked if it exists in the basket, stops duplicates.
            let basket = state.filter((item) => {
                return item != action.payload.id;
            });
            if (action.checked) {
                basket.push(action.payload.id);
            }
            setCookie('basket', basket, 5, true);
            return basket;
        case CONFIRM_CHECKOUT:
            setCookie([]);
            return [];
    }
    return getCookie('basket', true);
};