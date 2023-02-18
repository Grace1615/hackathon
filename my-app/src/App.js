import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameStart from "./Pages/GameStart";
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
        <Home />
        <About />
        <Contacts/>

        <Router>
          <Navigation>
            <Routes>
              <Route exact path="/" element={<Home />} />
               <Route exact path="/gamestart" element={<GameStart />} />
              <Route exact path="/contact" element={<Contacts />} /> 
            </Routes>
          </Navigation>
        </Router>
      </div>
    );
}

export default App;