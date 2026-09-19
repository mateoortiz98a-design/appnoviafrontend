// Pantalla que se muestra después de aceptar: un collage de fotos con un
// mensaje al centro. Todo es estático (no llama al backend ni envía correos).
import imagen1 from "../img/imagen1.jpeg";
import imagen2 from "../img/imagen2.jpeg";
import imagen3 from "../img/imagen3.jpeg";
import imagen4 from "../img/imagen4.jpeg";
import imagen5 from "../img/imagen5.jpeg";

const FOTOS = [
  imagen1,
  imagen2,
  imagen3,
  imagen4

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
          <div className="collage-eyebrow">malevola cucarachona</div>
          <div className="collage-script">te amo muchisisimo</div>
          <p className="collage-text">
           gracias por estar siempre a mi lado y hacerme sentir tan especial.ahora ya no hay vuelta atras muajajaja y por ser el amor de mi vida y mi novia desde ahora ...
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
