import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import LandingPage from "./pages/landingPage"
import QuizPage from "./components/quiz"

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/quiz" element={<QuizPage/>}/>
        </Routes>
      </Router>
    )
}

export default App
