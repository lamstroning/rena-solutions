import {AppBar, Tab, Tabs} from '@material-ui/core';
import TabPanel from './TabPanel';
import {useState} from 'react';

export default function CustomTabs({contents = []}) {
    const [value, setValue] = useState(0);

    console.log(contents);

    const changeTab = (event, value) => {
        console.log(value);
        setValue(value);
    };

    return (
        <>
            <AppBar className='tabs' position='static'>
                <Tabs
                    centered
                    indicatorColor='primary'
                    className='tabs__container'
                    value={value}
                    onChange={changeTab}
                >
                    <Tab
                        disableRipple classes={{

                        }}
                        className='tabs__item' label='Новые'
                    />
                    <Tab
                        disableRipple classes={{
                        }}
                        className='tabs__item' label='В работе'
                    />
                    <Tab
                        disableRipple classes={{

                        }}
                        className='tabs__item' label='Выполненые'
                    />
                </Tabs>
            </AppBar>
            {contents.map((content, index) =>
                <TabPanel className='tabs__page' value={value} index={index}>
                    {content}
                </TabPanel>
            )}
        </>
    );
}