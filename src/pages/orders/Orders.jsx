import React from "react";
import { Link } from "react-router-dom";
import "./Orders.scss";
import { gigs } from "../../data";
import { useParams, useNavigate } from "react-router-dom";

const Orders = () => {
  const { id } = useParams();

  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  const gig = gigs[id - 1];

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
            </div>
            <label>1° opção</label>
            <div className="subtitle">Gerenciar solicitação</div>
            <div className="buttons-container">
              <Link to={`/gig/${id}`} className="circular-button">
                <i className="fa-sharp fa-solid fa-user"></i>
                <p>Perfil</p>
              </Link>
              <Link className="circular-button">
                <i className="fa-sharp fa-solid fa-pen"></i>
                <p>Editar</p>
              </Link>
              <Link className="circular-button">
                <i className="fa-sharp fa-solid fa-trash"></i>
                <p>Deletar</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="box">
          <h4>
            <i className="fa-sharp fa-solid fa-circle-xmark"></i> Solicitações
            Recusadas
          </h4>
          <h5>
            <br></br>Sorria, você ainda não teve nenhuma solicitação recusada!
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Orders;
