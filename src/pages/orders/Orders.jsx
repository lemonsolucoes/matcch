import React from "react";
import { Link } from "react-router-dom";
import "./Orders.scss";
import { gigs } from "../../data";

const Orders = () => {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  const gig = gigs[0]; // Escolha a posição desejada do array gigs

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Minhas solicitações</h1>
        </div>
        <div className="box">
          <h2>
            <i className="fa-sharp fa-solid fa-clock"></i> Solicitações
            Pendentes
          </h2>

          <div className="card">
            <div className="header">
              <img src={gig.pp} alt="Imagem" />
              <h3>Solicitação enviada para {gig.username}</h3>
              <label>1° opção</label>
            </div>
            <div className="subtitle">Gerenciar solicitação</div>
            <div className="buttons-container">
              <button className="circular-button">
                <i className="fa-sharp fa-solid fa-user"></i>
              </button>
              <button className="circular-button">
                <i className="fa-sharp fa-solid fa-pen"></i>
              </button>
              <button className="circular-button">
                <i className="fa-sharp fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
