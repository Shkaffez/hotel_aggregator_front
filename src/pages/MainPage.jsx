import { useContext } from "react";
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

export const MainPage = observer((props) => {
    const { user } = useContext(Context);
    return (
        <>
            <h1>Main</h1>
            <div>{user.user.name}</div>
            <div>{user.user.email}</div>
            <div>{user.user._id}</div>
            <div>{user.user.role}</div>

        </>
    )
});