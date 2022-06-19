import { useNavigate } from "react-router-dom";
import "../styles/HistorialCalculos.css"
import home from "../imagenes/HOME.png"
import personita from "../imagenes/Persona.png"
import ModificarPerfil from "./ModificarPerfil";
const HistorialCalculos = () => {
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

                    <div className="headernombres">
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
                <div className="opcionesmuro">
                    <table className="principaltable">
                        <thead className="tableheader">
                            <tr className="filaheader">
                                <th>
                                    Nombre de la empresa
                                </th>
                                <th>
                                    RUC
                                </th>
                                <th>
                                    Fecha
                                </th>
                                <th>
                                    Cálculos
                                </th>
                            </tr>
                        </thead>
                        <tbody className="principalbody">
                            <tr>
                                <th>Empresa</th>
                                <th>10234567891</th>
                                <th>20/04/2022</th>
                                <th><button className="verbutton" onClick={datosbono}>Ver</button></th>
                            </tr>
                            <tr>
                                <th>Empresa</th>
                                <th>10234567891</th>
                                <th>20/04/2022</th>
                                <th><button className="verbutton" onClick={datosbono}>Ver</button></th>
                            </tr>
                            <tr>
                                <th>Empresa</th>
                                <th>10234567891</th>
                                <th>20/04/2022</th>
                                <th><button className="verbutton" onClick={datosbono}>Ver</button></th>
                            </tr>
                        </tbody>
                    </table>
                    <button className="volverbutton" onClick={muro}>Volver</button>
                </div>

            </div>

            <div>
                <div className="FranjaVF"></div>
            </div>
        </div>
         
    )
}

export default HistorialCalculos;