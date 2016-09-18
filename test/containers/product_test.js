import expect from 'expect'
import React from 'react'
import {shallow} from 'enzyme'
import {Product} from '../../src/containers/product';

function setup(basket = [], product = []) {
    const props = {
        basket,
        product,
        selectProduct: expect.createSpy()
    };

    const enzymeWrapper = shallow(<Product {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('ProductList', () => {
    it('should render product with a unchecked input if product not in basket', () => {
        const {enzymeWrapper} = setup(
            [],
            {
                id: 9,
                title: 'bar'
            }
        );
        expect(enzymeWrapper.find('li').hasClass('product')).toBe(true);
        expect(enzymeWrapper.find('input').node.key).toEqual(9);
        expect(enzymeWrapper.find('input').node.props.checked).toBe(false);
        expect(enzymeWrapper.find('label').text()).toEqual('bar');
    });

    it('should render product with a checked input if product id in basket', () => {
        const {enzymeWrapper} = setup(
            [9],
            {
                id: 9,
                title: 'bar'
            }
        );
        expect(enzymeWrapper.find('li').hasClass('product')).toBe(true);
        expect(enzymeWrapper.find('input').node.key).toEqual(9);
        expect(enzymeWrapper.find('input').node.props.checked).toBe(true);
        expect(enzymeWrapper.find('label').text()).toEqual('bar');
    });

    it('should call selectProduct with the product and true if product in basket', () => {
        const {props, enzymeWrapper} = setup(
            [9],
            {
                id: 9,
                title: 'bar'
            });
        const button = enzymeWrapper.find('input');
        button.props().onChange({target: {checked: true}});
        expect(props.selectProduct.calls.length).toBe(1);
        expect(props.selectProduct.calls[0].arguments).toEqual([ true, { id: 9, title: 'bar' } ]);
    });

    it('should call selectProduct with the product and false if product not in basket', () => {
        const {props, enzymeWrapper} = setup(
            [11],
            {
                id: 9,
                title: 'bar'
            });
        const button = enzymeWrapper.find('input');
        button.props().onChange({target: {checked: false}});
        expect(props.selectProduct.calls.length).toBe(1);
        expect(props.selectProduct.calls[0].arguments).toEqual([ false, { id: 9, title: 'bar' } ]);
    });
});
