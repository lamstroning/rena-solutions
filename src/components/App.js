import React from 'react';
import { BrowserRouter, Route, useLocation } from 'react-router-dom';
import { Redirect, Switch } from 'react-router';

import '../styles/index.scss';
import Tasks from "./Tasks";
import Header from './common/Header';
import NotFound from './404';
import { Box } from '@material-ui/core';
import CheckList from "./CheckList";

function App() {
    const location = useLocation();
    console.log(location.pathname)
    return (
        <Box
            display='flex'
            flexDirection='column'
            height={1}
        >
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path='/'>
                        <Redirect to='/tasks' />
                    </Route>
                    <Route path='/tasks'>
                        <Header />
                        <Tasks />
                    </Route>
                    <Route path='/checklist'>
                        <Header />
                        <CheckList />
                    </Route>
                    <Route path='/404'>
                        <NotFound />
                    </Route>
                    <Route path='*'>
                        <Redirect to='/404' />
                    </Route>
                </Switch>
            </BrowserRouter>
        </Box>
    );
}

export default App;

// if('serviceWorker' in navigator){
//     navigator.serviceWorker.register('/public/serverWorker.js')
//         .then(reg => console.log('service worker registered'))
//         .catch(err => console.log('service worker not registered', err));
// }