import Invite from "./pages/Invite";
import { Routes, Route } from 'react-router-dom';
import './app.css'
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Routes>
      <Route path ='/' element ={<Homepage/>}/>
      <Route path ='/invite' element ={<Invite/>}/>
    </Routes>
  );
}

export default App;
