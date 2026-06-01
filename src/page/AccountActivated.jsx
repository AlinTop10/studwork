import { Link } from "react-router-dom";
import "../css/AccountActivated.css";

export default function AccountActivated() {
  return (
    <div className="activated-page">
      <div className="activated-card">
        <div className="activated-icon">
          <i className="bx bx-check-circle"></i>
        </div>

        <h1>Cont activat cu succes!</h1>

        <p>
          Adresa ta de email a fost confirmată. Acum te poți autentifica în contul tău Studwork.
        </p>

        <Link to="/login" className="activated-btn">
          Mergi la autentificare
        </Link>
      </div>
    </div>
  );
}