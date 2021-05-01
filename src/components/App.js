import { Box } from '@material-ui/core';
import { BrowserRouter, Route } from 'react-router-dom';
import { Redirect, Switch } from 'react-router';

import '../styles/index.scss';

import Tasks from "./Tasks/Tasks";
import Header from './common/Header';
import NotFound from './404';
import CheckList from "./CheckList";
import Profile from './Profile';

function App() {
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
                        <Header title='Задания на ремонт'/>
                        <Tasks />
                    </Route>
                    <Route path='/checklist'>
                        <Header
                            backArrow
                            title='Чек-лист задания'
                        />
                        <CheckList />
                    </Route>
                    <Route path='/profile'>
                        <Header
                            backArrow
                            title='Профиль'
                        />
                        <Profile />
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