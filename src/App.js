
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Navb from './Components/Navbar';
import Inscr from './Components/Inscr';
import Activite from './Components/Activite';
import Fotr from './Components/Fotr';
import Matr from './Components/Matr';
import Motiv from './Components/Motiv';

 
function App() {
  return (
    <div className="App">
    <Navb></Navb>
    <Home></Home>
    <Motiv/>
    <Activite></Activite>
    <Matr/>
    <Inscr></Inscr>
    
    <Fotr/>
   
    </div>
  );
}

export default App;
