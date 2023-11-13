import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Áreas de interesse:</h2>
            <span>Realidade Virtual</span>
            <span>Design Gráfico</span>
            <span>Narrativas</span>
            <span>Cinema & Audiovisual</span>
            <span>Música & Som</span>
            <span>Programação</span>
            <span>Animação</span>
          </div>
          <div className="item">
            <h2>Sobre nós</h2>
            <span>Politíca de Privacidade</span>
            <span>Termos de Uso do Serviço</span>
            <span>Contato</span>
          </div>
          <div className="item">
            <h2>Suportet</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
    
          </div>
          <div className="item">
            <h2>Teste</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          <div className="item">
            <h2>Mais sobre matcch</h2>
            <span>Business</span>
            <span> Pro</span>
            <span>Logo Maker</span>
            <span>Guides</span>
            <span>Get Inspired</span>
            <span> Select</span>
            <span>Learn</span>
            <span>Working Not Working</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>matcch.</h2>
            <span>© Matcch. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            
        
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
