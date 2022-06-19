import { useNavigate } from "react-router-dom";
import Personita from "../imagenes/Persona.png"
const InicioSesion = () => {
    const navigate = useNavigate()

    const ingresar=()=>{
        navigate("/muro");
    }

    return(
        <div>
            <div className="FranjaV">
                
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
                        <button>
                                Registrarme
                        </button>

                    </div>
                </div>

                <div className="Imputs2">
                    <div>
                        <img src={Personita} width="150"></img>
                    </div>

                    <div className="formulario2">
                        <div className="Imputs3">
                            <p>
                                RUC
                            </p>

                            <input type='text'></input>

                        </div>
                        <div className="Imputs3">
                            <p>
                                Contraseña
                            </p>

                            <input type='password'></input>
                            
                        </div>

                        <button onClick={ingresar}>
                            INGRESAR
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

export default InicioSesion;