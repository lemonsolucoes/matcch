import React, { useState } from "react";
import "./Gig.scss";
import { gigs } from "../../data";

function Gig() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");


  const gigData = gigs[0]; // Assuming you want to display data for the first gig, you can change this as needed

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

  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <div className="seller">
            
            <div className="box">
            <div className="user">
              <img src={gigData.pp} alt="" />
              <div className="info">
                <span>{gigData.username}</span>
              </div>
            </div>

            <br></br>
              <p>{gigData.longerdesc}</p> <br></br>
              <hr />
              <div className="items">
              <div className="item">
                  <span className="title">Trilha</span>
                  <span className="desc">{gigData.category}</span>
                </div>
                <div className="item">
                  <span className="title">Áreas de Interesse</span>
                  <span className="desc">{gigData.area}</span>
                </div>
                <div className="item">
                  <span className="title">Preferência de modalidade de TCC:</span>
                  <span className="desc">{gigData.modalidade}</span>
                </div>
              </div>
              <center>
              <button onClick={openModal}>Solicitar Orientação para TCC</button>
              </center>



              {isModalOpen && (
            <div className="modal-overlay">
            <div className="modal-content">
            <div className="status">Envio de Solicitação</div>
              <img src={gigData.pp} alt="" className="modal-image" />
              <h2 className="modal-title">Deseja enviar solicitação de orientação para {gigData.username}?</h2>

<textarea
          placeholder="Escreva algo para o professor. Lembre-se de ser educado. Uma boa mensagem pode aumentar muito a sua chance de match!"
          className="modal-input"
        />


          <div className="modal-buttons">
          <button className="send-button">Enviar</button>
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
          <h1>Projetos orientados por {gigData.username}:</h1>
          {gigs.map((project) => (
            <div key={project.id}>
              <div className="price">
                <h3>{project.desc}</h3>
              </div>
              <div className="details">
                <div className="item">
                  <img src={project.img} alt="" />
                  <span>Autor: {project.username}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gig;