import { AppBar, Button, Tab, Tabs } from '@material-ui/core';
import { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { getCurrentUser } from '../../Services/AuthService';

const filters = [
    {
        type: 'all',
        label: 'Все'
    },
    {
        type: 'new',
        label: 'Новый'
    },
    {
        type: 'work',
        label: 'В работе'
    },
    {
        type: 'finish',
        label: 'Выполненные'
    }
]

export default function CustomTabs({ table, filter }) {
    const [value, setValue] = useState('all');
    const user = getCurrentUser();

    const changeTab = (event, value) => {
        setValue(value);
        filter(value);
    };

    return (
        <>
            <div className='tabs-container' >
                <AppBar className='tabs' position='static'>
                    <div className='row row_between'>
                        <Tabs
                            centered
                            indicatorColor='primary'
                            className='tabs__container'
                            value={value}
                            onChange={changeTab}
                        >
                            {filters.map(({ type, label }) =>
                                <Tab
                                    key={type}
                                    value={type}
                                    label={label}
                                    disableRipple
                                    className='tabs__item'
                                />
                            )}
                        </Tabs>
                        {user.role == 'admin' &&
                            <Button
                                className='button'
                                color='primary'
                                variant='contained'
                                href='/tasks/new'
                            >
                                <AddIcon />
                                <div className='button__label'>
                                    Создать задание
                            </div>
                            </Button>
                        }
                    </div>
                </AppBar>
            </div>
            <div>
                {table()}
            </div>
        </>
    );
}