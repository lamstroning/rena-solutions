import UsersList from './UsersList';
import UserSettings from './UserSettings';

export default function Users() {
    return (
        <div className='container row row_top row_offset-2'>
            <div className='col col_3'>
                <UsersList/>
            </div>
            <div className='col col_9'>
                <UserSettings/>
            </div>
        </div>
    );
}
