import React from "react";
import "./ElsNostresEspais.css";
import { Link } from "react-router-dom";

const ElsNostresEspais = () => {
  return (
    <section className="espais-section">
      <div className="espais-grid">
        <Link to="/viu-la-natura" className="espai-card">
          <img
            src="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouservies/viu-la-natura2.webp"
            alt="Viu la Natura"
            className="els-nostres-espais-image"
          />
          <span className="espai-title">VIU LA NATURA</span>
          <span className="espai-link">Més informació</span>
        </Link>

        <Link to="/viu-la-ciutat" className="espai-card">
          <img
            src="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477624/sample.jpg"
            alt="Viu la Ciutat"
            className="els-nostres-espais-image"
          />
          <span className="espai-title">VIU LA CIUTAT</span>
          <span className="espai-link">Més informació</span>
        </Link>
      </div>

      <h2 className="espais-subtitle">Per cada necessitat, un espai</h2>

      <div className="espais-grid">
        <Link to="/espais-de-negoci" className="espai-card">
          <img
            src="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477624/sample.jpg"
            alt="Espais de Negoci"
            className="els-nostres-espais-image"
          />
          <span className="espai-title">ESPAIS DE NEGOCI</span>
          <span className="espai-link">Més informació</span>
        </Link>

        <Link to="/poligon-i-industria" className="espai-card">
          <img
            src="https://res.cloudinary.com/dkgbfvjrc/image/upload/v1745477624/sample.jpg"
            alt="Polígon i Indústria"
            className="els-nostres-espais-image"
          />
          <span className="espai-title">POLÍGON I INDUSTRIA</span>
          <span className="espai-link">Més informació</span>
        </Link>
      </div>
    </section>
  );
};

export default ElsNostresEspais;
