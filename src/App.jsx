import { useState, useEffect } from 'react';
import './App.css';
import ProposalQuestion from './components/ProposalQuestion';
import ProposalResult from './components/ProposalResult';
import launchConfetti from './components/confetti';
import { registrarRespuesta, obtenerEstadoRespuesta } from './services/api';
import imagen5 from './img/imagen5.jpeg'; 


const FOTO_PLACEHOLDER =
  imagen5; // Puedes cambiar esto a cualquier otra imagen que quieras usar como placeholder
  
function App() {
  const [acepto, setAcepto] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [errorCarga, setErrorCarga] = useState(false);

  // Al abrir la app, le pregunta al backend si ya se había aceptado antes.
  // Así, sin importar el dispositivo o si refresca la página, siempre
  // muestra la pantalla correcta.
  useEffect(() => {
    obtenerEstadoRespuesta()
      .then((res) => {
        setAcepto(Boolean(res?.data?.acepto));
      })
      .catch(() => {
        // Si el backend no responde, no bloqueamos la app: se muestra la
        // pregunta igual, pero avisamos abajo que no se pudo confirmar el estado.
        setErrorCarga(true);
      })
      .finally(() => setCargando(false));
  }, []);

  async function handleAceptar(intentosEsquivos) {
    await registrarRespuesta({ acepto: true, intentosEsquivos });
    setAcepto(true);
    launchConfetti();
  }

  if (cargando) {
    return <div className="app-shell" />;
  }

  return (
    <div className="app-shell">
      <div className="card">
        {!acepto && <ProposalQuestion onAceptar={handleAceptar} fotoUrl={FOTO_PLACEHOLDER} />}
        {acepto && <ProposalResult />}
        {errorCarga && !acepto && (
          <p className="error-text">
            No se pudo confirmar el estado con el servidor. Verifica que el backend esté corriendo.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
