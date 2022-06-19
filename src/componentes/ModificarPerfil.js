import { useNavigate } from "react-router-dom";
import "../styles/ModificarPerfil.css"
import home from "../imagenes/HOME.png"
import personita from "../imagenes/Persona.png"
const ModificarPerfil = () => {
    const navigate = useNavigate()

    const muro=()=>{
        navigate("/muro");
    }

    return(
        <div>
            <div className="FranjaV">
                <div className="headernombres" onClick={muro}>
                        <img src={home} width="60" height={"45"}></img>
                </div>

                <div className="headernombres" onClick={muro}>
                    <h2>Menu Principal</h2>
                </div>
            </div>

            <div className="Bonovac">
                <h1>
                    BONO VAC
                </h1>
            </div>

                <div className="main">
                    <div className="formulario1">
                        <div className="miniformulario">
                            <div className="Imputs">
                                <p>
                                    Empresa
                                </p>
                                <input type='text'></input>
                            </div>

                            <div className="Imputs">
                                <p>
                                    Razón Social
                                </p>
                                <input type='text'></input>
                            </div>

                            <div className="Imputs">
                                <p>
                                    RUC
                                </p>
                                <input type='text'></input>
                            </div>

                            <div className="Imputs">
                                <p>
                                    Contraseña
                                </p>
                                <input type='password'></input>
                            </div>

                            <div className="Imputs">
                                <p>
                                    Contraseña Nuevamente 
                                </p>
                            <input type='password'></input>
                            </div>
                    </div>

                    <div></div>
                </div>
                <div className="opciones">
                    <div>
                        <img src={personita} width="150" height={150}></img>  
                    </div>
                    <div className="opcionesrigth">
                        <button>
                            Modificar
                        </button>

                        <button onClick={muro}>
                            Cancelar
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

export default ModificarPerfil;