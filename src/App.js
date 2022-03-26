import React  from 'react'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar';
function App() {
 
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
