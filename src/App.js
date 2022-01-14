import './App.css';
import { Routes, Route } from "react-router-dom";
import DeveloperRegisteration from './Components/DeveloperRegisteration/DeveloperRegisteration';
import Announcement from './Components/Announcement/AnnouncementContent/Announcement';
import CurrentAllote from './Components/CurrentAllote/CurrentAllote';


function App() {
  return (
    <div className="App">
    <Routes>
      
     
      <Route exact path="/" element={<DeveloperRegisteration />} />
    
      <Route exact path="/announcement" element={<Announcement />} />
      
      <Route exact path="/allote" element={<CurrentAllote />} />
      
      </Routes>
    </div>
  );
}

export default App;
