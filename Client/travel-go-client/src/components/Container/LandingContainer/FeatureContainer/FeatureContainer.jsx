import classes from "./FeatureContainer.module.scss";
import Button from "./../../../Button/Button";
import mockup from "./../../../../assets/shape.svg";
import work from "./../../../../assets/3.png";
import study from "./../../../../assets/11.png";
import food from "./../../../../assets/16.png";
import learn from "./../../../../assets/13.png";



const FeatureContainer = () => {
  return (
    <section className={classes["FeatureContainer"]}>
      <div className={classes["FeatureContainer__shape"]}>
      <img src={mockup}  alt="" aria-hidden="true" />
      </div>
      <div className={classes["FeatureContainer__title"]}>

        <h2>Nuestros
        Servicios </h2>

        <p> Sientete cómodo y concentrado en tu propio espacio de trabajo, acompañado de un buen ambiente y deliciosa comida, todo en un solo lugar.</p>
      </div>
    
      <div className={classes["FeatureContainer__content"]}>

       <div className={classes["FeatureContainer__cards"]}>

          <div className={classes["FeatureContainer__card"]}>
              <div className={classes["FeatureContainer__pic"]}>
                  <img src={work} alt="" aria-hidden="true"/>
              </div> 

            <div className={classes["FeatureContainer__text-card"]}>
              <h2>Trabaja</h2>
            <p>Por tu cuenta o con amigos</p>
            </div>
          </div>

          <div className={classes["FeatureContainer__card"]}>
            <div className={classes["FeatureContainer__pic"]}>
              <img src={food} alt="" aria-hidden="true"/>          
            </div> 
            <div className={classes["FeatureContainer__text-card"]}>
              <h2>Disfruta</h2>
              <p>nuestra deliciosa comida</p>
            </div>
          </div>

          <div className={classes["FeatureContainer__card"]}>
            <div className={classes["FeatureContainer__pic"]}>
              <img src={study} alt="" aria-hidden="true"/>          
            </div> 
            <div className={classes["FeatureContainer__text-card"]}>
              <h2>Estudia</h2>
              <p>con mayor comodidad</p>
            </div>
          </div>

          <div className={classes["FeatureContainer__card"]}> 
            <div className={classes["FeatureContainer__pic"]}>
              <img src={learn} alt="" aria-hidden="true"/> 
            </div> 
            <div className={classes["FeatureContainer__text-card"]}>
              <h2>Amplia</h2>
              <p>tus conocimientos</p>
            </div>
          </div>
       </div>

       <div className={classes["FeatureContainer__feature"]}>
          <div className={classes["FeatureContainer__info"]}>
            <div className={classes["FeatureContainer__icon"]}>
            <Button modifierClass="Button--baby_blue"><p>📚</p></Button>
          </div>
            <div className={classes["FeatureContainer__text"]}>
          <h2>Pensamos en tu comodidad</h2>
          <p> Nuestras salas están pensadas para ser accesibles para cualquier tipo de trabajo que desees hacer, ya sea por tu cuenta o en grupo.</p>
          </div>
          </div>
          <div className={classes["FeatureContainer__info"]}>
            <div className={classes["FeatureContainer__icon"]}>
            <Button modifierClass="Button--cute_pink"><p>💻</p></Button>
          </div>
            <div className={classes["FeatureContainer__text"]}>
          <h2>Excelente ambiente</h2>
          <p>Contamos con un ambiente agradable y dinámico para que puedas adaptarte al trabajo grupal o en solitario mientras también disfrutas de nuestros otros servicios de cafeteria.</p>
          </div>
          </div>
          <div className={classes["FeatureContainer__info"]}>
            <div className={classes["FeatureContainer__icon"]}>
            <Button modifierClass="Button--light_yellow"><p>💸</p></Button>
          </div>
            <div className={classes["FeatureContainer__text"]}>
          <h2>Cuidamos tus bolsillo</h2>
          <p>Los precios están pensados para ser accesibles para cualquier persona, buscamos ofrecerte cada vez más a tu espacio ideal de trabajo, sin tener que sacrificar gran parte de tu presupuesto.</p>
          </div>
          </div>

        </div>
       </div>

</section>
  );
};

export default FeatureContainer;
