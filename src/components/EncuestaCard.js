import React from "react";
import { Link } from "react-router-dom";

const EncuestaCard = ({ encuesta }) => {
  const categorys = encuesta.category.split(",");

  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm movie-card">
        <Link to="/formulario">
          <img
            src={"http://localhost:3844/" + encuesta.image}
            alt={encuesta.title}
            className="card-img-top"
          />{" "}
        </Link>
        <div className="card-body">
          <h5 className="card-title fs-3">{encuesta.title}</h5>
          <div className="additional-info">
            <p>
              <span className="fw-bold">Categoria: </span>
              {categorys.map((item) => (
                <span className=" text-secondary" key={item}>
                  {item}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EncuestaCard;
