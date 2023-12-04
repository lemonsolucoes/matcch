import React, { useState } from "react";
import "./MyGigs.scss";
import { gigs } from "../../data";
import { useParams, useNavigate } from "react-router-dom";

function MyGigs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const currentUser = {
    id: 1,
    semestre: "6°",
    pp: "https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Anna Ferreira",
    longerdesc:
      "Aluna do curso de SMD apaixonada por design e por sistemas. Quero desenvolver um TCC que seja um artigo ou um relatório técnico nas minhas áreas de interesse.",
    category: "Design",
    area: "UX",
    modalidade: "Artigo",
    orientador: "Ticianne",
    isSeller: true,
  };

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
    navigate("/editarperfil");
  };

  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <div className="seller">
            <div className="box">
              <div className="user">
                <img src={currentUser?.pp} alt="" />
                <div className="info">
                  <div className="statuscolor">
                    {currentUser?.semestre} semestre{" "}
                  </div>

                  <span>{currentUser?.username}</span>
                </div>
              </div>
              <br></br>
              <p>{currentUser?.longerdesc}</p> <br></br>
              <hr />
              <div className="items">
                <div className="item">
                  <span className="title">Trilha:</span>
                  <span className="desc">{currentUser?.category}</span>
                </div>
                <div className="item">
                  <span className="title">Áreas de Interesse:</span>
                  <span className="desc">{currentUser?.area}</span>
                </div>
                <div className="item">
                  <span className="title">
                    Preferência de modalidade de TCC:
                  </span>
                  <span className="desc">{currentUser?.modalidade}</span>
                </div>
              </div>
              <center>
                <button onClick={handleSubmit}>Editar perfil</button>
              </center>
            </div>
          </div>
        </div>

        <div className="direita">
          <h2>Seu orientador:</h2>
          <div key={gigData?.id}>
            <div className="cardo">
              <img
                src={currentUser?.pp} // Substitua pelo caminho real da sua foto
                alt="img"
                className="cardo__imagem"
              />
              <h2 className="cardo__titulo">{currentUser?.orientador}</h2>
              <label className="cardo__label">Trilha: Design</label>
            </div>

            <br></br>
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
      <p>
        Este professor será sua{" "}
        <span className="opcao">{opcaoSelecionada}</span>
      </p>
    </div>
  );
};

export default MyGigs;
