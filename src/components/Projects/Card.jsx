import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Projectcss.css";

const Card = (props) => {
  const [model, setModel] = useState(false);
  const [tempingSrc, setTempingSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempingSrc(imgSrc);
    setModel(true);
  };

  const portalElement = document.getElementById("overlays");

  return (
    <div className="card">
      {ReactDOM.createPortal(
        <div
          className={model ? "model open" : "model"}
          onClick={() => setModel(false)}
        >
          <img src={tempingSrc} alt="TempingSrc" />
        </div>,
        portalElement
      )}

      <div className="card__body">
        <div onClick={() => getImg(props.img)}>
          <img src={props.img} className="card__image" alt="Project" />
        </div>

        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      <div className="button__wrapper">
        <a
          className="button__link"
          href={props.link}
          target="_blank"
          rel="noreferrer"
        >
          <button className="card__btn">View Source</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
