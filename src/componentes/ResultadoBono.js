import { useNavigate } from "react-router-dom";
import "../styles/ResultadoBono.css"
import home from "../imagenes/HOME.png"
import personita from "../imagenes/Persona.png"
const ResultadoBono = () => {
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
                <div className="centroparte1resultadobono">
                        <h1>Resultados de la estructura del bono:</h1>
                        <div className="centropartemainresultadobono">
                            <div className="centroparte2izqRB">
                                <div className="centroparte2mainRB">
                                    <h3>Frecuencia de cupón</h3>
                                    <input type="Text"></input>
                                </div>
                                <div className="centroparte2mainRB">
                                    <h3>Dias de capacitación:</h3>
                                    <input type="Text"></input>
                                </div>
                                <div className="centroparte2mainRB">
                                    <h3>Nro. de periodos por año:</h3>
                                    <input type="Text"></input>
                                </div> 
                                <div className="centroparte2mainRB">
                                    <h3>Nro. total de periodos:</h3>
                                    <input type="Text"></input>
                                </div> 
                                <div className="centroparte2mainRB">
                                    <h3>Tasa efectiva anual:</h3>
                                    <input type="Text"></input>
                                </div> 
                            </div>
                            <div className="centroparte2izqRB">
                                <div className="centroparte2derRB">
                                    <h3>Tasas efectiva semestral:</h3>
                                    <input type="Text"></input>
                                </div>
                                <div className="centroparte2derRB">
                                    <h3>COK Semestral</h3>
                                    <input type="Text"></input>
                                </div>
                                <div className="centroparte2derRB">
                                    <h3>Costes Iniciales Emisor</h3>
                                    <input type="Text"></input>
                                </div>
                                <div className="centroparte2derRB">
                                    <h3>Costes Iniciales Bonista:</h3>
                                    <input type="Text"></input>
                                </div>
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


export default ResultadoBono;