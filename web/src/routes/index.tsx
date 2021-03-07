import React from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/dashboard" exact component={Dashboard} />
    </Switch>
)


export default Routes;