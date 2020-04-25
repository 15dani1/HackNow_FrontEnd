import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import frontPage from './FrontPage';
import mapPage from './mapPage';
import requestPage from './requestPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={frontPage} />
                <Route path="/driver" component={mapPage} />
                <Route path="/request" component={requestPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;