import { BrowserRouter, Route } from 'react-router-dom';
import { Redirect, Switch } from 'react-router';

import { Box } from '@material-ui/core';

import '../styles/index.scss';

import Tasks from './Tasks/Tasks';
import Header from './Common/Header';
import NotFound from './404';
import CheckList from './CheckList/CheckList';
import Profile from './Profile/Profile';
import ActionInfo from './Action/ActionInfo';
import NewTask from './Tasks/NewTask';
import Reports from './Reports/Reports';
import { getCurrentUser } from '../Services/AuthService';
import Users from './Users/Users';

function App() {
    const role = getCurrentUser().role;

    const PrivateRoute = ({ children, success }) => (
        <Route
            render={() =>
                success
                    ? children
                    : <Redirect to='/404' />
            }
        />
    );

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
                    <Route path='/tasks/new'>
                        <Header
                            backArrow
                            title='Создать задание на ремонт'
                        />
                        <NewTask />
                    </Route>
                    <Route path='/tasks'>
                        <Header title='Задания на ремонт' />
                        <Tasks />
                    </Route>
                    <Route path='/checklist/info'>
                        <Header
                            backArrow
                            title='Информация по действию'
                        />
                        <ActionInfo />
                    </Route>
                    <Route path='/checklist'>
                        <Header
                            backArrow
                            title='Чек-лист задания'
                        />
                        <CheckList />
                    </Route>
                    <PrivateRoute
                        success={role == 'admin'}
                        path='/report'
                    >
                        <Header
                            backArrow
                            title='Отчеты по чек листам'
                        />
                        <Reports />
                    </PrivateRoute>
                    <Route path='/profile'>
                        <Header
                            backArrow
                            title='Профиль'
                        />
                        <Profile />
                    </Route>
                    <PrivateRoute
                        success={role == 'admin'}
                        path='/users'
                    >
                        <Header
                            backArrow
                            title='Пользователи'
                        />
                        <Users />
                    </PrivateRoute>
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