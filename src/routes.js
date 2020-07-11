import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main';
import Product from './pages/product';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Main} exact />
                <Route path="/products/:id" component={Product} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
