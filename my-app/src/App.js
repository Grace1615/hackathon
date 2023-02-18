import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameStart from "./Pages/GameStart";
// import Navigation from './components/Navigation';
import Wait from './Pages/Wait';
// import Contact from './Pages/Contact'
// import Header from "./components/Header";

function App() {
    return (
      <div className="App">
{/*         <Header /> */}
{/*         <Home /> */}
{/*         <About /> */}
{/*         <Contact/> */}

        <Router>
{/*           <Navigation> */}
            <Routes>
              <Route exact path="/" element={<Wait />} />
               <Route exact path="/gamestart" element={<GameStart />} />
{/*               <Route exact path="/contact" element={<Contact />} />  */}
            </Routes>
{/*           </Navigation> */}
        </Router>
      </div>
    );
}

export default App;