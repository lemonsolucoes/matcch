import React from "react";
import "./Gig.scss";
import { gigs } from "../../data";

function Gig() {
  const gigData = gigs[0]; // Assuming you want to display data for the first gig, you can change this as needed

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
                <button>Solicitar Orientação para TCC</button>
              </center>
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
