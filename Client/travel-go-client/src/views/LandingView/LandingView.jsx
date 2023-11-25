import classes from "./LandingView.module.scss";
import Button from "../../components/Button/Button";
import CategoryContainer from "../../components/Container/LandingContainer/CategoryContainer/CategoryContainer";
import FeatureContainer from "../../components/Container/LandingContainer/FeatureContainer/FeatureContainer";
import MenuContainer from "../../components/Container/ExploreContainer/ExploreContainer";
import Container from "../../components/Container/Container";
import Place from "../../components/Trips/Places/Places";
import Header from "../../components/Header/Header";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { randomPlace } from "../../services/placeServer";
import { useNavigate } from "react-router-dom";


const LandingView = () => {
  const navigateTo = useNavigate();
  const [ trips, setTrips ] = useState([]);

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    try {
      const { data } = await axios.get("/places_info");
      setTrips(data);
    } catch (error) {
      toast.error(error.message, {
        toastId: "fetchTripsError"
      });
    }
  };

 /*  const onClickHandler = () => {
    fetchRandomPlace();
    if (place && place[0]) {
      navigateTo(`/place/${place[0]._id}`);
    }
  }; */

  return (
    <>
      <Header />
      <main className={classes["LandingContainer"]}>
        <div className={classes["LandingContainer__content"]}>
          <Container>
            <div className={classes["LandingContainer__content-text"]}>
              <h1>
                Explora tu lado <span>TECH</span> 
              </h1>
              <p>
                Ven a nuestros espacios, sal de tu rutina de siempre. Ponte cómodo en nuestras salas y disfruta de un buen snack para alegrarte el día.
              </p>
              <Button modifierClass="Button--white">
                Conoce tu cafetería
              </Button>
            </div>
            <div className={classes["LandingContainer__content-image"]}>
              
             
            </div>
          </Container>
        </div>

        <Container>
          <FeatureContainer />
          <CategoryContainer />

          <MenuContainer>
            <h2>Menú de Comida</h2>
            <p>Sabemos que te encanta disfrutar de un buen snack mientras ejercitas tu mente o necesitar pensar. Es por eso que hemos creado una selección de comida especialmente para ti.</p> 
            <p> Explora nuestra variedad de platillos que puedes ingresar a las salas de trabajo a un buen precio.</p>
            
          </MenuContainer>

          <Place trips={trips} />          

        </Container>
      </main>
    </>
  );
};

export default LandingView;
