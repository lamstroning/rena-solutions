import {AppBar, Tab, Tabs} from '@material-ui/core';
import TabPanel from './TabPanel';
import {useState} from 'react';

export default function CustomTabs({pages = []}) {
    const [value, setValue] = useState(0);

    const changeTab = (event, value) => {
        setValue(value);
    };

    console.log(pages)
    return (
        <div className='tabs-container'>
            <AppBar className='tabs' position='static'>
                <Tabs
                    centered
                    indicatorColor='primary'
                    className='tabs__container'
                    value={value}
                    onChange={changeTab}
                >
                    <Tab
                        value={0}
                        disableRipple
                        className='tabs__item'
                        label='Новые'
                    />
                    <Tab
                        value={1}
                        disableRipple
                        className='tabs__item'
                        label='В работе'
                    />
                    <Tab
                        value={2}
                        disableRipple
                        className='tabs__item'
                        label='Выполненые'
                    />
                </Tabs>
            </AppBar>
            {pages.map((Component, index) =>
                <TabPanel
                    className='tabs__page'
                    value={value}
                    index={index}
                >
                    {Component()}
                </TabPanel>
            )}
        </div>
    );
}