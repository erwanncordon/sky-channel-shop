import React, {Component} from 'react';

import CategoryList from '../containers/category_list';
import Basket from '../containers/basket';

export default class Catalog extends Component {
    render() {
        return (
            <div>
                <CategoryList className="doo"/>
                <Basket/>
            </div>
        );
    }
}
