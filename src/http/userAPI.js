import {$host, $authHost} from './index';
import jwt_decode from 'jwt-decode';

export const registretion = async (email, password, name, contactPhone) => {
    const {data} = await $host.post('/client/register', {email, password, name, contactPhone});
    localStorage.setItem('access_token', data.access_token);
    return jwt_decode(data.access_token);
}

export const login = async (email, password) => {
    const {data} = await $host.post('auth/login', {email, password}); 
    localStorage.setItem('access_token', data.access_token);
    return jwt_decode(data.access_token);
}

export const check = async () => {
    const {data} = await $authHost.get('auth/check');
    localStorage.setItem('access_token', data.access_token);
    return jwt_decode(data.access_token);
}

