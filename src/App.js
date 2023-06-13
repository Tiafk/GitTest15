import'./App.css';
import React from 'react'
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import Calls from './Components/Calls/Calls';

function App() {
  return (
    <div className='app'>
      <Header/>
      <Navigation/>
      <div className='content-wrapper'>
        <Routes>
          <Route path='/results'/>
          <Route path='/Calls' element={<Calls/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
