import classes from "./LandingInformation.module.scss";
import logoPic from "./../../../../assets/coffee-tech.png";
import Button from "./../../../Button/Button";
import { Laptop } from "react-bootstrap-icons";
import { Stars } from "react-bootstrap-icons";
import {Flower1} from "react-bootstrap-icons";
import { Cursor } from "react-bootstrap-icons";

const LandingInformation = () => {
  return (
    <section className={classes["LandingInformation"]}>
      <div className={classes["LandingInformation__title"]}>
        <div className={classes["left-content"]}>
          <h2>Acerca de nosotros</h2>
          <p>Somos un espacio de trabajo diseñado para que puedas hacer coworking o estudiar por tu cuenta.</p>
          <p>Sabemos que necesitas comodidad para concentrarte, nosotros te ofrecemos una amplia selección de salas
            que puedes reservar durante el tiempo que quieras.</p>
        </div>
        <div className={classes["right-content"]}>
          <div className="logo-container">
            <img src={logoPic} alt="" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingInformation;
