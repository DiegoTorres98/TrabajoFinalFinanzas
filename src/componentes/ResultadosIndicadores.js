import { useNavigate } from "react-router-dom";
import "../styles/ResultadosIndicadores.css"
import home from "../imagenes/HOME.png"
import personita from "../imagenes/Persona.png"
const ResultadosIndicadores = () => {
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

            </div>
            <div>
            <div className="maincentro">
                <div>
                    <h1>Resultados de los indicadores de rentabilidad:</h1>
                    <div className="maincentroizq">
                        <div className="maincentroizquierda">
                            <h3>TCEA Emisor:</h3>
                            <input type= "text"></input>
                            <input type= "text"></input>
                        </div>
                        <div className="maincentroizquierda">
                            <h3>TCEA Emisior c/ escudo:</h3>
                            <input type= "text"></input>
                            <input type= "text"></input>
                        </div>
                        <div className="maincentroizquierda">
                            <h3>TREA Bonista:</h3>
                            <input type= "text"></input>
                            <input type= "text"></input>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="botonesdelmaingastos">
                <button className="atrasbuttonresultados" onClick={Giniciales}>Atrás</button>
                <button className="imprimirbuttonresultados" onClick={calcular}>Volver a Calcular</button>
            </div>
            <div>
                <div className="FranjaVF"></div>
            </div>
        </div>   
    )
}


export default ResultadosIndicadores;