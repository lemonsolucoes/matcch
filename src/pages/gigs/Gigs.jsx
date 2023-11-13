import React, { useRef, useState } from "react";
import "./Gigs.scss";
import { gigs } from "../../data";
import GigCard from "../../components/gigCard/GigCard";

function Gigs() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = ()=>{
    console.log(minRef.current.value)
    console.log(maxRef.current.value)
  }

  return (
    <div className="gigs">
      <div className="container">
       <center> <h1>Qual é o matcch ideal para o seu TCC?</h1></center>
        <p>
          Filtre por:
        </p>
        <div className="menu">
          <div className="left">
            <span>Teste</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Aplicar</button>
          </div>
          <div className="right">
            <span className="sortBy">Ordernar por:</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Teste</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Teste</span>
                  )}
                  <span onClick={() => reSort("sales")}>Teste</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gigs;
