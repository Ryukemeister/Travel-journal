import React from "react";
import "./Card.css";

/*
 <div className="card-component">
        <div className="card-image">
          <img
            className="card-img"
            src="https://source.unsplash.com/WLxQvbMyfas"
            alt="Card"
          />
        </div>
        <div className="card-info">
          <div className="part-one">
            <img src="./src/assets/Location.png" alt="" />
            <h4 className="country-of-place">JAPAN</h4>
            <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8" target="_blank">
              <h5 className="view-anchor"> View on google maps </h5>
            </a>
          </div>
          <h2 className="place-title">Mount Fuji</h2>
          <div className="part-two">
            <h4 className="place-facts">12 Jan, 2021 - 24 Jan, 2021</h4>
            <p className="desc">
              Mount Fuji is the tallest mountain in Japan, standing at 3,776
              meters (12,380 feet). Mount Fuji is the single most popular
              tourist site in Japan, for both Japanese and foreign tourists.
            </p>
          </div>
        </div>
      </div>
*/

function Card({
  id,
  imgSource,
  location,
  mapsUrl,
  title,
  startDate,
  endDate,
  description,
}) {
  return (
    <div className="card-component">
      <div className="card-image">
        <img className="card-img" src={imgSource} alt="Card" />
      </div>
      <div className="card-info">
        <div className="part-one">
          <img src="./src/assets/Location.png" alt="Location image" />
          <h4 className="country-of-place">{location.toUpperCase()}</h4>
          <a href={mapsUrl} target="_blank">
            <h5 className="view-anchor"> View on google maps </h5>
          </a>
        </div>
        <h2 className="place-title">{title}</h2>
        <div className="part-two">
          <h4 className="place-facts">
            {startDate} - {endDate}
          </h4>
          <p className="desc">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
