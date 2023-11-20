import React from "react";
import "./GigCard.scss";
import { Link } from "react-router-dom";

const GigCard = ({ item }) => {
  return (
    <Link to="/" className="link">
      <div className="gigCard">
        
        <div className="info">
          <div className="user">
            <img src={item.pp} alt="" />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          <span>Trilhas:</span>
          <p>{item.category}</p>
          <span>Áreas de interesse:</span>
          <p>{item.area}</p>
          <span>Modalidades:</span>
          <p>{item.modalidade}</p>
          <div className="star">
            <img src="./img/star.png" alt="" />
            <span>{item.star}</span>
          </div>
        </div>
        <hr />
        <div className="detail">
          <img src="./img/heart.png" alt="" />
          
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
