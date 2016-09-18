import expect from 'expect'
import React from 'react'
import {shallow} from 'enzyme'
import {App} from '../../src/containers/app';
import * as constants from '../../src/constants';

function setup(appState = null) {
    const props = {
        appState
    };

    const enzymeWrapper = shallow(<App {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('ProductList', () => {
    it('should render unknown view when no appState provided', () => {
        const {props, enzymeWrapper} = setup();
        expect(props.appState).toEqual(null)
        expect(enzymeWrapper.find('div').nodes[2].props.children).toEqual('Unkown State');
    });

    it('should render Checkout if appstate is CHECKOUT', () => {
        const {props, enzymeWrapper} = setup(constants.CHECKOUT);
        expect(props.appState).toEqual(constants.CHECKOUT)
        expect(enzymeWrapper.find('Connect(ConfirmCheckout)').length).toEqual(1);
    });

    it('should render Catalog if appstate is Catalog', () => {
        const {props, enzymeWrapper} = setup(constants.CATALOG);
        expect(props.appState).toEqual(constants.CATALOG)
        expect(enzymeWrapper.find('Catalog').length).toEqual(1);
    });
});
