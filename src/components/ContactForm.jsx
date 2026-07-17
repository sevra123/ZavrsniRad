import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const e = {};
    if(!data.name || data.name.trim().length < 3) e.name = "Unesite ime i prezime (min 3 znaka).";
    if(!data.email) e.email = "Unesite email.";
    if(data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Email format nije ispravan.";
    if(!data.topic) e.topic = "Odaberite temu.";
    if(!data.message || data.message.trim().length < 10) e.message = "Poruka mora imati najmanje 10 znakova.";
    if(!data.consent) e.consent = "Potvrdite privolu.";
    setErrors(e);
    return Object.keys(e).length === 0; 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validate()) {
      alert("Poruka uspješno poslana!"); 
      setData({name:"", email:"", phone:"", topic:"", message:"", consent:false});.
      setErrors({});
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label>Ime i prezime</label>
        <input
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="npr. Ana Anić"
        />
        {errors.name && <small className="error">{errors.name}</small>}
      </div>
      <div className="field">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="ana@example.com"
        />
        {errors.email && <small className="error">{errors.email}</small>}
      </div>
      <div className="field">
        <label>Telefon (opcionalno)</label>
        <input
          name="phone"
          value={data.phone}
          onChange={handleChange}
          placeholder="+385 91 123 4567"
        />
      </div>
      <div className="field">
        <label>Tema</label>
        <select name="topic" value={data.topic} onChange={handleChange}>
          <option value="">Odaberite...</option>
          <option value="rezervacija">Rezervacija</option>
          <option value="upit">Upit</option>
          <option value="reklamacija">Reklamacija</option>
          <option value="ostalo">Ostalo</option>
        </select>
        {errors.topic && <small className="error">{errors.topic}</small>}
      </div>
      <div className="field">
        <label>Poruka</label>
        <textarea
          name="message"
          value={data.message}
          onChange={handleChange}
          rows={5}
          placeholder="Opišite pitanje..."
        />
        {errors.message && <small className="error">{errors.message}</small>}
      </div>
      <label className="consent">
        <input
          type="checkbox"
          name="consent"
          checked={data.consent}
          onChange={handleChange}
        />{" "}
        Prihvaćam uvjete obrade podataka
      </label>
      {errors.consent && <small className="error">{errors.consent}</small>}
      <button className="btn" type="submit">
        Pošalji
      </button>
    </form>
  );
}

export default ContactForm;
