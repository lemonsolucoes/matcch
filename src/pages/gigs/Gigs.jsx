import React, { useRef, useState } from "react";
import "./Gigs.scss";
import { gigs } from "../../data";
import GigCard from "../../components/gigCard/GigCard";
import MultiFilters from "../../MultiFilters";

function Gigs() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = () => {
    console.log(minRef.current.value);
    console.log(maxRef.current.value);
  };

  return (
    <div className="gigs">
      <div className="container">
        <center>
          {" "}
          <h1>
            Qual é o ma<span className="tcc">tcc</span>h ideal para o seu TCC?
          </h1>
        </center>

        <div className="App">
          <center>
            <p>Filtre por:</p>
          </center>
          <MultiFilters />
        </div>
      </div>
    </div>
  );
}

export default Gigs;
