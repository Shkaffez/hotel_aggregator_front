import { ADMIN_ROUTE, HOTEL_ROUTE, USER_ROUTE, ROOM_ROUTE, MAIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from './utils/consts';
import { Admin } from './pages/Admin';
import { UserPage } from './pages/UserPage';
import { Hotel } from './pages/Hotel';
import { MainPage } from './pages/MainPage';
import { Auth } from './pages/Auth';
import { Login } from './pages/Login';


export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: USER_ROUTE,
        Component: UserPage
    },
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: MainPage
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: HOTEL_ROUTE + '/id',
        Component: Hotel
    },
    {
        path: ROOM_ROUTE + '/id',
        Component: UserPage
    },
]