import { observer } from 'mobx-react-lite';
import React from 'react';
import { useContext } from 'react';
import { Context } from '..';
import { Row } from 'react-bootstrap';

const HotelsList = observer(() => {
  const { hotels } = useContext(Context);

  return (
    <Row className="d-flex">
      {hotels.hotels.map(hotel =>
        <HotelItem key={hotel._id} hotel={hotel} />
      )}
    </Row>
  );
});

export default HotelsList;
