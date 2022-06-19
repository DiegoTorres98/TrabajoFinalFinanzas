import { useNavigate } from "react-router-dom";
import "../styles/ResultadoPrecioRatio.css"
import home from "../imagenes/HOME.png"
import personita from "../imagenes/Persona.png"
const ResultadoPrecioRatio = () => {
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

    const Dbono=()=>{
        navigate("/datosbono");
    }

    const Giniciales=()=>{
        navigate("/gastosiniciales");
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
            <div className="Bonovacprincipal">
                <div className="seleccionarizq">
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
                <div>
                    <h1>
                        BONO VAC
                    </h1>
                </div>
                <div className="seleccionarder">
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
            </div>
            <div>
                <div className="centropartemain">
                    <h1>Resultado del precio actual y utilidad:</h1>
                    <div className="centroparte1">
                        <div className="centroparte1izq">
                            <h3>Precio anual</h3>
                            <input type="Text"></input>
                        </div>
                        <div className="centroparte1der">
                            <h3>Utilidad / Pérdida</h3>
                            <input type="Text"></input>
                        </div>
                    </div>
                </div>
                <div className="centropartemain2">
                        <h1>Resultados de ratios de decisión:</h1>
                        <div className="centropartemaincentro2">
                            <div className="centroparte2izq">
                                <div className="centroparte2main">
                                    <h3>Duración</h3>
                                    <input type="Text"></input>
                                </div>
                                <div className="centroparte2main">
                                    <h3>Convexidad</h3>
                                    <input type="Text"></input>
                                </div>
                                <div className="centroparte2main">
                                    <h3>Total</h3>
                                    <input type="Text"></input>
                                </div> 
                            </div>
                            <div className="centroparte2der">
                                <h3>Duración modificada</h3>
                                <input type="Text"></input>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="botonesdelmainresultados">
                <button className="atrasbuttonresultado" onClick={Giniciales}>Atrás</button>
                <button className="siguientebuttonresultado" onClick={calcular}>Siguiente</button>
            </div>
            <div>
                <div className="FranjaVF"></div>
            </div>
        </div>   
    )
}


export default ResultadoPrecioRatio;