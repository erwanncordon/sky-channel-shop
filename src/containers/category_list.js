import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProductList from '../components/product_list';
import _ from 'lodash';

export class CategoryList extends Component {

    renderList() {
        return this.props.categories.map((category) => {
            var products = this.props.products.filter(function (product) {
                return product.categoryId == category.id;
            });
            if (_.isEmpty(products)) {
                return null;
            }
            return (
                <div
                    key={category.id}
                    className="main-section-box col-sm-4">
                    <div
                        className="category main-section-box-inner ">
                        {category.title}
                        <form onSubmit={(event) => event.preventDefault()}>
                            <ProductList products={products}/>
                        </form>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="categories">
                {this.renderList()}
            </div>
        );
    }
}

function mapStateToProps({categories, products}) {
    return {categories, products};
}

export default connect(mapStateToProps)(CategoryList);