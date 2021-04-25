import { Box, IconButton, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { theme } from '../../theme/theme';

import avatar from '../../asetss/images/worker-avatar.png'

const userProfiles = [
    {
        id: 1,
        userName: 'Иванов П.С.',
        position: 'Инженер-механик',
        avatar: '/src/assets/images/worker-avatar.png'
    }
]

export default function Header({backArrow, title}) {
    return (
        <Box
            p={2}
            bgcolor={theme.palette.primary.main}
        >
            <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                mx='auto'
                px={2}
                maxWidth={theme.size.appWidth}
            >
                <Box display='flex'>
                    <Box width={50}>
                        {backArrow &&
                        <IconButton
                            className='icon icon_white'
                            onClick={() => window.history.back()}
                        >
                            <ArrowBackIcon/>
                        </IconButton>}
                    </Box>
                    <Box
                        alignItems='center'
                        display='flex'
                        pl={2}
                    >
                        <Box
                            width={50}
                            height={50}
                            borderRadius='50%'
                            overflow='hidden'
                        >
                            <img width='100%' height='100%' src={avatar} alt=''/>
                        </Box>
                        <Box ml={2} color='white'>
                            <Typography variant='h5' className='text text_nowrap'>
                                {userProfiles[0].userName}
                            </Typography>
                            <Typography variant='h6' className='text text_nowrap'>
                                {userProfiles[0].position}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className='title'>
                    {title}
                </Box>
                <Box
                    display='flex'
                    color='white'
                    fontSize={28}
                >
                    <Box >
                        <IconButton color='inherit'>
                            <SearchIcon fontSize='inherit'/>
                        </IconButton >
                        <IconButton color='inherit'>
                            <LibraryBooksIcon fontSize='inherit'/>
                        </IconButton>
                        <IconButton
                            color='inherit'
                            href='/profile'
                        >
                            <SettingsIcon fontSize='inherit'/>
                        </IconButton>
                    </Box>
                    <IconButton
                        color='inherit'
                        onClick={() => {
                            window.localStorage.clear();
                            window.location.reload();
                        }}
                    >
                        <ExitToAppIcon fontSize='inherit'/>
                    </IconButton>
                </Box>
            </Box >
        </Box>
    );
}