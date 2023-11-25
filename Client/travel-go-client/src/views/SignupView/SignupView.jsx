import classes from "./SignupView.module.scss";
import logo from "../../assets/coffeeTech-long.png"
import SignupForm from "../../components/SignupForm/SignupForm";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";
import { useEffect } from "react";
import { UseAuthContext } from "../../contexts/authContext";


const SignupView = () => {
  const {user} = UseAuthContext();
  const navigateTo = useNavigate();

  useEffect(()=>{
    if(user)
      navigateTo("/");
  },[user]);

  return (
    <main className={classes.Signup}>
      <div className={classes.Signup__container}>
        <Link to="/" className={classes.Signup__back}>
          <ArrowLeft />
          Regresar a inicio
        </Link>
        
        <img src={logo} alt="" aria-hidden="true" />
        <p>Llena tus datos para registrate</p>
        <SignupForm />

        <Link to="/login" className={classes.Signup__login}>¿Ya tienes una cuenta? Inicia sesión</Link>
      </div>
    </main>
  );
};

export default SignupView;
