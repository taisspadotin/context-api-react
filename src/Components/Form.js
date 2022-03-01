import React, { useContext } from "react";
import ContextoInicial from '../Contexts/ContextoInicial';

export default function Form(){
    const { setNome, setEmail, setIdade } = useContext(ContextoInicial);
    const [cont, setCont] = React.useState(1);
    
    React.useEffect(() => {
        setNome("Usuário 1");
        setEmail("Email1@mail.com");
        setIdade(1);
    }, []);

    const changeInfo = () => {
        let novoCount = cont + 1;
        setNome(`Usuário ${novoCount}`);
        setEmail(`Email${novoCount}@mail.com`);
        setIdade(novoCount);
        setCont(novoCount);
    }

    return(
        <div style={{ padding: 5, border: '1px solid red', margin: 5 }}>
            <p>Formulário: <small>Aqui os dados são preenchidos</small></p>
            <button onClick={() => changeInfo()}>Alterar</button>
        </div>
    )
}