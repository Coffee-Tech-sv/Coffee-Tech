import classes from "./BookingServices.module.scss";
import BookingServicesContainer from "./BookingServiceContainer/BookingServiceContainer";
import {Pencil, Laptop, People, Projector, Wifi, CupStraw} from "react-bootstrap-icons";


const imagePicker = (service)=>{
    let image = "";
    switch (service){
        case "Internet":
            image = <Wifi/>;
            break;
        case "Computadora":
            image = <Laptop/>;
            break;
        case "Pizarra":
            image = <Pencil/>;
            break;
        case "Coworking":
            image = <People/>;
            break;
        case "Proyectores":
            image = <Projector/>;
            break;
        case "comida":
            image = <CupStraw/>;
            break;
    }
    return image;
}


const BookingServices = ({services = []})=>{

    const mappedServices = services.map((service, counter)=>{
            return(
                <BookingServicesContainer key={counter}>
                    {imagePicker(service.toLowerCase())}
                    <h3>{service}</h3>
                </BookingServicesContainer>

            );
        });

    return(
        <div className={classes["services-container"]}>
            {services.length > 0 ? mappedServices : <h3>No hay servicios adicionales</h3>}
        </div>
    );

}

export default BookingServices;