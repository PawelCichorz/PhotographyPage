import Navbar from './Components/Navbar';
import {BrowserRouter as Router,Routes,} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom'
import Header from './Components/Header';
import Offer from './Components/Offer';
import Shadow from './Components/Shadow';
import Price from './Components/Price';
import Contact from './Components/Contact';
import Client from './Components/Client';
import Pregnacy from './Components/Pregnacy';

import Studio from './Components/Studio';
import Estate from './Components/Estate';
import Reportage from './Components/Reportage';
import Outdoors from './Components/Outdoors';



import './App.css';


function App() {
  return (
    <Router>
      
    <div className="App">
    <Routes>
      <Route exact = {true}  path='/' element={<><Navbar/>,<Header/>,<Offer/>,<Shadow/>,<Price/>,<Contact/></>}></Route>


   <Route exact = {true}  path='/client' element={<Client/>}>
   </Route>
   <Route exact = {true}  path='/pregnacy' element={<Pregnacy/>}>
   </Route>

   <Route exact = {true}  path='/studio' element={<Studio/>}>
   </Route>
   <Route exact = {true}  path='/estate' element={<Estate/>}>
   </Route>
   <Route exact = {true}  path='/reportage' element={<Reportage/>}>
   </Route>
   <Route exact = {true}  path='/outdoors' element={<Outdoors/>}>
   </Route>
  
   
   </Routes>
    </div>
   
    </Router>
  );
}

export default App;
