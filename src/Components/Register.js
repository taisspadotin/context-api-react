import React, { useContext } from "react";
import ContextoInicial from '../Contexts/ContextoInicial';

export default function Register(){
    const { nome, email, idade } = useContext(ContextoInicial);
    return(
        <div style={{ padding: 5, border: '1px solid green', margin: 5 }}>
            <p>Aqui os dados são renderizados:</p>
            <p>Nome: {nome}</p>
            <p>Email: {email}</p>
            <p>Idade: {idade}</p>
        </div>
    )
}