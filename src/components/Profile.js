import {Box} from '@material-ui/core';

import avatar from '../asetss/images/worker-avatar.png'

export default function Profile() {
    return (
        <Box className='page' p={3}>
           <Box className='title'>
               Профиль
           </Box>
            <Box pt={10}>
                <Box>
                    <img src={avatar} alt=''/>
                </Box>
                <Box>
                    Имя: Иванов П.С.
                </Box>
                <Box>
                    Должность: Инженер-механик
                </Box>
            </Box>
        </Box>
    );
}
