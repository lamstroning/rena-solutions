import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Redirect, Switch } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './theme/theme';
import Login from './components/Auth/Login';

import { StylesProvider } from '@material-ui/core/styles';

import * as serviceWorker from './serviceWorker';
import { getCurrentUser } from './Services/AuthService';
import { initStorage } from './Services/TaskService';

const PrivateRoute = () => {
    const user = getCurrentUser();
    if (user)
        return <Route path='/'>
            <App />
        </Route>;
    else
        return <Redirect to='/login' />
}

ReactDOM.render(
    <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path='/login'>
                        <Login />
                    </Route>
                    <PrivateRoute />
                </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
    </StylesProvider>,
    document.getElementById('root')
);

serviceWorker.register();
initStorage();