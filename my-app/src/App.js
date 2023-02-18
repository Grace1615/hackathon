import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import About from "./Pages/About"
import Navigation from './components/Navigation';
import Wait from './Pages/Wait';
import Contacts from './Pages/Contacts'
import Header from "./components/Header";

function App() {
    return (
      <div className="App">
        <Header />
{/*         <Wait /> */}

        <Router>
          <Navigation>
            <Routes>
              <Route exact path="/" element={<Wait />} />
               <Route exact path="/gamestart" element={<Home/>} />
              <Route exact path="/contact" element={<Contacts />} /> 
            </Routes>
          </Navigation>
        </Router>
      </div>
    );
}

export default App;