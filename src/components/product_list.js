import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProductItem from '../containers/product';

export default class ProductList extends Component {
    constructor(props) {
        super(props);
    }

    renderList() {
        return this.props.products.map((product) => {
            return (
                <ProductItem key={product.id} product={product}/>
            );
        });
    }

    render() {
        return (
            <ul className="products">
                {this.renderList()}
            </ul>
        );
    }
}