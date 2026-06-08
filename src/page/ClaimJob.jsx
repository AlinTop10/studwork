import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getClaimByToken } from "../services/claim";
import "../css/ClaimJob.css";
import { createCheckoutSession } from "../services/payment";

export default function ClaimJob() {
  const { token } = useParams();

  const [claimData, setClaimData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadClaim = async () => {
      try {
        const data = await getClaimByToken(token);
        setClaimData(data);
      } catch (error) {
        setError(error.response?.data?.message || "Link invalid sau expirat.");
      } finally {
        setLoading(false);
      }
    };

    loadClaim();
  }, [token]);

  const handleTakeJob = async () => {
  try {
    const data = await createCheckoutSession(token);

    window.location.href = data.url;
  } catch (error) {
    setError(error.response?.data?.message || "Nu s-a putut porni plata.");
  }
};

  if (loading) {
    return <div className="claim-page">Se încarcă...</div>;
  }

  if (error) {
    return (
      <div className="claim-page">
        <div className="claim-card error">
          <h2>Link indisponibil</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  const { cerere, available } = claimData;

  return (
    <div className="claim-page">
      <div className="claim-card">
        <div className="claim-badge">
          {available ? "Disponibilă" : "Deja rezervată"}
        </div>

        <h1>Oportunitate de muncă</h1>

        <div className="claim-info">
          <p><strong>Detalii:</strong> {cerere.detalii}</p>
          <p><strong>Locație:</strong> {cerere.locatie}</p>
          <p><strong>Persoane:</strong> {cerere.nr_persoane}</p>
          <p>
            <strong>Când:</strong>{" "}
            {new Date(cerere.ora).toLocaleString("ro-RO", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit"
            })}
          </p>
          <p><strong>Plată:</strong> {cerere.plata} {cerere.moneda}</p>
        </div>

        <div className="claim-warning">
          <strong>Important:</strong>
          <p>
            Studwork doar facilitează contactul dintre persoane. Platforma nu garantează
            siguranța întâlnirii și nu verifică direct participanții. Acceptarea lucrării
            se face pe propria răspundere.
          </p>

          <label className="claim-check">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              disabled={!available}
            />
            Am citit și sunt de acord cu această condiție.
          </label>
        </div>

        <button
          className="claim-button"
          disabled={!accepted || !available}
          onClick={handleTakeJob}
        >
          Ia lucrarea
        </button>
      </div>
    </div>
  );
}