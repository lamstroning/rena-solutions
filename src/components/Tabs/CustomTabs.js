import {AppBar, Tab, Tabs} from '@material-ui/core';
import TabPanel from './TabPanel';
import {useState} from 'react';

export default function CustomTabs({contents = []}) {
    const [value, setValue] = useState(0);

    console.log(contents);

    const Page1 = () => <div>Page1</div>;
    const Page2 = () => <div>Page2</div>;
    const pages = [Page1, Page2];

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
            {pages.map(Component => Component)}
            <TabPanel
                className='tabs__page'
                value={value}
                index={0}
            >
                aa
            </TabPanel>
            <TabPanel
                className='tabs__page'
                value={value}
                index={1}
            >
                bbbbbb
            </TabPanel>
            <TabPanel
                className='tabs__page'
                value={value}
                index={2}
            >
                cccccccccc
            </TabPanel>
        </>
    );
}