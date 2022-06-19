import { useNavigate } from "react-router-dom";
import "../styles/DocumentoCalculo.css"
import home from "../imagenes/HOME.png"
import personita from "../imagenes/Persona.png"
const DocumentoCalculo = () => {
    const navigate = useNavigate()

    const perfil=()=>{
        navigate("/modificar");
    }

    const historialcalculos=()=>{
        navigate("/historialcalculos");
    }

    const calcular=()=>{
        navigate("/calcularbono");
    }

    const muro=()=>{
        navigate("/muro");
    }
    
    const atras=()=>{
        navigate(-1);
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
                <h1>
                    BONO VAC
                </h1>
            </div>
            <div className="documentomain">
                <div className="formulariodelmain">
                    <div className="formularioright">
                        <h1>Datos del bono:</h1>
                        <div className="formulariorightizq">
                            <h3>Valor Nominal:</h3>
                            <p>1000</p>
                        </div>
                        <div className="formulariorightizq">
                            <h3>Valor Comercial:</h3>
                            <p>1050</p>
                        </div>
                        <div className="formulariorightizq">
                            <h3>Nro. de años:</h3>
                            <p>5</p>
                        </div>
                        <div className="formulariorightizq">
                            <h3>Frecuencia del cupón:</h3>
                            <p>Semestral</p>
                        </div>
                        <div className="formulariorightizq">
                            <h3>Tipo de año:</h3>
                            <p>Ordinario</p>
                        </div>
                    </div>
                    <div className="formularioleft">
                        <div className="formularioleftizq">
                            <h3>Capitalización:</h3>
                            <p>Diaria</p>
                        </div>
                        <div className="formularioleftizq">
                            <h3>Tasa de interés:</h3>
                            <p>8%</p>
                        </div>
                        <div className="formularioleftizq">
                            <h3>Tasa anual de dscto.:</h3>
                            <p>45%</p>
                        </div>
                        <div className="formularioleftizq">
                            <h3>Impuesto a la renta:</h3>
                            <p>30%</p>
                        </div>
                        <div className="formularioleftizq">
                            <h3>Fecha de emisión:</h3>
                            <p>01/05/2022</p>
                        </div>
                    </div>
                </div>
                <div className="botonesdelmain">
                    <button className="atrasbutton" onClick={atras}>Atrás</button>
                    <button className="imprimirbutton">Imprimir</button>
                </div>
            </div>
            <div>
                <div className="FranjaVF"></div>
            </div>
        </div>
    )
}

export default DocumentoCalculo;