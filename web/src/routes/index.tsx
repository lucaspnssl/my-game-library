import React from 'react';
import { BrowserRouter as Switch } from "react-router-dom";

import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import Route from './routes';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/dashboard" exact component={Dashboard} isPrivate />
    </Switch>
)


export default Routes;