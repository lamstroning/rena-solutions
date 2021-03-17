import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Redirect, Switch } from 'react-router'
import { BrowserRouter, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./theme/theme";
import Login from "./components/Auth/Login";
import * as serviceWorker from './serviceWorker';
import "./styles/index.scss"


const PrivateRoute = (props) => {
    const user = window.localStorage.getItem('auth'); // i will fetch token stored in cookie
    if (user === 'true')
        return <Route path='/'>
            <App />
        </Route>;
    else
        return <Redirect to='login' />
}

ReactDOM.render(
    <React.StrictMode>
        <MuiThemeProvider theme={theme}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/mrms/client/login'>
                        <Login />
                    </Route>
                    <PrivateRoute />
                </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.register();