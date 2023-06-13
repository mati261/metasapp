import { Link } from 'react-router-dom';
import estilos from './Meta.module.css';
import { useContext } from 'react';
import { Contexto } from '../../servicios/Memoria';


function Meta ({id, icono,eventos,periodo,detalles,meta,completado}){

    const [estado, enviar] = useContext(Contexto);
   
    const completar = () =>{
        enviar({tipo:'completar',id});
    }

    return(
        <div className={estilos.meta + " tarjeta"}>
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
                <Link to={`/lista/${id}`}><button 
                className='boton boton--gris'
                ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><g id="_01_align_center" data-name="01 align center"><path d="M22.94,1.06a3.626,3.626,0,0,0-5.124,0L0,18.876V24H5.124L22.94,6.184A3.627,3.627,0,0,0,22.94,1.06ZM4.3,22H2V19.7L15.31,6.4l2.3,2.3ZM21.526,4.77,19.019,7.277l-2.295-2.3L19.23,2.474a1.624,1.624,0,0,1,2.3,2.3Z"/></g></svg>
                </button>
                </Link>
                <button 
                className='boton boton--gris'
                onClick={completar}
                ><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20"><path d="M7.77,20.589a3.012,3.012,0,0,1-2.137-.883L0,14.073l1.424-1.425,5.633,5.633a1.008,1.008,0,0,0,1.425,0L22.576,4.187,24,5.612,9.906,19.706A3.01,3.01,0,0,1,7.77,20.589Z"/></svg>
                </button>
            </div>
        </div>

    )
}

export default Meta;