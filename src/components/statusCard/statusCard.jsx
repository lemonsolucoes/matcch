import React, { useEffect, useState } from "react";
import "./statusCard.scss";
import { API } from "../../api";

const StatusCard = ({ userID }) => {
  const [data, setData] = useState({});

  const getUserData = async () => {
    try {
      const response = await API.getUserById(userID);
      const teacher = await response.json();
      setData(teacher[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="card">
      <div className="header">
        <img src={data.avatar} alt="Imagem" />
        <h3>Solicitação enviada para {data.name}</h3>
      </div>
      <label>1° opção</label>
      <div className="subtitle">Gerenciar solicitação</div>
      <div className="buttons-container">
        <button className="circular-button">
          <i className="fa-sharp fa-solid fa-user"></i>
          <p>Perfil</p>
        </button>
        <button className="circular-button">
          <i className="fa-sharp fa-solid fa-pen"></i>
          <p>Editar</p>
        </button>
        <button className="circular-button">
          <i className="fa-sharp fa-solid fa-trash"></i>
          <p>Deletar</p>
        </button>
      </div>
    </div>
  );
};
export default StatusCard;
