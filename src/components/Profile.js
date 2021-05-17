import {getUser} from '../Services/Auth';

export default function Profile() {
    const user = getUser();

    return (
        <div className='page'>
            <div>
                <div>
                    <img src={user.avatar} alt=''/>
                </div>
                <div>
                    Имя: {user.name}
                </div>
                <div>
                    Должность: {user.position}
                </div>
            </div>
        </div>
    );
}
