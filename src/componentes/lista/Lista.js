
import { useContext } from "react";
import Meta from "./Meta";
import { Contexto } from "../../servicios/Memoria";
import { Outlet } from "react-router";


function Lista(){

    const [estado, enviar] = useContext(Contexto);
    return (
        <>
            {estado.orden.map(id =><Meta key={id} {...estado.objetos[id]}></Meta>)}
            <Outlet />
        </>
    );
}

export default Lista;