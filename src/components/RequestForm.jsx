import { useState } from "react";
import "../css/RequestForm.css";
import { cerereRequest } from "../services/request";


export default function RequestForm() {
  const [formData, setFormData] = useState({
    detalii: "",
    nr_persoane: 1,
    data: "",
    ora: "",
    plata: "",
    moneda: "RON",
    preferinta_gender: "ORICARE"
  });

  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const showSuccess = (message) => {
    setSuccess(message);
    setTimeout(() => setSuccess(null), 3500);
  };

  const showError = (message) => {
    setError(message);
    setTimeout(() => setError(null), 3500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));
    console.log(savedUser.id)

    const cerereData = {
      idUser: savedUser.id,
      detalii: formData.detalii,
      nr_persoane: Number(formData.nr_persoane),
      ora: `${formData.data} ${formData.ora}`,
      plata: Number(formData.plata),
      moneda: formData.moneda,
      preferinta_gender: formData.preferinta_gender
    };

    try{
      const response = await cerereRequest(cerereData);
      console.log("cerere salvata:", response);
      showSuccess("Cererea a fost publicată cu succes!");
    }catch(error) {
      showError(error.response?.data?.message || "Eroare la publicarea cererii.");
    }
  };

  return (
    <form className="request-form" onSubmit={handleSubmit}>
      {success && (
        <div className="request-toast success">
          <i className="bx bx-check-circle"></i>
          <span>{success}</span>
        </div>
      )}

      {error && (
        <div className="request-toast error">
          <i className="bx bx-error-circle"></i>
          <span>{error}</span>
        </div>
      )}
      <h2>Creează o cerere</h2>

      <p className="request-form-subtitle">
        Completează detaliile cererii tale pentru ca studenții disponibili să poată răspunde.
      </p>

      <div className="form-grid">
        <div className="form-group full">
          <label>Detalii cerere</label>
          <textarea
            name="detalii"
            placeholder="Ex: Am nevoie de ajutor la mutare, 2 ore, etajul 3..."
            value={formData.detalii}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Număr persoane</label>
          <input
            type="number"
            name="nr_persoane"
            min="1"
            value={formData.nr_persoane}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Data</label>
          <input
            type="date"
            name="data"
            value={formData.data}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Ora</label>
          <input
            type="time"
            name="ora"
            value={formData.ora}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Plata</label>
          <input
            type="number"
            name="plata"
            placeholder="Ex: 100"
            min="1"
            value={formData.plata}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Moneda</label>
          <select
            name="moneda"
            value={formData.moneda}
            onChange={handleChange}
            required
          >
            <option value="RON">RON</option>
            <option value="EUR">EUR</option>
          </select>
        </div>

        <div className="form-group">
          <label>Preferință gen</label>
          <select
            name="preferinta_gender"
            value={formData.preferinta_gender}
            onChange={handleChange}
            required
          >
            <option value="ORICARE">Oricare</option>
            <option value="DOAR_FETE">Doar fete</option>
            <option value="DOAR_BAIETI">Doar băieți</option>
          </select>
        </div>
      </div>

      <button type="submit" className="request-submit">
        Publică cererea
      </button>
    </form>
  );
}