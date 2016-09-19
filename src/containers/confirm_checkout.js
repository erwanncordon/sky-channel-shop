import React, {Component} from 'react';
import {connect} from 'react-redux';
import {confirmCheckout} from '../actions/checkout';
import {bindActionCreators} from 'redux';
import _ from 'lodash';

export class ConfirmCheckout extends Component {
    constructor(props) {
        super(props);
    }

    renderList() {
        return this.props.basket.map((basketProductId) => {
            let product = this.props.products.find((item) => {
                return item.id == basketProductId;
            });
            if (_.isEmpty(product)) {
                return;
            }
            return (
                <li key={product.id}>
                    {product.title}
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <h1>Basket Checkout</h1>
                <div
                    className="confirm-checkout">
                    <ul className="confirm-products">
                        {this.renderList()}
                    </ul>
                    <form onSubmit={(event) => event.preventDefault()}>
                    <span className="">
                            <button onClick={() => {
                                this.props.confirmCheckout()
                            }} type="button" className="btn btn-secondary">
                                Accept and reset
                            </button>
                        </span>
                    </form>
                </div>
            </div>
        )
            ;
    }
}

function mapStateToProps({basket, products}) {
    return {basket, products};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({confirmCheckout: confirmCheckout}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmCheckout);