import classes from "./ExploreContainer.module.scss";

import menuPic from "./../../../assets/12.png";

const ExploreContainer = ({ children }) => {
  return (
    <section className={classes["ExploreContainer"]}>
      <div className={classes["ExploreContainer__content"]}>
        <div>
          <div className={classes["ExploreContainer__mockup"]}>
            <img src={menuPic} alt="" aria-hidden="true" />
          </div>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default ExploreContainer;
