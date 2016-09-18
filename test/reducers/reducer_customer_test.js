import expect from 'expect'
import reducer from '../../src/reducers/reducer_customer'
import {setCookie} from '../../src/helpers/helper_cookies';

describe('customer reducer', () => {
    afterEach(function(done) {
        setCookie('customer', null);
        return done();
    });

    it('should return a new customer on first call', () => {
        let customer = reducer();
        expect(
            customer.id
        ).toBeA('number');
        expect(
            customer.location
        ).toBeA('string');
    });
    it('should return the same customer on second call using cookies', () => {
        let customer = reducer();
        expect(
            reducer()
        ).toEqual(customer);
    });
});