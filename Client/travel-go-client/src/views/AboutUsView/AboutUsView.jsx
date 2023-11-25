import classes from "./AboutUsView.module.scss";
import Header from "../../components/Header/Header";
import FooterAttribution from "../../components/Footer/FooterAttribution/FooterAttribution";
import intro from "./../../assets/intro_pic.png";
import mongo from "./../../assets/mongo.png";
import react from "./../../assets/react.png";
import node from "./../../assets/node.png";
import express from "./../../assets/express.png";
import Footer from "../../components/Footer/Footer";

import Button from "../../components/Button/Button";




const AboutUsView = ({ className, ...rest }) => {
  return (
    <>
      <Header />
      <main>
        <section className={classes["AboutUs"]} {...rest}>
          
          <div className={classes["AboutUs__content"]}>
            <div className={classes["AboutUs__introduction"]}>
 
              <p className={classes["AboutUs__intro-text"]}>
              <h1 className={classes["AboutUs__title"]}>¡Conoce más sobre nosotros!</h1> 

              <b><span>Quienes somos</span></b>
              <br></br>
              En Coffee Tech, nos enorgullece ser pioneros en la creación de soluciones innovadoras para mejorar la experiencia de trabajo y estudio en espacios compartidos. Somos un equipo apasionado de profesionales dedicados a brindar servicios de calidad que se adaptan a las necesidades cambiantes de nuestros usuarios. Nuestra visión es crear un entorno acogedor y productivo donde la comunidad pueda disfrutar de espacios de coworking modernos y servicios de cafetería de alta calidad. En Coffee Tech, nos esforzamos por fomentar la colaboración, la productividad y el bienestar en un ambiente inspirador.
              </p>
                <div className={classes["AboutUs__pic"]}>
                  <img src={intro} alt="" aria-hidden="true"/>
              </div>            
            </div>
<br></br>

            <div className={classes["AboutUs__content-mision"]}>
              <div className={classes["AboutUs__mision-vision"]}>
                <div className={classes["AboutUs__mision"]}>
                <b><span>Misión</span></b>
                <br></br>
                <p>Buscamos generar un impacto para los estudiantes con espacios innovadores y cómodos, nuestro objetivo principal es incrementar los espacios de estudio en zonas universitarias, promoviendo el consumo local y generando empleos directos e indirectos.

                </p>
                </div>
                <div className={classes["AboutUs__vision"]}>
                <b><span>Vísion</span></b>
                <br></br>
                <p>Creemos que te mereces una experiencia trabajo propia, es por eso que cada espacio es cuidadosamente armado para tu completo disfute. Ten por seguro que en cada espacio de trabajo que escojas podrás sentirte cómodo, dandote un mejor rendimiento en tu trabajo, mientras eres parte del consumir local.
                </p>
                </div>
              </div>
            </div>
            
            <div className={classes["AboutUs__content-values"]}>
               <div className={classes["AboutUs__values"]}>
                <b><span>Comunidad y Medio Ambiente</span></b>
                <br></br>
                <p>Buscamos generar un impacto social a través del  turismo, nuestro objetivo principal es incrementar la actividad turística en la región.
                </p>
                <b><span>Satisfacción del consumidor</span></b>
                <br></br>
                <p>Buscamos generar un impacto social a través del  turismo, nuestro objetivo principal es incrementar la actividad turística en la región.
                </p>
              </div>
              <div className={classes["AboutUs__values"]}>
                <b><span>Experiencia de servicio 360</span></b>
                <br></br>
                <p>Buscamos generar un impacto social a través del  turismo, nuestro objetivo principal es incrementar la actividad turística en la región.
                </p>
                <b><span>Innovación y diversidad</span></b>
                <br></br>
                <p>Buscamos generar un impacto social a través del  turismo, nuestro objetivo principal es incrementar la actividad turística en la región.
                </p>
              </div>

            </div>

        

          <div className={classes["AboutUs__content-techs"]}>
            <br></br>
            <h1 className={classes["AboutUs__title"]}>Tecnologias que hacen posible la magia</h1> 
            <div className={classes["AboutUs__card-tech"]}>
              <div className={classes["AboutUs__tech"]}>
                  <div className={classes["AboutUs__pic-tech"]}>
                    <img src={mongo} alt="" aria-hidden="true"/>
                  </div>            
                    <h2>MongoDB</h2>
              </div>
              <div className={classes["AboutUs__tech"]}>
                  <div className={classes["AboutUs__pic-tech"]}>
                    <img src={react} alt="" aria-hidden="true"/>
                  </div>            
                    <h2>React</h2>
              </div>
              <div className={classes["AboutUs__tech"]}>
                  <div className={classes["AboutUs__pic-tech"]}>
                    <img src={express} alt="" aria-hidden="true"/>
                  </div>            
                    <h2>Express</h2>
              </div>
              <div className={classes["AboutUs__tech"]}>
                  <div className={classes["AboutUs__pic-tech"]}>
                    <img src={node} alt="" aria-hidden="true"/>
                  </div>            
                    <h2>Node</h2>
              </div>
          </div>
          
          </div>

          <div className={classes["AboutUs__content-nosotros"]}>
              <div className={classes["AboutUs__github"]}>
                <div className={classes["AboutUs__info"]}>
                <h1 className={classes["AboutUs__title"]}>¿Quieres saber más de nosotrsos?</h1>   
                <p>Si te interesa conocer más acerca de lo que hacemos y de como funciona Coffe Tech, puedes visitar nuestros respositorios de GitHub. Si te interesa conocer más acerca de lo que hacemos y de como funciona Coffe Tech, puedes visitar nuestros respositorios de GitHub. Si te interesa conocer más acerca de lo que hacemos 
                </p>
                </div>
                <div className={classes["AboutUs__repos"]}>
          
                  <div className={classes["AboutUs__repos-git"]}>
                  <div className={classes["AboutUs__text"]}>
                  <div className={classes["AboutUs__icon"]}>
                  <Button modifierClass="Button--cute_pink"><p>❤</p></Button>
                </div>
                <div className={classes["AboutUs__repo-link"]}>
                <h2>Fernanda Vásquez</h2>
                <a href="https://github.com/cam-vasquez" target="_blank"  rel="noreferrer noopener">cam-vasquez</a>
                </div>
                </div>
                <div className={classes["AboutUs__text"]}>
                  <div className={classes["AboutUs__icon"]}>
                  <Button modifierClass="Button--light_yellow"><p>❤</p></Button>
                </div>
                <div className={classes["AboutUs__repo-link"]}>
                <h2>Andrea Rodríguez</h2>
                <a href="https://github.com/Andrea-09" target="_blank"  rel="noreferrer noopener">Andrea-09</a>
                </div>
                </div>
                <div className={classes["AboutUs__text"]}>
                  <div className={classes["AboutUs__icon"]}>
                  <Button modifierClass="Button--baby_blue"><p>❤</p></Button>
                </div>
                <div className={classes["AboutUs__repo-link"]}>
                <h2>Stanley Hurtado</h2>
                <a href="https://github.com/" target="_blank"  rel="noreferrer noopener">StanleyHurtado</a>
                </div>
                </div>
               
                
                

              </div>

             

              </div>
            </div>
            </div>





          </div>
           
        </section>
      </main>
            
    </>
  );
};

export default AboutUsView;
