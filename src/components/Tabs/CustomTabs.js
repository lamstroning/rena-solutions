import {AppBar, Tab, Tabs} from '@material-ui/core';
import {useState} from 'react';

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

export default function CustomTabs({table, filter}) {
    const [value, setValue] = useState('all');

    const changeTab = (event, value) => {
        setValue(value);
        filter(value);
    };

    return (
        <>
            <div className='tabs-container'>
                <AppBar className='tabs' position='static'>
                    <Tabs
                        centered
                        indicatorColor='primary'
                        className='tabs__container'
                        value={value}
                        onChange={changeTab}
                    >
                        {filters.map(({type, label}) =>
                            <Tab
                                key={type}
                                value={type}
                                label={label}
                                disableRipple
                                className='tabs__item'
                            />
                        )}
                    </Tabs>
                </AppBar>
            </div>
            <div>
                {table()}
            </div>
        </>
    );
}