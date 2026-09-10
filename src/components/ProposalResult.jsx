// Pantalla que se muestra después de aceptar: un collage de fotos con un
// mensaje al centro. Todo es estático (no llama al backend ni envía correos).

const FOTOS = [
  'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=300&h=380&fit=crop',
  'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=300&h=380&fit=crop',
  'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=300&h=380&fit=crop',
  'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=300&h=380&fit=crop',
];

function Polaroid({ src, alt }) {
  return (
    <div className="polaroid-wrap">
      <div className="tape" />
      <img className="collage-photo" src={src} alt={alt} />
    </div>
  );
}

function ProposalResult() {
  return (
    <div className="result">
      <div className="collage-frame">
        <div className="collage-row">
          <Polaroid src={FOTOS[0]} alt="Foto 1" />
          <Polaroid src={FOTOS[1]} alt="Foto 2" />
        </div>

        <div className="collage-message">
          <div className="collage-eyebrow">Feliz de escribir</div>
          <div className="collage-script">Lo sabía</div>
          <p className="collage-text">
            Desde ese primer día supe que quería tenerte cerca siempre.
            Gracias por decir que sí, prometo hacerte muy feliz.
          </p>
          <div className="collage-eyebrow">Te amo</div>
        </div>

        <div className="collage-row">
          <Polaroid src={FOTOS[2]} alt="Foto 3" />
          <Polaroid src={FOTOS[3]} alt="Foto 4" />
        </div>
      </div>
    </div>
  );
}

export default ProposalResult;
