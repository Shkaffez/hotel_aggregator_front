import { useContext } from "react";
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import Container from "react-bootstrap/Container";
import { useEffect } from "react";
import { searchHotels } from "../http/hotelAPI";

export const MainPage = observer((props) => {
    const { user } = useContext(Context);
    useEffect(() => {
        searchHotels().then(data => {
        })
    }, [])

    return (
        <Container>
            <h1>Main</h1>
            <div>{`имя: ${user.user.name}`}</div>
            <div>{`email: ${user.user.email}`}</div>
            <div>{`id: ${user.user._id}`}</div>
            <div>{`роль: ${user.user.role}`}</div>

        </Container>
    )
});