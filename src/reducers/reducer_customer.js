import {setCookie, getCookie} from '../helpers/helper_cookies';
import _ from "lodash";

export default function (state) {
    if (!_.isEmpty(state)) {
        return state;
    }
    let customer = getCookie('customer', true);
    if (_.isEmpty(customer)) {
        let newCustomer = generateMockUser();
        setCookie('customer', newCustomer, 5, true);
        return newCustomer;
    }
    return customer;
};

/**
 * Simple mocking of a customers location depending on customer Id
 * @param customerId
 * @returns {*}
 */
function getGeoLocation(customerId) {
    if (customerId % 3 == 0) {
        return 'LONDON';
    } else if (customerId % 2 == 0) {
        return 'LIVERPOOL';
    } else {
        //would send a console log like bellow if this wasn't a mock
        // console.log('Could not get the customers GEO LOCATION');
        return '';
    }
}

/**
 * get a random customer if ID from 1 to 100
 * @returns {{id: number, location: string|null}}
 */
function generateMockUser() {
    let id = _.random(1, 100);
    return {
        id,
        location: getGeoLocation(id)
    }
}