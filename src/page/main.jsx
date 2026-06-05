import Footer from "../components/Footer";
import "./main.css";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../services/account";
import RequestForm from "../components/RequestForm";
import { useState } from "react";

export default function Main() {
    const navigate = useNavigate();
    const savedUser = JSON.parse(localStorage.getItem("user"));
    const userName = savedUser?.nume || "Utilizator";
    const userInitial = userName.charAt(0).toUpperCase();

    const [showRequestForm, setShowRequestForm] = useState(false);

    const handleLogout = async () => {
    try {
        await logoutUser();
    } catch (error) {
        console.log("Logout error:", error);
    } finally {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login", { replace: true });
    }
    };

    return (
        <>
            <header>
                <div className='header-top'>
                    <span className='logo'>Studwork.ro</span>
                    <nav>
                    <ul className='nav'>
                        <li><a href='#contacte'>Contacte</a></li>
                        <li className='auth'>
                            <button className='btn register' onClick={handleLogout}>
                                Log out
                            </button>
                        </li>
                    </ul>
                    </nav>
                </div>
            </header>
            <div className="container">
                <div className="layout">
                    <aside className="sidebar">
                        <div className="sb-card">
                            <div className="sb-avatar">{userInitial}</div>
                            <div className="sb-user">
                                <div className="sb-name">{userName}</div>
                                <div className="sb-role">Student / Helper</div>
                            </div>
                        </div>

                        <nav className="sb-nav">
                            <button className="sb-item active">
                                <i className="bx bx-grid-alt" />
                                <span>Dashboard</span>
                            </button>

                            <button className="sb-item">
                                <i className="bx bx-briefcase" />
                                <span>Cereri</span>
                            </button>

                            <button className="sb-item">
                                <i className="bx bx-chat" />
                                <span>Mesaje</span>
                            </button>

                            <button className="sb-item">
                                <i className="bx bx-bell" />
                                <span>Notificări</span>
                            </button>

                            <button className="sb-item">
                                <i className="bx bx-cog" />
                                <span>Setări</span>
                            </button>
                        </nav>
                    </aside>

                    <main className="content">
                        <div className="content-header">
                            <div>
                                <h2 className="content-title">Cerere</h2>
                                <p className="content-subtitle">Creează o cerere rapid și sigur.</p>
                            </div>

                                <button 
                                    className="content-primary"
                                    onClick={() => setShowRequestForm(!showRequestForm)}
                                >
                                    <i className={`bx ${showRequestForm ? "bx-minus" : "bx-plus"}`} />
                                    {showRequestForm ? "Închide cererea" : "Creează cerere"}
                                </button>
                        </div>

                        <div className="page-card">
                        {showRequestForm ? (
                            <RequestForm />
                            ) : (
                                <>
                                <h2>Bun venit!</h2>
                                <p>
                                    Aici vei putea crea și gestiona cererile tale.
                                    Pentru început, apasă pe <strong>„Creează cerere”</strong> — formularul va apărea în această zonă.
                                </p>

                                <div className="page-hint">
                                    <div className="hint-row">
                                    <span className="hint-dot"></span>
                                    Completezi ce ai nevoie (ex: tip serviciu, locație, dată).
                                    </div>
                                    <div className="hint-row">
                                    <span className="hint-dot"></span>
                                    Trimiți cererea și primești răspuns.
                                    </div>
                                    <div className="hint-row">
                                    <span className="hint-dot"></span>
                                    Urmărești statusul cererii.
                                    </div>
                                </div>
                                </>
                        )}
</div>
                    </main>
                </div>
            </div>
            <Footer/>
        </>
    );
}