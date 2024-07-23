
import './App.css';
// import Contact from './lib/Contact';

import Home from './lib/Home';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Basic from "./components/Basic"
// import PreviousSchoolInfo from './components/PreviousSchoolInfo';
// import FeesInfo from './components/FeesInfo';
// import Footer from './ui/Footer';
import Navbar from './ui/Navbar';
function App() {
  return (
    <div className="App">
      <header className="App-header">
     
        <Navbar/>
 
       <Home/>
       <div>
  
  {/* <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Basic Details</Link></li>
            <li><Link to="/previous-school-info">Previous School Info</Link></li>
            <li><Link to="/fees-info">Fees Info</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<BasicDetails />} />
          <Route path="/previous-school-info" element={<PreviousSchoolInfo />} />
          <Route path="/fees-info" element={<FeesInfo />} />
        </Routes>
      </div>
    </Router> */}
  
    </div>
      </header>
    </div>
  );
}

export default App;
