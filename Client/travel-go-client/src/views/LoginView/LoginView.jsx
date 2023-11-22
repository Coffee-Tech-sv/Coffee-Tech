import classes from "./LoginView.module.scss";
import logo from "../../assets/coffeeTech-long.png"
import LoginForm from "../../components/LoginForm/LoginForm";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";
import { UseAuthContext } from "../../contexts/authContext";
import { useEffect } from "react";
import { toast } from "react-toastify";

const LoginView = () => {
  const navigateTo = useNavigate();
  const {user} = UseAuthContext();
  
  useEffect(()=>{
    if(user){
      toast.success("Bienvenido de nuevo", {
        toastId: "success"
      });
      navigateTo("/");
    }
  }, [user]);

  return (
    <main className={classes.Login}>
      <div className={classes.Login__container}>
        <Link to="/" className={classes.Login__back}>
          <ArrowLeft />
          Regresar a inicio
        </Link>
        
        <img src={logo} alt="" aria-hidden="true" />
        <p>Inicie sesión para continuar</p>
        <LoginForm />
        
        <Link to="/register" className={classes.Login__signup}>¿No tienes una cuenta? Regístrate</Link>
      </div>
    </main>
  );
};

export default LoginView;
