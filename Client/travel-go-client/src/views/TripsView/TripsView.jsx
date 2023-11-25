import classes from "./TripsView.module.scss";
import Header from "../../components/Header/Header";
import FooterAttribution from "../../components/Footer/FooterAttribution/FooterAttribution";
import ExploreContainer from "../../components/Container/ExploreContainer/ExploreContainer";
import Button from "../../components/Button/Button";
import NotFoundView from "../NotFoundView/NotFoundView";
import FavoriteTripsView from "../FavoriteTripsView/FavoriteTripsView";
import AllTripsView from "../AllTripsView/AllTripsView";

import { HeartFill } from "react-bootstrap-icons";
import { Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { randomPlace } from "../../services/placeServer";
import { useNavigate } from "react-router-dom";

const TripsView = ({ className, ...rest }) => {
  const navigateTo = useNavigate();
  const { fetchRandomPlace, place } = randomPlace();

  const onClickHandler = () => {
    fetchRandomPlace();
    if (place && place[0]) {
      navigateTo(`/place/${place[0]._id}`);
    }
  };

  return (
    <>
      <Header />
      <main className={classes["TripsView"]}>
      

        <Routes>
          <Route path="" element={<AllTripsView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>

        <ExploreContainer>
          <h2>
            Salas pensados solo para ti {" "}
            <span>
              <HeartFill
                className={classes["TripsView__heart"]}
                fill="#FF5A5F"
              />
            </span>{" "}
      
          </h2>

          <p>¡Descubre nuestro innovador espacio de coworking diseñado para potenciar tu creatividad y productividad! Nuestra sala de coworking ofrece un ambiente moderno y colaborativo, equipado con las comodidades esenciales para tu jornada laboral.</p>
          <p>Disfruta de estaciones de trabajo ergonómicas, acceso rápido a internet, y salas de reuniones para impulsar la colaboración.</p>
          <NavLink to="/place/:placeId">
          <Button modifierClass="Button--purple" onClick={onClickHandler}>Reservar sala</Button>
          </NavLink>
        </ExploreContainer>
      </main>
      <FooterAttribution />
    </>
  );
};

export default TripsView;
