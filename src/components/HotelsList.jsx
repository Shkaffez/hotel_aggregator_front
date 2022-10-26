import { observer } from 'mobx-react-lite';
import React from 'react';
import { Row } from 'react-bootstrap';
import HotelItem from './HotelItem';

const HotelsList = observer(({ hotels }) => {
  console.log("from hotelsList", hotels)
  return (
    <Row className="d-flex">
      {hotels.map(hotel =>
        <HotelItem key={hotel._id} hotel={hotel} />
      )}
    </Row>
  );
});

export default HotelsList;
