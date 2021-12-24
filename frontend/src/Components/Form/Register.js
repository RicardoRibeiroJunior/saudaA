import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

import { Link } from 'react-router-dom';


import 'rbx/index.css';

import ComponentsHeader from '../../Components/Header/Header';
import ComponentsFooter from '../../Components/Footer/Footer';
import UiContainer from '../../Components/UI/Container/Container';

import "./Register.css";
import { Button } from "rbx";

const initialValue = {
    nome:'',
    cpf:'',
    endereco:'',
    data_nasc:'',
    email:'',
    senha:'',
}

export default function Register(){

    const [values, setValues] = useState(initialValue);
    const navigate = useNavigate();

   
    function onChange(ev) {
        const { name, value } = ev.target;
    
        setValues({ ...values, [name]: value });
    }
    
    function onSubmit(ev) {
        ev.preventDefault();

        const method = 'post';

        const url = `http://localhost:5000/user`;
    
        axios[method](url, values)
            .then((response) => {
            navigate('/list');
        });
    }

    return(
        <div>
            <ComponentsHeader/>

            <UiContainer>
                <div>
                    <h1 className="title">Cadastre-se</h1>                    

                        <form onSubmit={onSubmit}>
                            <div className="form__group">
                                <label htmlFor="name">Nome</label>
                                <input id="name" name="name" type="text" label="Digite seu nome" onChange={onChange}/>
                            </div>

                            <div className="form__group">
                                <label htmlFor="cpf">CPF</label>
                                <input id="cpf" name="cpf" type="text" label="Digite seu cpf" onChange={onChange}/>
                            </div>

                            <div className="form__group">
                                <label htmlFor="address">Endereço</label>
                                <input id="address" name="address" type="text" label="Digite seu endereço" onChange={onChange}/>
                            </div>

                            <div className="form__group">
                                <label htmlFor="birthDate">Data de Nascimento</label>
                                <input id="birthDate" name="birthDate" type="text" label="Digite sua data de nascimento" onChange={onChange}/>
                            </div>

                            <div className="form__group">
                                <label htmlFor="email">E-mail</label>
                                <input id="email" name="email" type="text" label="Digite seu e-mail" onChange={onChange}/>
                            </div>

                            <div className="form__group">
                                <label htmlFor="password">Senha</label>
                                <input id="password" name="password" type="text" label="Digite sua senha" onChange={onChange}/>
                            </div>

                            <div className="form-button">
                                <div>
                                    <Button color="success" type="submit">Salvar</Button>
                                </div>
                                <div>
                                    <Link to="/list" className="btn">Listar Usuários</Link>
                                </div>
                            </div>
                        </form>                            
                </div>
            </UiContainer>

            <ComponentsFooter/>
        </div>
    )
}