import { useRef, useState } from 'react';

function ProposalQuestion({ onAceptar, fotoUrl }) {
  const buttonsRef = useRef(null);
  const noRef = useRef(null);
  const [noStyle, setNoStyle] = useState({});
  const [intentos, setIntentos] = useState(0);
  const [enviando, setEnviando] = useState(false);

  function esquivar() {
    const buttons = buttonsRef.current;
    const noBtn = noRef.current;
    if (!buttons || !noBtn) return;

    const maxX = buttons.clientWidth - noBtn.clientWidth - 10;
    const maxY = buttons.clientHeight - noBtn.clientHeight;
    const x = Math.random() * maxX;
    const y = (Math.random() - 0.5) * maxY;

    setNoStyle({ left: `${x}px`, top: `${20 + y}px`, transform: 'none' });
    setIntentos((prev) => prev + 1);
  }

  async function handleAceptar() {
    setEnviando(true);
    try {
      await onAceptar(intentos);
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div className="question-state">
      <div className="eyebrow">Una pregunta importante</div>

      <div className="polaroid">
        <img className="polaroid-img" src={fotoUrl} alt="Foto de la pareja" />
      </div>

      <h1>
        ¿Queres ser mi <span className="name-blank">novia</span>?
      </h1>
      <p className="sub">Solo hay una unica respuesta... 😉</p>

      <div className="buttons" ref={buttonsRef}>
        <button className="btn btn-yes" onClick={handleAceptar} disabled={enviando}>
          {enviando ? 'Enviando...' : 'Sí, acepto'}
        </button>
        <button
          className="btn btn-no"
          ref={noRef}
          style={noStyle}
          onMouseEnter={esquivar}
          onClick={(e) => {
            e.preventDefault();
            esquivar();
          }}
        >
          No
        </button>
      </div>

      <div className="footer-note">
        {intentos > 0 ? `Intentos de escape del botón: ${intentos}` : ''}
      </div>
    </div>
  );
}

export default ProposalQuestion;
