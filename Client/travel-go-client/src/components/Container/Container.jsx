import classes from "./Container.module.scss";
import back from "./../../assets/hero-compress.png"


const Container = ({ children, className, back, ...rest }) => {
  return (
    <div className={`${classes["Container"]} ${className} ${back}`} {...rest}>
      {children}
    </div>
  );
};

export default Container;