import estilos from './Encabezado.module.css'
import { ReactComponent as LogoSVG } from '../../imagenes/logoapp.svg';
import {ReactComponent as UsuarioSVG } from '../../imagenes/usuario.svg'
import Vinculo from './Vinculo';

function Encabezado() {
  return (
    <header className={estilos.encabezado}>
        <div className={estilos.contenedor}>
            <LogoSVG className={estilos.logo}/>
            <a className={estilos.appname} href="/">Metas App</a>
        </div>
        <nav>
            <Vinculo 
              to="/perfil" 
              Icono={UsuarioSVG}>
            </Vinculo>
        </nav>
    </header>
  );
}

export default Encabezado;
