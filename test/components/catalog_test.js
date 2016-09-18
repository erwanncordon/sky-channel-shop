import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import Catalog from '../../src/components/catalog';

function setup() {
    return shallow(<Catalog/>);
}

describe('Catalog', () => {
    it('should render self and subcomponents', () => {
        const enzymeWrapper = setup();
        expect(enzymeWrapper.find('Connect(CategoryList)').length).toEqual(1);
        expect(enzymeWrapper.find('Connect(Basket)').length).toEqual(1);
    })
})
