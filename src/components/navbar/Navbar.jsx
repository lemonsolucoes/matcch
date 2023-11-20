import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  // const currentUser = null

  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
<img src="./img/matcch-logo-png.png" alt="" width="150" height="30"></img>
          </Link>
        </div>
        <div className="links">
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" width="18" height="18" style={{margin:"10px"}}/>
              <input type="text" placeholder='O que você busca para o seu TCC?' />
            </div>
          
          </div>
          <span>Ver lista de professores</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {currentUser ? (
            <div className="user" onClick={()=>setOpen(!open)}>
              <img
                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && <div className="options">
                {currentUser.isSeller && (
                  <>
                    <Link className="link" to="/mygigs">
                      Página Inicial
                    </Link>
                    <Link className="link" to="/add">
                      Minhas solicitações
                    </Link>
                  </>
                )}
                <Link className="link" to="/orders">
                  Meu perfil
                </Link>
                <Link className="link" to="/messages">
                  Mensagens
                </Link>
                <Link className="link" to="/">
                  Logout
                </Link>
              </div>}
            </div>
          ) : (
            <>
              <span>Sign in</span>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Design Gráfico
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animação
            </Link>
            <Link className="link menuLink" to="/">
              Narrativas
            </Link>
            <Link className="link menuLink" to="/">
              Inteligência Artificial
            </Link>
            <Link className="link menuLink" to="/">
              Desenvolvimento de Sistemas
            </Link>
            <Link className="link menuLink" to="/">
              Musica & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
        
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;
