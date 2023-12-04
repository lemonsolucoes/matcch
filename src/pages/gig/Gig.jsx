import React, { useState } from "react";
import "./Gig.scss";
import { gigs } from "../../data";
import { useParams, useNavigate } from "react-router-dom";

function Gig() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const gigData = gigs[id - 1];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Adicione a lógica para lidar com o valor do input conforme necessário
    console.log("Input Value:", inputValue);
    // Feche o modal após a submissão (adicione lógica adicional conforme necessário)
    closeModal();
  };

  const handleSubmit = () => {
    navigate("/solicitacao");
  };

  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <div className="seller">
            <div className="box">
              <div className="user">
                <img src={gigData?.pp} alt="" />
                <div className="info">
                  <span>{gigData?.username}</span>
                </div>
              </div>
              <br></br>
              <p>{gigData?.longerdesc}</p> <br></br>
              <hr />
              <div className="items">
                <div className="item">
                  <span className="title">Trilha:</span>
                  <span className="desc">{gigData?.category}</span>
                </div>
                <div className="item">
                  <span className="title">Áreas de Interesse:</span>
                  <span className="desc">{gigData?.area}</span>
                </div>
                <div className="item">
                  <span className="title">
                    Preferência de modalidade de TCC:
                  </span>
                  <span className="desc">{gigData?.modalidade}</span>
                </div>
              </div>
              <center>
                <button onClick={openModal}>
                  Solicitar Orientação para TCC
                </button>
              </center>
              {isModalOpen && (
                <div className="modal-overlay">
                  <div className="modal-content">
                    <div className="status">Envio de Solicitação</div>
                    <img src={gigData?.pp} alt="" className="modal-image" />
                    <h2 className="modal-title">
                      Deseja enviar solicitação de orientação para{" "}
                      {gigData?.username}?
                    </h2>
                    <Switcher />

                    <textarea
                      placeholder="Escreva algo para o professor. Lembre-se de ser educado. Uma boa mensagem pode aumentar muito a sua chance de match!"
                      className="modal-input"
                    />

                    <div className="modal-buttons">
                      <button className="send-button" onClick={handleSubmit}>
                        Enviar
                      </button>
                      <button className="cancel-button" onClick={closeModal}>
                        Cancelar
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="right">
          <h1>Projetos orientados por {gigData?.username}:</h1>

          <div key={gigData?.id}>
            <div className="price">
              <h3>{gigData?.proj}</h3>
            </div>
            <div className="details">
              <div className="item">
                <i className="fa-sharp fa-solid fa-user"></i>
                <span>Autor: {gigData?.projautor}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Switcher = () => {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("segunda opção");

  const handleToggle = () => {
    setOpcaoSelecionada((prevOpcao) =>
      prevOpcao === "primeira opção" ? "segunda opção" : "primeira opção",
    );
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={opcaoSelecionada === "primeira opção"}
          onChange={handleToggle}
        />
        <span> É a sua primeira opção?</span>
      </label>
      <br></br>
      <p>Este professor será sua {opcaoSelecionada}</p>
    </div>
  );
};

export default Gig;
