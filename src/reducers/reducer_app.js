import {CHECKOUT, CATALOG} from '../constants';

export default function (state, action) {
    switch (action.type) {
        case CHECKOUT :
            return CHECKOUT;
    }
    return CATALOG;
};