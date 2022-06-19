import { useNavigate } from "react-router-dom";
import "../styles/MenuPrincipal.css"
import home from "../imagenes/HOME.png"
import personita from "../imagenes/Persona.png"
import calculadora from "../imagenes/calculadora.png"
import relojito from "../imagenes/reloj.png"
const MenuPrincipal = () => {
    const navigate = useNavigate()

    const salir=()=>{
        navigate("/login");
    }

    const perfil=()=>{
        navigate("/modificar");
    }

    const historialcalculos=()=>{
        navigate("/historialcalculos");
    }

    const calcular=()=>{
        navigate("/calcularbono");
    }

    return(
        <div>
            <div className="FranjaV">
                <div className="headerleft">
                    <div className="headernombres">
                        <img src={home} width="60" height={"45"}></img>
                    </div>

                    <div className="headernombres">
                        <h2>Menu Principal</h2>
                    </div>

                    <div className="headernombres" onClick={calcular}>
                        <h2>Calcular</h2>
                    </div>

                    <div className="headernombres" onClick={historialcalculos}>
                        <h2>Historial de Cálculos</h2>
                    </div>

                </div>

                <div className="headerright">
                    <div className="headernombres2" onClick={perfil}>
                        <h2>Mi Perfil</h2>
                        <img src={personita} width="45" height={45}></img>
                    </div>
                </div>

            </div>

            <div className="Bonovac">
                <h1>
                    BONO VAC
                </h1>
            </div>

            <div className="mainopciones">
                <div className="opciones">
                    <div>
                        <img src={calculadora} width="150" height={150}></img>  
                    </div>
                    <div>
                        <h2>
                            Calcular
                        </h2>
                    </div>
                    <div>
                        <button onClick={calcular}>
                            Ir a Calcular
                        </button>
                    </div>

                </div>

                <div className="opciones medio">
                    <div>
                        <img src={relojito} width="150" height={150}></img>  
                    </div>
                    <div>
                        <h2>
                            Cálculos 
                            Realizados
                        </h2>
                    </div>
                    <div>
                        <button onClick={historialcalculos}>
                            Ver Historial
                        </button>
                    </div>

                </div>

                <div className="opciones">
                    <div>
                        <img src={personita} width="150" height={150}></img>  
                    </div>
                    <div className="opcionesrigth">
                        <button>
                            Mi Perfil
                        </button>

                        <button onClick={salir}>
                            Cerrar Sesión
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div className="FranjaVF"></div>
            </div>
        </div>

    )
}

export default MenuPrincipal;