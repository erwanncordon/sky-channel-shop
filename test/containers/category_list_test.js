import expect from 'expect'
import React from 'react'
import {shallow} from 'enzyme'
import {CategoryList} from '../../src/containers/category_list';

function setup(categories = [], products = []) {
    const props = {
        categories,
        products
    };

    const enzymeWrapper = shallow(<CategoryList {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('ProductList', () => {
    it('should render all categories with products in them', () => {
        const {props, enzymeWrapper} = setup(
            [
                {
                    id: 1,
                    title: 'My first Category'
                },
                {
                    id: 2,
                    title: 'My last Category'
                }
            ],
            [
                {
                    id: 4,
                    title: 'some product 1',
                    categoryId: 2
                },
                {
                    id: 5,
                    title: 'some product 2',
                    categoryId: 1
                },
                {
                    id: 235,
                    title: 'some product 3',
                    categoryId: 1
                }
            ]);
        expect(enzymeWrapper.find('div.main-section-box').length).toEqual(2);
        expect(enzymeWrapper.find('div.main-section-box').nodes[0].key).toEqual(1);
        expect(enzymeWrapper.find('div.main-section-box').nodes[1].key).toEqual(2);
        expect(enzymeWrapper.find('ProductList').length).toEqual(2);
        expect(enzymeWrapper.find('ProductList').nodes[0].props.products).toEqual([props.products[1], props.products[2]]);
        expect(enzymeWrapper.find('ProductList').nodes[1].props.products).toEqual([props.products[0]]);
    });

    it('should not render categories with no products in them', () => {
        const {enzymeWrapper} = setup(
            [
                {
                    id: 1,
                    title: 'My first Category'
                },
                {
                    id: 2,
                    title: 'My last Category'
                }
            ],
            [
                {
                    id: 4,
                    title: 'some product 1',
                    categoryId: 2
                }
            ]);
        //one category
        expect(enzymeWrapper.find('div.main-section-box').length).toEqual(1);
        expect(enzymeWrapper.find('div.main-section-box').nodes[0].key).toEqual(2);
    });
});
