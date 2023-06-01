import estilos from './Principal.module.css'
import Vinculo from './Vinculo';
import {ReactComponent as NuevaSVG} from '../../imagenes/nueva.svg'
import {ReactComponent as ListaSVG} from '../../imagenes/lista.svg'

function Principal({children}) {
  return (
    <div className={estilos.principal}>
        <aside className={estilos.aside}>
            <Vinculo 
              to="/lista" 
              texto="Lista de metas"
              Icono={ListaSVG}>
            </Vinculo>
            <Vinculo 
              to="/nueva" 
              texto="Nueva meta"
              Icono={NuevaSVG}>
            </Vinculo>
        </aside>
        <main className={estilos.main}>
            {children}
        </main>
    </div>
  );
}

export default Principal;
