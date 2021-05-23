import avatarAdmin from '../asetss/images/user-avatar.png'
import avatarUser from '../asetss/images/worker-avatar.png'

const admin = {
    id: 2,
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
    id: 1,
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

const newUser = {
    id: '',
    name: '',
    role: '',
    email: '',
    lastName: '',
    firstName: '',
    middleName: '',
    position: '',
    division: '',
    avatar: ''
};

const userList = [
    admin,
    user
]

export function createUser() {
    return newUser;
}

export function getUser(id) {
    console.log(id);
    return userList.find(user => user.id == id) || {};
}

export function getUserByName(name) {
    return userList.find(user => user.name == name) || {};
}

export function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
}

export function getUsersList() {
    return userList;
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