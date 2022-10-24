import React from 'react';

const HotelItem = ({ hotel }) => {
  return (
    <div>
      <h2>{hotel.title}</h2>
      <p>{hotel.city}</p>
      <p>{hotel.description}</p>
      {
        hotel.images.map(image =>
          <img src={ }></img>
      }
    </div>
  );
}

export default HotelItem;
