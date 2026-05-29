import { useState } from "react";
import "../css/RequestForm.css";


export default function RequestForm() {
  const [formData, setFormData] = useState({
    titlu: "",
    categorie: "",
    descriere: "",
    locatie: "",
    data: "",
    ora: "",
    buget: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Cerere nouă:", formData);

    // aici mai târziu trimitem datele la backend
  };

  return (
    <form className="request-form" onSubmit={handleSubmit}>
      <h2>Creează o cerere</h2>
      <p className="request-form-subtitle">
        Completează detaliile cererii tale pentru ca studenții disponibili să poată răspunde.
      </p>

      <div className="form-grid">
        <div className="form-group">
          <label>Titlu cerere</label>
          <input
            type="text"
            name="titlu"
            placeholder="Ex: Am nevoie de ajutor la mutare"
            value={formData.titlu}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Categorie</label>
          <select
            name="categorie"
            value={formData.categorie}
            onChange={handleChange}
            required
          >
            <option value="">Alege categoria</option>
            <option value="curatenie">Curățenie</option>
            <option value="mutare">Mutare</option>
            <option value="evenimente">Evenimente</option>
            <option value="cumparaturi">Cumpărături</option>
            <option value="alte_servicii">Alte servicii</option>
          </select>
        </div>

        <div className="form-group full">
          <label>Descriere</label>
          <textarea
            name="descriere"
            placeholder="Descrie pe scurt ce ai nevoie..."
            value={formData.descriere}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Locație</label>
          <input
            type="text"
            name="locatie"
            placeholder="Ex: Galați, Mazepa"
            value={formData.locatie}
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
          />
        </div>

        <div className="form-group">
          <label>Buget estimativ</label>
          <input
            type="number"
            name="buget"
            placeholder="Ex: 100"
            value={formData.buget}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <button type="submit" className="request-submit">
        Publică cererea
      </button>
    </form>
  );
}