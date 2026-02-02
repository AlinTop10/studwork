import React from 'react';
import bg from "../img/bg.png";
import  "./Itemss.css";

export default function Items() {
  return (
    <>
      {/* HERO SECTION */}
      <div className='items'>
        <section className="welcome-block">
          <div className="first-blok">
            <h1>
              Web-site<span className="title"> Studwork</span>
            </h1>

            <h2 style={{ marginBottom: "7%", marginTop: "7%" }}>
              Ai nevoie de <span style={{ color: "#4824ff" }}>ajutoare?</span><br />
              Noi <span style={{ color: "#4824ff" }}>te conectăm</span> rapid,<br />
              și sigur.
            </h2>

            <h3>
              Găsește <span style={{ color: "#4824ff" }}>ajutorul</span> potrivit,<br />
              exact când ai nevoie.
            </h3>
          </div>

          <div className="main-image-box">
            <img className="image" src={bg} alt="Studwork" draggable="false" />
          </div>
        </section>

        {/* DESPRE NOI SECTION */}
        <section id='despre-noi' className="service-block">
            <h1 style={{fontSize: "52px"}}>Despre noi</h1>
            <p style={{fontSize: "27px"}}>
              <span style={{ color: "#4824ff" }}>Studwork </span>
              este o platformă care conectează rapid persoanele care au nevoie de ajutor cu <br/>
              oameni disponibili și de încredere, în special studenți dornici să muncească.<br/>
              <span style={{ color: "#4824ff" }}>La Studwork</span>, punem accent pe:
            </p>

            <div className="tags">
              <p className='tag'><p className='tag-icon'/>
              Comunicare clară</p>
              <p className='tag'><p className='tag-icon'/>
              Oameni verificați</p>
              <p className='tag'><p className='tag-icon'/>
              Colaborări corecte și sigure</p>
              <p className='tag'><p className='tag-icon'/>
              Ajutor rapid</p>
            </div>

            <p style={{ fontSize: "27px"}}> 
              Ne adresăm celor care caută <span style={{ color: "#4824ff" }}>soluții simple </span> pentru activități de zi cu zi: curățenie, mutări,<br/> 
              evenimente, lucrări ocazionale sau alte servicii care necesită sprijin rapid.<br/> 
              În același timp, oferim <span style={{ color: "#4824ff" }}> studenților oportunitatea </span> de a câștiga bani într-un mod flexibil, <br/>
              adaptat programului lor.
            </p>
        </section>
      </div>
    </>
  );
}

