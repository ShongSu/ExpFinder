import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Homepage from './Homepage.jsx';
import Page1 from './Page1.jsx';
import Page2 from './Page2.jsx';
import Page3 from './Page3.jsx';

const NotFound = () => <h1>Page Not Found</h1>;


export default function Contents() {
    return (
        <Switch>
            <Redirect exact from="/" to="/" />
            <Route path="/home" component={Homepage} />
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
            <Route path="/page3" component={Page3} />
            <Route component={NotFound} />
        </Switch>
    );
}