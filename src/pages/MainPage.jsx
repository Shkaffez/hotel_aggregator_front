import { useContext } from "react";
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import Container from "react-bootstrap/Container";
import { useEffect } from "react";
import { searchHotels } from "../http/hotelAPI";
import HotelsList from "../components/HotelsList";

export const MainPage = observer(() => {
    const { hotelsStore } = useContext(Context);
    useEffect(() => {
        searchHotels().then(data => {
            console.log("from main page", data)
            hotelsStore.setHotels(data);
        })
    }, [])

    console.log(hotelsStore.hotels)
    return (
        <Container>
            <h1>Main</h1>
            {hotelsStore.hotels && <HotelsList hotels={hotelsStore.hotels} />}

        </Container>
    )
});