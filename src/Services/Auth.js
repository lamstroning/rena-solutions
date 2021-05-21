import avatarAdmin from '../asetss/images/worker-avatar.png'
import avatarUser from '../asetss/images/user-avatar.jpg'

const admin = {
    name: 'Иванов А. А.',
    role: 'admin',
    email: 'ivanov.a.a@informatique.ru',
    position: 'Главный инженер',
    lastName: 'Иванов',
    firstName: 'Анатолий',
    middleName: 'Андреевич',
    division: 'Управляющий',
    avatar: avatarAdmin
};

const user = {
    name: 'Петров И. Г.',
    role: 'user',
    email: 'petrov.i.g@informatique.ru',
    lastName: 'Петров',
    firstName: 'Иван',
    middleName: 'Геннадьевич',
    position: 'Инженер',
    division: 'Отделение главного механика',
    avatar: avatarUser
};

export const userList = [
    admin,
    user
]

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