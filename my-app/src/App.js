import { BrowserRouter as Router, Navigate,Routes, Route} from "react-router-dom";
import Wait from './Pages/Wait'
import Home from './Pages/Home';
import Contacts from './Pages/Contacts'
import About from './Pages/About'
import Header from "./components/Header";
import WebSocketComponent from "./Pages/count.jsx"
function App() {
    return (
      <div className="App">
        <Router>
            <Routes>
              <Route path="/" element={<Header/>} exact />
              <Route path="/gamestart" element={<WebSocketComponent/>} />
              <Route path="/contact" element={<Contacts />} /> 
              <Route path="/About" element={<About />} /> 
              <Route path="*" element={<Navigate to="/" replace />}/>
            </Routes>
            
        </Router>
      </div>
    );

}

export default App;