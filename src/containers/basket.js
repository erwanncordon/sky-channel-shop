import React, {Component} from 'react';
import {connect} from 'react-redux';
import {checkout} from '../actions/checkout';
import {selectProduct} from '../actions/products';
import {bindActionCreators} from 'redux';
import _ from "lodash";

export class Basket extends Component {
    constructor(props) {
        super(props);
        this.props.basket.forEach((basketProductId) => {
            let product = this.props.products.find((item) => {
                return item.id == basketProductId;
            });
            if (!product) {
                //remove the product from the basket
                this.props.selectProduct(false, {id: basketProductId});
            }
        });
    }
    checkout() {
        //stops people from editing html and un-disabling buttons
        if (_.isEmpty(this.props.basket)) {
            alert('basked it empty');
        } else {
            this.props.checkout();
        }
    }

    renderList() {
        return this.props.basket.map((basketProductId) => {
            let product = this.props.products.find((item) => {
                return item.id == basketProductId;
            });
            //don't render products that don't exist.
            if (!product) {
                return;
            }
            return (
                <div className="basket-item"
                    key={product.id}>
                    {product.title}
                </div>
            );
        });
    }

    render() {
        return (
            <div className="main-section-box col-sm-4">
                <div className="basketItems main-section-box-inner">
                    <form onSubmit={(event) => event.preventDefault()}>
                        {this.renderList()}
                        <span className="">
                            <button
                                onClick={() => {
                                    this.checkout()
                                }}
                                type="button"
                                className="btn btn-secondary basket-checkout"
                                disabled={_.isEmpty(this.props.basket) ? true : false}
                            >
                                Checkout
                            </button>
                        </span>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps({basket, products}) {
    return {basket, products};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({checkout: checkout, selectProduct:selectProduct}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);