import React from "react";
import "./Projectcss.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} class="card__image" alt="Project" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      <a
        className="button__link"
        href={props.link}
        target="_blank"
        rel="noreferrer"
      >
        <button className="card__btn">View Source</button>
      </a>
    </div>
  );
};

export default Card;
