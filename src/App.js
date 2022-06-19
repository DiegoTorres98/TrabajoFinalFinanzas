import logo from './logo.svg';
import './App.css';
import InicioSesion from './componentes/InicioSesion';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import MenuPrincipal from './componentes/MenuPrincipal';
import ModificarPerfil from './componentes/ModificarPerfil';
import CalcularBono from './componentes/CalcularBono';
import HistorialCalculos from './componentes/HistorialCalculos';
import DocumentoCalculo from './componentes/DocumentoCalculo';
import DatosBono from './componentes/DatosBono';
import GastosIniciales from './componentes/GastosIniciales';
import ResultadosIndicadores from './componentes/ResultadosIndicadores';
import ResultadosPrecioRatio from './componentes/ResultadoPrecioRatio';
import ResultadoBono from './componentes/ResultadoBono';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<InicioSesion />} />
        <Route path="/muro" element={<MenuPrincipal />} />
        <Route path="/modificar" element={<ModificarPerfil />} />
        <Route path="/historialcalculos" element={<HistorialCalculos />} />
        <Route path="/calcularbono" element={<CalcularBono />} />
        <Route path="/documentocalculo" element={<DocumentoCalculo/>} />
        <Route path="/datosbono" element={<DatosBono/>} />
        <Route path="/gastosiniciales" element={<GastosIniciales/>} />
        <Route path="/resultadosindicadores" element={<ResultadosIndicadores/>} />
        <Route path="/resultadoprecioratio" element={<ResultadosPrecioRatio/>} />
        <Route path="/resultadobono" element={<ResultadoBono/>} />
      </Routes>
    </Router>
  );
}

export default App;
