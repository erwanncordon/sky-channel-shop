import expect from 'expect'
import reducer from '../../src/reducers/reducer_product';
import {setCookie} from '../../src/helpers/helper_cookies';

describe('product reducer', () => {
    afterEach(function (done) {
        setCookie('customer', null);
        return done();
    });
    it('should return all products when customer has no location', () => {
        setCookie('customer', {id: 5, location: ''}, 1, true);
        expect(
            reducer([], {})
        ).toEqual(
            [
                {id: 4, title: 'Sky News', categoryId: 2, location: null},
                {id: 5, title: 'Sky Sports News', categoryId: 2, location: null}
            ]
        );
    });
    it('should return LIVERPOOL and Sky products when customer has LIVERPOOL', () => {
        setCookie('customer', {id: 5, location: 'LIVERPOOL'}, 1, true);
        expect(
            reducer([], {})
        ).toEqual(
            [
                {id: 3, title: 'Liverpool TV', categoryId: 1, location: 'LIVERPOOL'},
                {id: 4, title: 'Sky News', categoryId: 2, location: null},
                {id: 5, title: 'Sky Sports News', categoryId: 2, location: null}
            ]
        );
    });
    it('should return LONDON and Sky products when customer has LONDON', () => {
        setCookie('customer', {id: 5, location: 'LONDON'}, 1, true);
        expect(
            reducer([], {})
        ).toEqual(
            [
                {id: 1, title: 'Arsenal TV', categoryId: 1, location: 'LONDON'},
                {id: 2, title: 'Chelsea TV', categoryId: 1, location: 'LONDON'},
                {id: 4, title: 'Sky News', categoryId: 2, location: null},
                {id: 5, title: 'Sky Sports News', categoryId: 2, location: null}
            ]
        );
    });
});