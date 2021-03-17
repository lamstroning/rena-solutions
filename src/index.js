import React from 'react';
import ReactDOM from 'react-dom';
import {Redirect, Switch} from 'react-router'
import {BrowserRouter, Route} from 'react-router-dom';

import {MuiThemeProvider} from '@material-ui/core';

import {theme} from './theme/theme';
import Login from './components/Auth/Login';
import App from './components/App';

const PrivateRoute = () => {
    const user =  window.localStorage.getItem('auth');
    if (user == 'true')
        return <Route path='/'>
            <App/>
        </Route>;
    else
        return <Redirect to='login'/>
}

ReactDOM.render(
  <React.StrictMode>
      <MuiThemeProvider theme={theme}>
          <BrowserRouter>
              <Switch>
                  <Route exact path='/login'>
                      <Login/>
                  </Route>
                  <PrivateRoute/>
              </Switch>
          </BrowserRouter>
      </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
