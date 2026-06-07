import { useEffect, useState } from "react";
import "../css/MyRequests.css";
import { getMyRequests } from "../services/request";


export default function MyRequests() {
const [requests, setRequests] = useState([]);

useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    getMyRequests(savedUser.id)
        .then(data => {
            setRequests(data);
        })
        .catch(error => {
            console.log(error);
        });

}, []);


  return (
    <div className="my-requests">
      <div className="my-requests-header">
        <div>
          <h2>Cererile mele</h2>
          <p>Vezi cererile publicate de tine și statusul lor.</p>
        </div>
      </div>

      <div className="requests-list">
        {requests.map((request) => (
          <div className="request-card" key={request.idCerere}>
            <div className="request-card-top">
              <span className={`status-badge ${request.statusCerere.toLowerCase()}`}>
                {request.statusCerere}
              </span>

              <span className="request-price">{request.plata}</span>
            </div>

            <h3>{request.detalii}</h3>

            <div className="request-meta">
              <span>
                <i className="bx bx-user"></i>
                {request.nr_persoane} persoane
              </span>

              <span>
                <i className="bx bx-time"></i>
                {new Date(request.ora).toLocaleString("ro-RO")}
              </span>
            </div>

            <div className="request-actions">
              <button>Vezi detalii</button>
              <button className="secondary">Anulează</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}