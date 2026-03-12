import Footer from "../components/Footer";
import "./main.css"

export default function Main() {
    return (
        <>
            <header>
                <div className='header-top'>
                    <span className='logo'>Studwork.ro</span>
                    <nav>
                    <ul className='nav'>
                        <li><a href='#contacte'>Contacte</a></li>
                        <li className='auth'>
                            <button className='btn register'>Log out</button>
                        </li>
                    </ul>
                    </nav>
                </div>
            </header>
            <div className="container">
                <div className="layout">
                    <aside className="sidebar">
                        <div className="sb-card">
                            <div className="sb-avatar">D</div>
                            <div className="sb-user">
                                <div className="sb-name">Davyd</div>
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

                            <button className="content-primary">
                                <i className="bx bx-plus" />
                                Creează cerere
                            </button>
                        </div>

                        <div className="page-card">
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
                        </div>
                    </main>
                </div>
            </div>
            <Footer/>
        </>
    );
}