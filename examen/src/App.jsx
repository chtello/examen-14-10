import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Game from "./componentes/Game"
import Home from "./componentes/Home"
import './App.css'

function App() {
  return (
    <Router>
    <Link to="/"/><Link/>
    <Link to="/Game"/><Link/>
      <div>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/Game' element={<Game/>} />
          </Routes>
      </div>
  </Router>
  )
}

export default App
