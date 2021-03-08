import React from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={SignIn} />

        <Layout>
            <Route path="/dashboard" exact component={Dashboard} />
        </Layout>
    </Switch>
)


export default Routes;