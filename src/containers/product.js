import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectProduct} from '../actions/products';
import {bindActionCreators} from 'redux';

export class Product extends Component {
    constructor(props) {
        super(props);
        this.isInBasket = this.isInBasket.bind(this);
    }

    isInBasket(product) {
        //return bool rather than undefined
        return !!this.props.basket.find(function (basketProductId) {
            return basketProductId == product.id;
        });
    }

    render() {
        let product = this.props.product;
        return (
            <li className="product checkbox">
                <label>
                    <input
                        type="checkbox"
                        key={product.id}
                        className="product"
                        onChange={(event) => this.props.selectProduct(event.target.checked, product)}
                        checked={this.isInBasket(product)}
                    />{product.title}
                </label>
            </li>
        );
    }
}

function mapStateToProps({basket}) {
    return {basket};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectProduct: selectProduct}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);