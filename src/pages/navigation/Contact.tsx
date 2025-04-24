import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ContactForm.css";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isValid, setIsValid] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (name && email && message) {
      console.log("Message envoyé :", formData);
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contactez-nous</h2>
        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={formData.name}
          onChange={handleChange}
          className={!isValid && !formData.name ? "error" : ""}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={!isValid && !formData.email ? "error" : ""}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className={!isValid && !formData.message ? "error" : ""}
        />
        <motion.button
          type="submit"
          whileTap={{ scale: 0.95 }}
          className="submit-button"
        >
          ENVOYEZ
        </motion.button>
        {!isValid && <p className="error-message">Tous les champs sont requis.</p>}
      </form>
    </div>
  );
};

export default ContactForm;