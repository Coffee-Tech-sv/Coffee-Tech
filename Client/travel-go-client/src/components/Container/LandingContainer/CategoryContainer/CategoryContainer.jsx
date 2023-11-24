import classes from "./CategoryContainer.module.scss";
import Button from "./../../../Button/Button";
import cowork from "./../../../../assets/4.png";


import {Camera, Water,Sun,Tsunami,Map,Tree,CupStraw,Sunset} from "react-bootstrap-icons";



const CategoryContainer = () => {
  return (
    <section className={classes["CategoryContainer"]}>
      <div className={classes["CategoryContainer__title"]}>
        <h2>Espacios pensados solos para ti</h2>
        <p>
          No vivas encerrado en casa u oficina. Divierte haciendo tus actividades de trabajo, conversa con tus amigos, recibe clases de manera comoda, nosotros te ayudamos a que cada espacio se convierta en tu lugar necesario para vivir el momento. 
        </p>
        <div className="img-container">
            <img src={cowork} alt="" aria-hidden="true" />
          </div>
      </div>
      <div className={classes["CategoryContainer__categories"]}>
       
        <Button modifierClass={"Button--white"}>Reserva tu sala de estudio</Button>
       
      
      </div>
    </section>
  );
};







export default CategoryContainer;
