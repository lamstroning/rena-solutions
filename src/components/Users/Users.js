import UsersList from './UsersList';
import UserSettings from './UserSettings';
import {useState} from 'react';
import {createUser, getUsersList} from '../../Services/AuthService';

export default function Users() {
    const users = getUsersList();
    const [user, setUser] = useState(createUser());

    return (
        <div className='container'>
            <div className='row row_top row_offset-2'>
                <div className='col col_3'>
                    <UsersList
                        userList={users}
                        selectUser={setUser}
                    />
                </div>
                <div className='col col_9'>
                    <UserSettings user={user}/>
                </div>
            </div>
        </div>
    );
}
