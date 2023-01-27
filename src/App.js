
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

import Inventory from './components/Inventory';

import AddPO from './components/AddPO';

function App() {
  return (
    <div className="App">
    
      <Router>
        <Routes> 
          
          <Route exact path="/" element={<SignIn />}/>  
          <Route exact path="/SingUp" element={<SignUp/>}/>
        
           <Route exact path="/Inventory"  element={<Inventory />}/>
          <Route exact path ="/AddPO" element={<AddPO/>}/>

         </Routes>
      </Router>
      
    </div>
  );
}

export default App;


