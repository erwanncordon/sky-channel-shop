import {getCookie} from '../helpers/helper_cookies';

export default function () {
    const customer = getCookie('customer', true);
    let products = [
        {id: 1, title: 'Arsenal TV', categoryId: 1, location: 'LONDON'},
        {id: 2, title: 'Chelsea TV', categoryId: 1, location: 'LONDON'},
        {id: 3, title: 'Liverpool TV', categoryId: 1, location: 'LIVERPOOL'},
        {id: 4, title: 'Sky News', categoryId: 2, location: null},
        {id: 5, title: 'Sky Sports News', categoryId: 2, location: null}
    ];
    return products.filter((product) => {
        return !product.location || (product.location == customer.location);
    });
};
