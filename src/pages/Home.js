import React from "react";
import { useState, useEffect } from "react";
import { getEncuestasFetch } from "../api/getEncuestasFetch";
import EncuestaCard from "../components/EncuestaCard";
import Header from "../components/Header";
import "../css/header.css";

const Home = () => {
  const [encuestas, setEncuestas] = useState([]);

  useEffect(() => {
    getEncuestasFetch()
      .then((data) => setEncuestas(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  console.log(encuestas);

  return (
    <>
      <Header />
      <div className="container my-5 text-center">
        <h2 className="mb-4 text-primary">Encuestas sobre videojuegos</h2>
        <div className="row">
          {encuestas.map((encuesta) => (
            <EncuestaCard key={encuesta._id} encuesta={encuesta} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
