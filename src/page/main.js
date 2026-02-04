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
            <div className="sidebar">

            </div>
            <Footer/>
        </>
    );
}