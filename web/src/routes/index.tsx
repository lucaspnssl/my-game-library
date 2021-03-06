import React from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import SignIn from '../pages/SignIn';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={SignIn} />
    </Switch>
)


export default Routes;