import React from "react";
import "./GigCard.scss";
import { Link, useNavigate } from "react-router-dom";

const GigCard = ({ item }) => {
  const navigate = useNavigate();

  const getStatusColor = () => {
    switch (item.status) {
      case "Disponivel":
        return "#42823d";
      case "Indisponivel":
        return "#e44835";
      default:
        return "gray";
    }
  };

  const handleClick = () => {
    navigate(`/gig/${item.id}`);
  };

  return (
    <div className="link">
      <div className="gigCard" onClick={handleClick}>
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
    </div>
  );
};

export default GigCard;
