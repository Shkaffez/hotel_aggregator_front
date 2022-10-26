import React from 'react';


const HotelItem = ({ hotel }) => {
  return (
    <div>
      <h2>{hotel.title}</h2>
      <p>{hotel.city}</p>
      <p>{hotel.description}</p>
      {
        hotel.images.map(image =>
          <img src={process.env.REACT_APP_API_URL + "/files/" + image} key={image} alt="view of hotel"></img>
        )}
    </div>
  );
}

export default HotelItem;
