import avatarAdmin from '../asetss/images/worker-avatar.png'
import avatarUser from '../asetss/images/user-avatar.jpg'

const admin = {
    name: 'Иванов А. А.',
    role: 'admin',
    position: 'Главный инженер',
    avatar: avatarAdmin
};

const user = {
    name: 'Петров И. Г.',
    role: 'user',
    position: 'Инженер',
    avatar: avatarUser
};

export function getUser() {
    return JSON.parse(localStorage.getItem('user'));
}

export default function authorization(login, password) {
    if (login == 'admin' && password == 'admin')
        localStorage.setItem('user', JSON.stringify(admin));
    else if (login == 'user' && password == 'user')
        localStorage.setItem('user', JSON.stringify(user));
    else
        return false;
    return true;
}