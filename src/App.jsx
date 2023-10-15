import ButtonPage from "./pages/ButtonPage";
import CustomerChatPage from "./pages/CustomerChatPage";
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export default function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
              <ButtonPage />
          }></Route>
          <Route path="/home" element={
              <Home />
          }></Route>
          <Route path="/chat" element={
              <CustomerChatPage />
          }></Route>
        </Routes>
      </Router>
    </>
  )
}

