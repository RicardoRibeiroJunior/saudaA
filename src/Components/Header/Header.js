import React from "react";
import { Navbar, Button } from "rbx";
import Logo from '../imgs/logo.png';
import 'rbx/index.css';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <div>
            <section class="hero is-bold is-link">
                <div class="hero-body">
                            <div class="container has-text-centered">
                                <h1 class="title">
                                    Saúde A+
                                </h1>
                                <p class="subtitle">
                                    Studio de Pilates.
                                </p>
                            </div>
                        </div>
            </section>
            <section class = "hero margem-header">
                <div class="hero-head">
                    <Navbar>
                        <Navbar.Brand>
                            <Navbar.Item href="#">
                            <img
                                src={Logo}
                                alt=""
                                role="presentation"
                                width="162"
                                height="162"
                            />
                            </Navbar.Item>
                            <Navbar.Burger />
                        </Navbar.Brand>
                        <Navbar.Menu>
                            <Navbar.Segment align="start">
                                <Navbar.Item><Link to="/">Inicio</Link></Navbar.Item>
                                <Navbar.Item><Link to="/class-schedule">Agende Sua Aula</Link></Navbar.Item>
                                <Navbar.Item><Link to="/modality">Modalidades</Link></Navbar.Item>
                                <Navbar.Item><Link to="/schedule">Horários</Link></Navbar.Item>             
                            </Navbar.Segment>

                            <Navbar.Segment align="end">
                            <Navbar.Item>
                                <Button.Group>
                                <Button color="info">
                                    <strong>Cadastre-se</strong>
                                </Button>
                                <Button color="light">Entrar</Button>
                                </Button.Group>
                            </Navbar.Item>
                            </Navbar.Segment>
                        </Navbar.Menu>
                    </Navbar>
                </div>
            </section>
        </div>
    )
}