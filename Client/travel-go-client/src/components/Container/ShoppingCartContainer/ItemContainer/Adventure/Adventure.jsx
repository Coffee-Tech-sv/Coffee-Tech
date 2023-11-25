import classes from "./Adventure.module.scss";
import {StarFill} from "react-bootstrap-icons";


const Adventure =({itemInformation})=>{
    return (
        <div className={classes["adventure-container"]}>
            <div className={classes["image-container"]}>
               {<img src={itemInformation.img} alt={`${itemInformation.nombre} Sala`} />}
            </div>
            <div className={classes["information"]}>
                <h2>
                    {`${itemInformation.nombre} Sala` }
                </h2>
                <address>
                    {`${itemInformation.ubicacion.direccion}, ${itemInformation.ubicacion.departamento}`
                    }
                </address>
                <div>
                    <p>
                        {`$${itemInformation.precio}`}
                        <span className={classes["currency"]}>
                            &nbsp;USD&nbsp;
                        </span>
                        <span className={classes["plan-type"]}>
                            x hora
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Adventure;