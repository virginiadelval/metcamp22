import "./style.css";

function Game() {
  return (
    <div className="layoutpreguntas">
      <div className="preguntas">
        <div>
          {" "}
          <h1> Pregunta 1 ?</h1>
        </div>
        <div>
          <label className="subtitle">
            <input type="radio" name="rsvp" /> Opción 1{" "}
          </label>
        </div>
        <div>
          <label className="subtitle">
            <input type="radio" name="rsvp" /> Opción 2{" "}
          </label>
        </div>
        <div>
          <label className="subtitle">
            <input type="radio" name="rsvp" /> Opción 3{" "}
          </label>
        </div>
        <div>
          <label className="subtitle">
            <input type="radio" name="rsvp" /> Opción 4{" "}
          </label>
        </div>

        <div>
          {" "}
          <h1> Pregunta 2 ?</h1>
        </div>
        <div>
          <label className="subtitle">
            <input type="radio" name="rsvp" /> Opción 1{" "}
          </label>
        </div>
        <div>
          <label className="subtitle">
            <input type="radio" name="rsvp" /> Opción 2{" "}
          </label>
        </div>
        <div>
          <label className="subtitle">
            <input type="radio" name="rsvp" /> Opción 3{" "}
          </label>
        </div>
        <div>
          <label className="subtitle">
            <input type="radio" name="rsvp" /> Opción 4{" "}
          </label>
        </div>
      </div>
      
      <div className="control">
        <button className="buton is-medium is-link">Enviar</button>
      </div>
    </div>
  );
}
export default Game;
