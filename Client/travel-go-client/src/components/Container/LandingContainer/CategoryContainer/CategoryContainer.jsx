import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./CategoryContainer.module.scss";
import Button from "./../../../Button/Button";
import cowork from "./../../../../assets/4.png";
import { HeartFill } from "react-bootstrap-icons";
import { Camera, Water, Sun, Tsunami, Map, Tree, CupStraw, Sunset } from "react-bootstrap-icons";

const CategoryContainer = () => {
  return (
    <section className={classes["CategoryContainer"]}>
      <div className={classes["CategoryContainer__title"]}>
        <div>
          <h2>Espacios pensados solos para ti ❤️</h2>
          <p>
            No vivas encerrado en casa u oficina. Diviértete haciendo tus actividades de trabajo, conversa con tus amigos, recibe clases de manera cómoda, nosotros te ayudamos a que cada espacio se convierta en tu lugar necesario para vivir el momento.
          </p>
          <br></br>
          {/* Utiliza NavLink para redirigir al nuevo enlace */}
          <NavLink to="/place/:placeId">
            <Button modifierClass={"Button--white"}>Reserva tu sala de estudio</Button>
          </NavLink>
        </div>

        <div className="img-container">
          <img src={cowork} alt="" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default CategoryContainer;
