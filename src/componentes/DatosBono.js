import { useNavigate } from "react-router-dom";
import "../styles/DatosBono.css"
import home from "../imagenes/HOME.png"
import personita from "../imagenes/Persona.png"
import CalcularBono from "./CalcularBono";
const DatosBono = () => {
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

    const gastosiniciales=()=>{
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
            <div className="maincentro">
                <div className="maincentroizq">
                    <h1>
                        Datos del bono:
                    </h1>
                    <div className="maincentroizq2">
                        <h3>Valor Nominal:</h3>
                        <p>1000</p>
                    </div>
                    <div className="maincentroizq2">
                        <h3>Valor Comercial:</h3>
                        <p>1050</p>
                    </div>
                    <div className="maincentroizq2">
                        <h3>Nro. de años:</h3>
                        <p>5</p>
                    </div>
                    <div className="maincentroizq2">
                        <h3>Frecuencia del cupón:</h3>
                        <form>
                            <select>
                                <option>Mensual</option>
                                <option>Bimestral</option>
                                <option selected>Trimestral</option>
                                <option>Semestral</option>
                                <option>Anual</option>
                            </select>
                        </form>
                    </div>
                    <div className="maincentroizq2">
                        <h3>Tipo de año:</h3>
                        <form>
                            <select>
                                <option selected>Ordinario</option>
                                <option>Calendario</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div className="maincentroder">
                    <div className="maincentroder2">
                        <h3>Capitalización:</h3>
                        <form>
                            <select>
                                <option selected>Diaria</option>
                                <option>Mensual</option>
                                <option>Trimestral</option>
                            </select>
                        </form>
                    </div>
                    <div className="maincentroder2">
                        <h3>Tasa de interés:</h3>
                        <p>8%</p>
                    </div>
                    <div className="maincentroder2">
                        <h3>Tasa anual de dscto.:</h3>
                        <p>45%</p>
                    </div>
                    <div className="maincentroder2">
                        <h3>Impuesto a la renta:</h3>
                        <p>30%</p>
                    </div>
                    <div className="maincentroder2">
                        <h3>Fecha de emisión:</h3>
                        <input type="date"></input>
                    </div>
                </div>
            </div>
            <div className="botonesdelmaindatos">
                <button className="atrasbuttondatos" onClick={calcular}>Atrás</button>
                <button className="imprimirbuttondatos" onClick={gastosiniciales}>Siguiente</button>
            </div>
            <div>
                <div className="FranjaVF"></div>
            </div>
        </div>
    )
}

export default DatosBono;