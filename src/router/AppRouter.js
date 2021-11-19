import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={ LoginPage } />
                    <Route exact path="/register" component={ RegisterPage } />
                    <Redirect to="/login" />
                </Switch>
            </div>
        </Router>
    )
}
