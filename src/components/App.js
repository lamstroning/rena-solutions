import React from 'react';

import '../styles/index.scss';
import Tasks from "./Tasks";
import { BrowserRouter, Route } from 'react-router-dom';
import { Redirect, Switch } from 'react-router';
import Header from './common/Header';
import NotFound from './404';
import { Box } from "@material-ui/core";
import CheckList from "./CheckList";

function App() {
    return (
        <Box display='flex' flexDirection='column' height={1}>
            <BrowserRouter>
                <Switch>
                    <Route path='/mrms/client/tasks'>
                        <Header />
                        <Tasks />
                    </Route>
                    <Route path='/mrms/client/404'>
                        <NotFound />
                    </Route>
                    <Route path='/mrms/client/checklist'>
                        <Header />
                        <CheckList />
                    </Route>
                    <Route path='*'>
                        <Redirect to='/mrms/client/404' />
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