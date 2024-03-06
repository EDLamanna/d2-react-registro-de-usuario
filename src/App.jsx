import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Registro from './assets/Components/Registro';
import React, { useState } from 'react';



const App = () => {
  const [message, setMessage] = useState('');

  return (
    <>
      <Registro message={message} setMessage={setMessage} />
    </>
  )
}

export default App;
