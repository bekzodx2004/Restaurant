import React from "react";

import "./Contacts.scss";
import Img from "../../../images/contacts.png";
const Contacts = () => {
  return (
    <div className="contacts" id="contacts">
      <img src={Img} alt="" />
      <div>
        <h2>Наши контакты</h2>
        <h4>Наш телефон:</h4>
        <h3>+7 (000) 777-77-77</h3>
        <h3>+7 (000) 777-77-17</h3>

        <h4>Наш адрес:</h4>
        <p>196247, Россия, Санкт-Петербург, Ленинский просп., 151, офис 711</p>

        <h4>Электронна почта:</h4>
        <h5>test@mail.ru</h5>

        <div>
          <a target={'__blank'} href="https://reactjs.org/">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a target={'__blank'} href="https://reactjs.org/">
            <i className="fa-brands fa-vk"></i>
          </a>
          <a target={'__blank'} href="https://reactjs.org/">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a target={'__blank'} href="https://reactjs.org/">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
      <form action="">
        <h3>Оставить заявку</h3>
        <input type="text" placeholder="Ваше имя:" />
        <input type="text" placeholder="Телефон:" />
        <input type="text" placeholder="Комментарий:" />
        <button>Отправить</button>
      </form>
    </div>
  );
};

export default Contacts;
