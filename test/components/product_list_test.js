import expect from 'expect'
import React from 'react'
import {shallow} from 'enzyme'
import ProductList from '../../src/components/product_list';

function setup() {
    const props = {
        products: [{
            id: 5,
            title: 'product1'
        }, {
            id: 15,
            title: 'product2'
        }]
    };

    const enzymeWrapper = shallow(<ProductList {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('ProductList', () => {
    it('should render self and subcomponents', () => {
        const {props, enzymeWrapper} = setup();
        expect(enzymeWrapper.find('ul').length).toEqual(1);
        expect(enzymeWrapper.find('ul').hasClass('products')).toBe(true);

        const productsElement = enzymeWrapper.find('Connect(Product)');

        expect(productsElement.length).toEqual(2);
        expect(productsElement.nodes[0].key).toEqual(5);
        expect(productsElement.nodes[0].props).toEqual({product: props.products[0]});

        expect(productsElement.nodes[1].key).toEqual(15);
        expect(productsElement.nodes[1].props).toEqual({product: props.products[1]});
    });
});
