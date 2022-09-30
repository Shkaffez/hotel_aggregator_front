import {$host, $authHost} from './index';
import jwt_decode from 'jwt-decode';

export const registretion = async (email, password, name, contactPhone) => {
    const {data} = await $host.post('/client/register', {email, password, name, contactPhone});
    console.log(data)
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}

export const login = async (email, password) => {
    const {data} = await $host.post('auth/login', {email, password});    
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth');
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}

