
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Second from './components/Second';
import { Fourth, Third } from './components/Third';


function App() {
  return (
    <div className="App">
       <NavBar/>
       <Second/>
       <Third/>
       <Fourth/>
   
    </div>
  );
}

export default App;
