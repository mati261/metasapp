import { Link } from 'react-router-dom';
import estilos from './Meta.module.css';
//import { useContext } from 'react';
//import { Contexto } from '../../servicios/Memoria';

function Meta ({id, icono,eventos,periodo,detalles,meta,completado}){

    //const [estado, enviar] = useContext(Contexto);
   
    //const completar = () =>{
    //    enviar({tipo:'completar',id});
    //}

    return(
        <Link to={`/lista/${id}`}className={estilos.meta + " tarjeta"}>
            <div className='flex items-center'>
                <div className={estilos.icono}>{icono}</div>
                <p className='text-xl ml-5 mr-10'>{eventos}
                    <sub className='text-xs text-gray-500 ml-1'>/{periodo}</sub></p>
                <p>{detalles}</p>
            </div>
            <div className='flex'>
                <div className='relative m-2 mx-5'>
                    <p className='text-center'>{completado} de {meta}</p>
                    <div className={estilos.barra1}>  
                        <div style={{width:`${Math.round((completado / meta) * 100)}%`}} 
                        className={estilos.barra2}></div>
                    </div>
                </div>
                <button 
                className='boton boton--gris'
                //onClick={completar}
                >completar
                </button>
            </div>
        </Link>

    )
}

export default Meta;