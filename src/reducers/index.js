import {combineReducers} from 'redux';
import CatalogueCategoryReducer from './reducer_category';
import CatalogueProductReducer from './reducer_product';
import BasketReducer from './reducer_basket';
import AppReducer from './reducer_app';
import CustomerReducer from './reducer_customer';

const rootReducer = combineReducers({
    //customer must be set first so that the products reducer has the correct info about the customer;
    customer: CustomerReducer,
    categories: CatalogueCategoryReducer,
    products: CatalogueProductReducer,
    basket: BasketReducer,
    appState: AppReducer
});
export default  rootReducer;