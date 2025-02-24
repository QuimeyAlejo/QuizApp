import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Card from "./components/card"; // Importamos el componente Card

function Home() {
  const navigate = useNavigate(); // Hook para redirigir

  return (
    <>
      <h1>QuizApp</h1>
      <h3>¡Que empiece el juego!</h3>
      <button onClick={() => navigate("/games")}>Inicio</button>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Card />} />
      </Routes>
    </Router>
  );
}

export default App;
