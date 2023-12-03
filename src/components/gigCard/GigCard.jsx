import React from "react";
import "./GigCard.scss";
import { Link } from "react-router-dom";

const GigCard = ({ item }) => {
  const getStatusColor = () => {
    switch (item.status) {
      case "Disponivel":
        return "#509B4A"; 
      case "Indisponivel":
        return "#F25740"; 
      default:
        return "gray"; 
    }
  };

  return (
    <Link to="/gig/123" className="link">
      <div className="gigCard">
        <div className="info">
          <div
            className="statuscolor"
            style={{ backgroundColor: getStatusColor() }}
          >
            {item.status}
          </div>
          <div className="user">
            <img src={item.pp} alt="" />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
    
          <span>Trilhas:</span>
          <p>{item.category}</p>
          <hr />
          <span>Áreas de interesse:</span>
          <p>{item.area}</p>
          <hr />
          <span>Modalidades:</span>
          <p>{item.modalidade}</p>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
