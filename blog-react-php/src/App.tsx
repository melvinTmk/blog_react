import React, { useState, useEffect } from 'react';
import Inscription from './Component/Inscription';
import './App.css';
import Home from './Component/Home';

function getCookie(cname: string) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function App() {
  const [id, setID] = useState<Object>({}); 
  const [error, setError] = useState<string>('');  


  if(getCookie('token') && getCookie('token') != "") {
    console.log(getCookie('token'));
    return (
      <Home user_props={id}></Home>
    )
  }
  return (
    <div className="App">
      <Inscription setID={setID} setError={setError}></Inscription>
      
      <p className='error-msg'>{error}</p>
    </div>
  ) 
}   

export default App;
