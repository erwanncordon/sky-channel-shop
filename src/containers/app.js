import React, {Component} from 'react';
import {connect} from 'react-redux';
import Catalog from '../components/catalog';
import ConfirmCheckout from '../containers/confirm_checkout';
import {bindActionCreators} from 'redux';
import {CHECKOUT, CATALOG} from '../constants';

export class App extends Component {
    renderCatalog() {
        return (
            <Catalog/>
        );
    }

    renderCheckout() {
        return (
            <ConfirmCheckout/>
        );
    }

    render() {
        let view = <div>Unknown State</div>
        if (this.props.appState == CHECKOUT) {
            view = this.renderCheckout();
        } else if (this.props.appState == CATALOG) {
            view = this.renderCatalog();
        }
        return (
            <div className="container">
                <div className="empty-box"></div>
                {view}
                <div className="clear"></div>
                <div className="empty-box"></div>
            </div>
        );

    }
}


function

mapStateToProps({appState}) {
    return {appState};
}

export default connect(mapStateToProps)(App);