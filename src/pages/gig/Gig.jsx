import React from "react";
import "./Gig.scss";



function Gig() {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">

      
          <div className="seller">
            <div className="user">
              <img
                src="http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4755105U6"
                alt=""
              />
              <div className="info">
                <span>Adriano Anunciação Oliveira</span>
                
                
              </div>
            </div>
            <div className="box">
            <p>
              Psicólogo graduado pela UFBA, com mestrado e doutorado em Teorias e Crítica da Literatura e da Cultura pela UFBA. Ex-professor de Cinema e Audiovisual na UFRB, coordenou o curso entre 2010-2013 e 2017-2018. Expert em produção audiovisual, análise fílmica e avaliação educacional. Atualmente, é professor adjunto de Sistemas de Mídias Digitais na UFC, coordenando o LABVIS.
              </p><br></br>
              <hr />
              <div className="items">
           
               
            
                <div className="item">
                  <span className="title">Áreas de Interesse</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Preferência de modalidade de TCC:</span>
                  <span className="desc">English</span>
                </div>
              </div>
              
             

              <button>Solicitar Orientação para TCC</button>
            </div>
          </div>
         
        </div>
        
        <div className="right">
        <h1>Projetos orientados por Adriano:</h1>
          <div className="price">
            <h3>A beleza está no olho de quem vê: Um relato de experiência sobre a avaliação de estética de um design system para HUDs em jogos sérios EUD. 2023.</h3>
          
          </div>
          <p>
            I will create a unique high quality AI generated image based on a
            description that you give me
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>2 Days Delivery</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Artwork delivery</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Image upscaling</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Additional design</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Gig;
