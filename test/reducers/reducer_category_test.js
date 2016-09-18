import expect from 'expect'
import reducer from '../../src/reducers/reducer_category'

describe('category reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer([], {})
        ).toEqual([
                {id: 1, title: 'Sports'},
                {id: 2, title: 'News'}
            ]
        );
    });
});