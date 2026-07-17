import React, { useState } from "react";
import "./Accordion.css";

function Accordion({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion-item">
      <button
        className="accordion-title"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {question}
        <span className="chev">{open ? "-" : "+"}</span>
      </button>
      {open && <div className="accordion-content">{answer}</div>}
    </div>
  );
}

export default Accordion;
