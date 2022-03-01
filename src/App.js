import React from 'react';
import './App.css';
import ContextoInicial from './Contexts/ContextoInicial';
import Form from './Components/Form';
import Register from './Components/Register';

function App() {
  const[nome, setNome] = React.useState('')
  const[email, setEmail] = React.useState('')
  const[idade, setIdade] = React.useState('')
 return (
        <ContextoInicial.Provider value={{nome, setNome, email, setEmail,   idade, setIdade}}>
            <Form/>
            <Register/>
        </ContextoInicial.Provider>
    )
}

export default App;
