import { useNavigate } from "react-router-dom";
import "../styles/CalcularBono.css"
import home from "../imagenes/HOME.png"
import personita from "../imagenes/Persona.png"
import calculadora from "../imagenes/calculadora.png"
const CalcularBono= () => {
    const navigate = useNavigate()

    const muro=()=>{
        navigate("/muro");
    }

    const perfil=()=>{
        navigate("/modificar");
    }

    const calcular=()=>{
        navigate("/calcularbono");
    }

    const historialcalculos=()=>{
        navigate("/historialcalculos");
    }

    const datosbono=()=>{
        navigate("/datosbono");
    }

    return(
        <div>
            <div className="FranjaV">
                <div className="headerleft">
                    <div className="headernombres" onClick={muro}>
                        <img src={home} width="60" height={"45"}></img>
                    </div>

                    <div className="headernombres" onClick={muro}>
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
                <div className="leftprincipal">
                <img src={calculadora} width="300" height={300}></img>  
                </div>

                <div className="rightprincipal">
                    <div className="righttasa">
                        <h1>
                            Tasa de Interes:
                        </h1>
                        <form>
                            <select >
                                <option>Tasa Simple</option>
                                <option>Tasa Nominal</option>
                                <option selected>Tasa Efectiva</option>
                                <option>Tasa Descontada</option>
                                <option>Tasa Real</option>
                            </select>
                        </form>
                    </div>
                    <div className="rightmetodo">
                        <h1>
                            Seleccionar Método:
                        </h1>
                        <form>
                            <select >
                                <option selected>Método Alemán</option>
                                <option>Método Frances</option>
                                <option>Método Americano</option>
                            </select>
                        </form>
                    </div>
                    <div className="rightbutton">
                        <button onClick={datosbono}>
                            CALCULAR
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

    


export default CalcularBono;