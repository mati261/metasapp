import {  useContext, useEffect, useState } from "react";
import estilos from "./Detalles.module.css"
import { Contexto } from "../../servicios/Memoria";
import { useNavigate } from "react-router";


function Detalles(){

    const [form,setForm] = useState({
    detalles:'',
    eventos: 1,
    periodo:'semana',
    icono:'🏃',
    meta:365,
    plazo:'2030-01-01',
    completado:0,
    });

    const [estado, enviar] = useContext(Contexto)

    const {detalles,eventos,periodo,icono,meta,plazo,completado} = form
    
    const onChange = (event, prop) => {
        setForm(estado => ({...estado, [prop]: event.target.value}))  
    }

    useEffect(() => {
        //console.log(form);
    },[form])

    const navegar = useNavigate()

    const crear = async () => {
        enviar({tipo:'crear', meta: form});
        navegar('/lista');
    }

    const frecuencia = ["día","semana","mes","año"];

    const iconos = ["🏃🏽","💻","📚","💰","✈️","🏊🏼‍♂️","🚴🏽","🏋🏽"];

    return(
        <div className="tarjeta">
            <form className="p-4">
                <label className="label">
                    Describe tu meta
                    <input 
                        className="input" 
                        placeholder="ej. Caminar 30 minutos"
                        value={detalles}
                        onChange={e => onChange(e, 'detalles')}
                    />
                    
                </label>
                <label className="label">
                    ¿Con que frecuencia quieres cumplir tu meta?<span>(ej. 1 vez a la semana)</span>
                    <div className="flex mb-6">
                        <input 
                            className="input mr-6" 
                            type="number"
                            value={eventos}
                            onChange={e => onChange(e, 'eventos')} 
                        />
                        <select 
                            className="input"
                            value={periodo}
                            onChange={e => onChange(e, 'periodo')}
                        >
                            {frecuencia.map(opcion => <option key={opcion} value={opcion}>{opcion}</option>)}     
                        </select>
                    </div>
                </label>
                <label className="label">
                    ¿Cuantas veces deseas completar esta meta?
                    <input 
                        className="input" 
                        type="number"
                        value={meta}
                        onChange={e => onChange(e, 'meta')}
                    />
                </label>
                <label className="label">
                    ¿Tienes una fecha limite?
                    <input 
                        className="input" 
                        type="date"
                        value={plazo}
                        onChange={e => onChange(e, 'plazo')}
                    />
                </label>
                <label className="label">
                    ¿Cuantas veces haz completado ya esta meta?
                    <input 
                        className="input" 
                        type="number"
                        value={completado}
                        onChange={e => onChange(e, 'completado')}
                    />
                </label>
                <label className="label">
                    Escoge el icono para la meta
                    <select 
                        className="input"
                        value={icono}
                        onChange={e => onChange(e, 'icono')}
                    >
                        {iconos.map(opcion => <option key={opcion} value={opcion} >{opcion}</option>)}
                    </select>
                </label>
            </form>
            <div className={estilos.botones}>  
                <button
                className="boton boton--negro"
                onClick={crear}
                >Crear</button>
                <button
                className="boton boton--gris"
                //onClick={cancelar}
                >Cancelar</button>
            </div>
            <div>
            
            </div>
        </div>
    );
}

export default Detalles;