import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import HeroType2 from "../../components/HeroType2";
import ContactForm from "../../components/ContactForm";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <DefaultLayout
      title="Contacta'ns"
      description="Pàgina de contacte per a ACD Invest"
    >
      <div className="contact-page">
        <HeroType2
          backgroundImage="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament.webp"
          title="Bienvenue"
          subtitle="Contacta'ns"
          alt="Poseu-vos en contacte amb l'equip d'ACD Invest"
        />
        <div className="contact-content">
          <h1 className="page-title">Contacta'ns</h1>
          <h2 className="intro-text">Som aquí per ajudar-te!</h2>
          <ContactForm />
        </div>
      </div>

      <div className="zone-info-block">
        <div className="zone-distances">
          <p>Frontera espanyola: 5,9km</p>
          <p>Frontera fancesa: 25,7km</p>
          <p>Andorra la Vella: 5,3km</p>
        </div>
        {/* Lien vers Google Maps */}
        <iframe
          className="map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5885.531996555543!2d1.4767823863459544!3d42.475265259281905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a5f59c74ff0a6d%3A0x58ae97ce7cd9d2c0!2sQuetx!5e0!3m2!1sfr!2sad!4v1746432300348!5m2!1sfr!2sad"
          width="100%"
          height="300"
          style={{ border: "0", marginTop: "20px" }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </DefaultLayout>
  );
};

export default Contact;
