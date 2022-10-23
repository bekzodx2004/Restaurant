import React from "react";
import "./Restaurant.scss";
import Vector from "../../../images/vector.png";
const Restaurant = () => {
  return (
    <div className="restaurant" id="home">
      <h1>Retaurant</h1>
      <h3>Аппетитно и очень вкусно!</h3>
      <img src={Vector} alt="" />
      <div className="restaurant__contacts">
        <div className="card">
          <h5>Наш телефон:</h5>
          <h2>+7 (000) 777-77-77</h2>
        </div>
        <div className="card">
          <h4>Наш адрес:</h4>
          <p>
            196247, Россия, Санкт-Петербург, Ленинский просп., 151, офис 711
          </p>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
