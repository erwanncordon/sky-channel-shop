import expect from 'expect'
import React from 'react'
import {shallow} from 'enzyme'
import {ConfirmCheckout} from '../../src/containers/confirm_checkout';

function setup(basket = [], products = []) {
    const props = {
        basket,
        products,
        confirmCheckout: expect.createSpy()
    };

    const enzymeWrapper = shallow(<ConfirmCheckout {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('ProductList', () => {
    it('should render with list of basket items', () => {
        const {enzymeWrapper} = setup(
            [1, 9],
            [
                {
                    id: 1,
                    title: 'foo'
                },
                {
                    id: 9,
                    title: 'bar'
                }
            ]
        );
        expect(enzymeWrapper.find('li').nodes[0].key).toEqual(1);
        expect(enzymeWrapper.find('li').nodes[0].props.children).toEqual('foo');
        expect(enzymeWrapper.find('li').nodes[1].key).toEqual(9);
        expect(enzymeWrapper.find('li').nodes[1].props.children).toEqual('bar');
    });

    it('should call checkout if checkout button is pressed', () => {
        const {props, enzymeWrapper} = setup(
            [2, 5],
            [
                {
                    id: 2,
                    title: 'bar'
                },
            ]
        );
        const button = enzymeWrapper.find('button');
        button.props().onClick('');
        expect(props.confirmCheckout.calls.length).toBe(1)
    });
});
