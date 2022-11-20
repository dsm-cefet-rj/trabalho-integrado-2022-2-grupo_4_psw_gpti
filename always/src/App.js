import React, { useState } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';
import Login from './Pages/Login'
function App(){
const [user, setUser] = useState(null);

if(user===null){
  return( 
    <>
    <Header />
    <Login/>
    <Footer />
    </>
  );

}
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  );

}

export default App;