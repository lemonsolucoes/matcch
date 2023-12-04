import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Orders.scss";
import { gigs } from "../../data";
import StatusCard from "../../components/statusCard/statusCard";
import { API } from "../../api";

const Orders = () => {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  const gig = gigs[0]; // Escolha a posição desejada do array gigs
  const [requests, setRequests] = useState([]);

  const listAllRequests = async () => {
    const studentId = 17;

    try {
      const response = await API.getPendingUserList(studentId);
      const requests = await response.json();
      setRequests(requests);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    listAllRequests();
  }, []);

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Minhas solicitações</h1>
        </div>
        <div className="box">
          <h2>
            <i className="fa-sharp fa-solid fa-clock"></i> Solicitações
            Pendentes
          </h2>

          {requests
            .filter((r) => r.status === "pending")
            .map((r) => (
              <StatusCard key={r.id} userID={r.recipient_id} />
            ))}
        </div>

        <div className="box">
          <h4>
            <i className="fa-sharp fa-solid fa-circle-xmark"></i> Solicitações
            Recusadas
          </h4>

          {requests
            .filter((r) => r.status === "rejected")
            .map((r) => (
              <StatusCard key={r.id} userID={r.recipient_id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
