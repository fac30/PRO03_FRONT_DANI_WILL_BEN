import Home from "./pages/Home";
import QuizType from "./pages/QuizType";
import Settings from "./pages/Settings"
import Questions from  "./pages/Questions"
import EndOfGame from "./pages/EndOfGame"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiztype" element={<QuizType />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/endgame" element={<EndOfGame />} />
      </Routes>
      

    </Router>
  );
}

export default App;
