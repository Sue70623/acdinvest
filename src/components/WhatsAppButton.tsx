import React from "react";
import "./WhatsAppButton.css";
import { FaWhatsapp } from "react-icons/fa"; // Import de l'icône WhatsApp

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "33631307849"; // Remplacez par le numéro souhaité
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
