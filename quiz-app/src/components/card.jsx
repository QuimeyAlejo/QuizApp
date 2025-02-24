import { useState } from "react";
import preguntas from "../data/data.json";

export default function Card() {
  const [indexQuest, setIndexQuest] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [quizTerminado, setQuizTerminado] = useState(false);

  if (!preguntas || preguntas.length === 0) {
    return <h2>No hay preguntas disponibles.</h2>;
  }

  const preguntaActual = preguntas[indexQuest];

  const manejarRespuesta = (respuesta) => {
    if (respuesta === preguntaActual.correct_answer) {
      setPuntaje(puntaje + 1);
    }

    if (indexQuest + 1 < preguntas.length) {
      setIndexQuest(indexQuest + 1);
    } else {
      setQuizTerminado(true);
    }
  };

  const reiniciarQuiz = () => {
    setIndexQuest(0);
    setPuntaje(0);
    setQuizTerminado(false);
  };

  return (
    <div>
      {!quizTerminado ? (
        <>
          <h2>{preguntaActual.question}</h2>
          {preguntaActual.options.map((opcion) => (
            <button key={`${preguntaActual.question}-${opcion}`} onClick={() => manejarRespuesta(opcion)}>
              {opcion}
            </button>
          ))}
        </>
      ) : (
        <>
          <h2>¡Fin del quiz! Puntaje: {puntaje}/{preguntas.length}</h2>
          <button onClick={reiniciarQuiz}>Reiniciar</button>
        </>
      )}
    </div>
  );
}


