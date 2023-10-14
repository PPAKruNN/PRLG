import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Link, Routes, useNavigate} from 'react-router-dom';

export default function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
              <Home />
          }></Route>
        </Routes>
      </Router>
    </>
  )
}

