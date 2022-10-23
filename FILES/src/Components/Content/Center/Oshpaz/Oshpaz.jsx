import React from "react";
import "./Oshpaz.scss";
import Naqsh from "../../../images/naqsh.png";
const Oshpaz = () => {
  return (
    <div className="oshpaz" id="o_nas">
      <div className="oshpaz__card">
        <div>
          <img src={Naqsh} alt="" />
          <h2>Коротко о нас</h2>
        </div>
          <p>Теперь для встречи не нужно долго и мучительно искать повод, стоит просто прийти в наш ресторан и вы сами не заметите как с головой окунетесь в атмосферу хорошей музыки, стильной обстановки и вкусного меню.</p>
          <a href="https://reactjs.org/">ПОДРОБНЕЕ</a>
      </div>
    </div>
  );
};

export default Oshpaz;
