import './App.css';
import Home from './pages/Home';
import MissionDetails from './pages/MissionDetails';
import {Route, Routes} from "react-router"

function App() {
  return (
    <div className="App">
      <Routes> 
        <Route path="/home" element={ <Home />}/>
        <Route path="/mission/:id" element={ <MissionDetails />}/>
        <Route path="*" element={ <Home />}/>
      </Routes>
    </div>
  );
}

export default App;
