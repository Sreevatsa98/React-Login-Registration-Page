import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import { Login } from './Login'
import { Registration } from './Registration'


function App() {

  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Registration onFormSwitch={toggleForm}/>
      }
     {/* <Login /> */}
     {/* <Registration /> */}
    </div>
  );
}

export default App;
