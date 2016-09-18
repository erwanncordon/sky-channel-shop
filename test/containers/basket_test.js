import expect from 'expect'
import React from 'react'
import {shallow} from 'enzyme'
import {Basket} from '../../src/containers/basket';

function setup(basket = [], products = []) {
    const props = {
        basket,
        products,
        selectProduct: expect.createSpy(),
        checkout: expect.createSpy()
    };

    const enzymeWrapper = shallow(<Basket {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('ProductList', () => {
    it('should render with disabled checkout button when basket is empty', () => {
        const {enzymeWrapper} = setup();
        expect(enzymeWrapper.find('button').hasClass('basket-checkout')).toBe(true);
        expect(enzymeWrapper.find('button').node.props.disabled).toBe(true);
    });

    it('should render with enabled checkout button and list of basket items', () => {
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
        expect(enzymeWrapper.find('button').hasClass('basket-checkout')).toBe(true);
        expect(enzymeWrapper.find('button').node.props.disabled).toBe(false);
        expect(enzymeWrapper.find('form div').nodes[0].key).toEqual(1);
        expect(enzymeWrapper.find('form div').nodes[0].props.children).toEqual('foo');
        expect(enzymeWrapper.find('form div').nodes[1].key).toEqual(9);
        expect(enzymeWrapper.find('form div').nodes[1].props.children).toEqual('bar');
    });

    it('should call selectProduct and try to remove it from the basket if it doesn\'t exist in the products list, and only render the existing product', () => {
        const {props, enzymeWrapper} = setup(
            [2, 5],
            [
                {
                    id: 2,
                    title: 'bar'
                },
            ]
        );
        expect(enzymeWrapper.find('button').hasClass('basket-checkout')).toBe(true);
        expect(enzymeWrapper.find('button').node.props.disabled).toBe(false);
        expect(enzymeWrapper.find('form div').length).toEqual(1);
        expect(enzymeWrapper.find('form div').nodes[0].key).toEqual(2);
        expect(enzymeWrapper.find('form div').nodes[0].props.children).toEqual('bar');
        expect(props.selectProduct.calls.length).toBe(1)
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
        button.props().onClick('')
        expect(props.selectProduct.calls.length).toBe(1)
    });

    it('should call not checkout if checkout button is pressed and there are no items in basket', () => {
        let alertMessage = '';
        global.alert = function(msg) {
            alertMessage = msg;
        };
        const {props, enzymeWrapper} = setup();
        const button = enzymeWrapper.find('button');
        button.props().onClick('')
        expect(props.selectProduct.calls.length).toBe(0)
        expect(alertMessage).toEqual('basked it empty');
    });
});
