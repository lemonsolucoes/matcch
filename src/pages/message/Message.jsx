import React from "react";
import { Link } from "react-router-dom";
import "./Message.scss";
import { gigs } from "../../data";
import { useParams, useNavigate } from "react-router-dom";

const Message = () => {
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
          <h5>
            <br></br>Sorria, você ainda não teve nenhuma solicitação recusada!
          </h5>
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

export default Message;
