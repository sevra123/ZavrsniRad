import React from "react";
import { Link } from "react-router-dom";
import "./TourCard.css";

function TourCard({
  id,
  image,
  title,
  destination,
  duration,
  description,
  price,
}) {
  return (
    <div className="card tour-card">
      <img src={image} alt={title} />
      <div className="card-body">
        <h3>{title}</h3>
        <p className="muted">
          <span className="pill">{destination}</span>
          <span className="pill">{duration}</span>
        </p>
        <p>{description}</p>
        <div className="tour-bottom">
          <span className="price">{price} €</span>
          <Link to={`/tours/${id}`} className="btn">
            Detalji
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TourCard;
