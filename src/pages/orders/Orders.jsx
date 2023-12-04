import React from "react";
import { Link } from "react-router-dom";
import "./Orders.scss";

const Orders = () => {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Minhas solicitações</h1>
        </div>
        <div className="box"> 
<h2>Solicitações Pendentes</h2>

        </div>

      </div>
    </div>
  );
};

export default Orders;
