import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import HeroType2 from "../../components/HeroType2";
import ContactForm from "../../components/ContactForm";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="contact-page">
        <HeroType2 
          backgroundImage="/path/to/image.jpg" 
          title="Bienvenue" 
          subtitle="Nous contacter" 
        />
        <div className="contact-content">
          <h1>Contactez-nous</h1>
          <p>Nous sommes là pour vous aider !</p>
          <ContactForm />
        </div>
      </div>

      <iframe
        className="contact-map-iframe"
        src="https://www.google.com/maps?q=42.5078,1.5211&output=embed"
        width="100%"
        height="300"
        style={{ border: "0", marginTop: "20px" }}
        allowFullScreen
        loading="lazy"
      />
    </DefaultLayout>
  );
};

export default Contact;
