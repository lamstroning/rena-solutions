import {BrowserRouter, Route} from 'react-router-dom';
import {Redirect, Switch} from 'react-router';

import {Box} from '@material-ui/core';

import '../styles/index.scss';

import Tasks from './Tasks/Tasks';
import Header from './common/Header';
import NotFound from './404';
import CheckList from './CheckList/CheckList';
import Profile from './Profile/Profile';
import CheckListDetail from './CheckList/CheckListDetail';
import NewTask from './Tasks/NewTask';
import Reports from './Reports/Reports';

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
                        <Redirect to='/tasks'/>
                    </Route>
                    <Route path='/tasks/new'>
                        <Header
                            backArrow
                            title='Создать задание на ремонт'
                        />
                        <NewTask/>
                    </Route>
                    <Route path='/tasks'>
                        <Header title='Задания на ремонт'/>
                        <Tasks/>
                    </Route>
                    <Route path='/checklist/info'>
                        <Header
                            backArrow
                            title='Информация по действию чек-листа'
                        />
                        <CheckListDetail/>
                    </Route>
                    <Route path='/checklist'>
                        <Header
                            backArrow
                            title='Чек-лист задания'
                        />
                        <CheckList/>
                    </Route>
                    <Route path='/report'>
                        <Header
                            backArrow
                            title='Отчеты по чек листам'
                        />
                        <Reports/>
                    </Route>
                    <Route path='/profile'>
                        <Header
                            backArrow
                            title='Профиль'
                        />
                        <Profile/>
                    </Route>
                    <Route path='/404'>
                        <NotFound/>
                    </Route>
                    <Route path='*'>
                        <Redirect to='/404'/>
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