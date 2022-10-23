import React from "react";
import './Gallery.scss'
import { gallery } from "../../../API";

const Gallery = () => {
  return (
    <div className="gallery" id="uslug">
      <h2>Фотогалерея</h2>

      <div className="gallery__cards">
        {gallery.map((gallery) => {
          return <img key={gallery.id} src={gallery.img} alt="" />;
        })}
      </div>
    </div>
  );
};

export default Gallery;
