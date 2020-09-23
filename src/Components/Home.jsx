import React, { Component } from 'react';
import '../Assets/estilo-home.css';
import imgBootstrap from '../Assets/bootstrap.png';
import imgCeep from '../Assets/ceep.png';
import imgCssGrid from '../Assets/css-grid.png';
import imgFlexBox from '../Assets/flexBox.png';
import imgForm from '../Assets/form.png';
import imgJavaScript from '../Assets/javaScript-api.png';
import imgPaulo from '../Assets/paulo.jpg';
import imgJava from '../Assets/java.png';
import imgPhp from '../Assets/php-imagem.png';
import imgPython from '../Assets/python-imagem.jpg';
import imgCsharp from '../Assets/csharp.jpg';
import imgHtml from '../Assets/html-css-js-imagem.jpg';
import imgBootstrapLogo from '../Assets/bootstrap.jpg';
import imgGit from '../Assets/git-github.png';
import imgMysql from '../Assets/mysql.png';
import imgReact from '../Assets/react.png';
import imgMaterialUi from '../Assets/material-ui.png';

function Home() {
    return (
        <section className="background-color">
            <header className="menu-nav">
                <div className="container">
                    <h1 className="titulo-principal">Portfólio - Paulo Ricardo</h1>
                    <nav className="menu-nav-link">
                        <a className="menu-nav-link-link" href="#home">Home</a>
                        <a className="menu-nav-link-link" href="#sobre">Sobre</a>
                        <a className="menu-nav-link-link" href="#formacoes">Formações</a>
                        <a className="menu-nav-link-link" href="#projetos">Projetos</a>
                        <a className="menu-nav-link-link" href="#contato">Contato</a>
                    </nav>
                </div>
            </header>

            <main className="conteudoPrincipal">

                <div>
                    <img src={imgPaulo} alt="" className="imgPaulo" id="home" />
                    <ul className="dados">
                        <li><b>Nome</b>: Paulo Ricardo</li>
                        <li><b>Idade</b>: 23</li>
                        <li><b>Cidade</b>: Salvador - BA</li>
                        <li><b>Curso</b>: Sistemas de Informação</li>
                        <li><b>Semestre</b>: 4º</li>
                        <li><b id="contato">Linkedin</b>: <a href="https://www.linkedin.com/in/paulo-ara%C3%BAjo-3bb937199/">Paulo Ricardo</a></li>
                        <li><b>GitHub</b>: <a href="https://github.com/pkomander">Pkomander</a></li>
                    </ul>
                </div>

                <div className="container">
                    <h2 className="titulo-secundario" id="sobre">Sobre</h2>
                    <p>Estudante do curso de Sistemas de Informação atualmente no 4º Semestre que tem como seu foco principal se tornar um desenvolvedor de primeira.
                    Utilizando as tecnologias web para alcançar este objetivo com foco na interação do usuário é com há aplicação que está em uso,
                    esperando trazer satisfação na utilização dos meus projetos.</p>
                    <p>Atualmente dedicado ao estudo de tecnologias web como react.js e node.js, porem possuo experiencia em outras tecnologias.</p>
                </div>

                <div className="container">
                    <div className="alinhamento">
                        <h2 className="titulo-secundario" id="formacoes">Formações</h2>
                        <nav>
                            <ul className="tecnologias">
                                <li className="tecnologias-link" id="media-alinhamento"><h4>JAVA:</h4>
                                    <p>Conhecimento da linguagem de programação JAVA com utilização da lib JAVA.IO, JAVA.UTIL, POO.</p>
                                    <li><img src={imgJava} alt="imagem java" className="redimensionar-img-linguagem" /></li>
                                </li>
                                <li className="tecnologias-link" id="media-alinhamento"><h4>PHP:</h4>
                                    <p>Conhecimento da linguagem de programação PHP com os conceitos de POO.</p>
                                    <li><img src={imgPhp} alt="imagem php" className="redimensionar-img-linguagem" /></li>
                                </li>
                                <li className="tecnologias-link" id="media-alinhamento"><h4>PYTHON:</h4>
                                    <p>Conhecimento da linguagem de programação PYTHON com os conceitos de POO, com base em django.</p>
                                    <li><img src={imgPython} alt="imagem python" className="redimensionar-img-linguagem" /></li>
                                </li>
                                <li className="tecnologias-link" id="media-alinhamento"><h4>HTML:</h4>
                                    <p>Conhecimento em HTML.</p>
                                    <li><img src={imgHtml} alt=" imagem html, css, javascript" className="redimensionar-img-linguagem" /></li>
                                </li>
                                <li className="tecnologias-link" id="media-alinhamento"><h4>CSS:</h4>
                                    <p>Conhecimento em CSS com flexBox e CSS grid.</p>
                                    <li><img src={imgHtml} alt="imagem html, css, javascript" className="redimensionar-img-linguagem" /></li>
                                </li>
                                <li className="tecnologias-link" id="media-alinhamento"><h4>JAVASCRIPT:</h4>
                                    <p>Conhecimento da linguagem de programação JAVASCRIPT com POO, manipulação de DOM.</p>
                                    <li><img src={imgHtml} alt="imagem html, css, javascript" className="redimensionar-img-linguagem" /></li>
                                </li>
                                <li className="tecnologias-link" id="media-alinhamento"><h4>GIT - GITHUB:</h4>
                                    <p>Conhecimento da ferramenta de versionamento GIT em conjunto do GitHub.</p>
                                    <li><img src={imgGit} alt="imagem git - github" className="redimensionar-img-linguagem" /></li>
                                </li>
                                <li className="tecnologias-link" id="media-alinhamento"><h4>C#:</h4>
                                    <p>Conhecimento da linguagem de programação C# com POO.</p>
                                    <li><img src={imgCsharp} alt="imagem csharp" className="redimensionar-img-linguagem" /></li>
                                </li>
                                <li className="tecnologias-link" id="media-alinhamento"><h4>MYSQL:</h4>
                                    <p>Conhecimento no banco de dados MYSQL.</p>
                                    <li><img src={imgMysql} alt="imagem mysql" className="redimensionar-img-linguagem" /></li>
                                </li>
                                <li className="tecnologias-link" id="media-alinhamento"><h4>REACT.JS:</h4>
                                    <p>Conhecimento no FrameWork React.js utilizando class components e function components.</p>
                                    <li><img src={imgReact} alt="imagem react.js" className="redimensionar-img-linguagem" /></li>
                                </li>
                                <li className="tecnologias-link" id="media-alinhamento"><h4>MATERIAL UI:</h4>
                                    <p>Conhecimento na lib Material UI em conjunto do react.js.</p>
                                    <li><img src={imgMaterialUi} alt="imagem material ui" className="redimensionar-img-linguagem" /></li>
                                </li>
                                <li className="tecnologias-link" id="media-alinhamento"><h4>BOOTSTRAP:</h4>
                                    <p>Conhecimento do FrameWork Bootstrap.</p>
                                    <li><img src={imgBootstrapLogo} alt="imagem bootstrap" className="redimensionar-img-linguagem" /></li>
                                </li>
                            </ul>
                        </nav>
                    </div>


                </div>

                <div className="container">
                    <h2 className="titulo-secundario" id="projetos">Projetos</h2>
                    <p>Todos os projetos estão disponiveis no GitHub, foi utilizado para debloy o serviço da netlify para subir aplicação de forma gratuita.</p>

                    <ul className="tecnologias">
                        <li className="tecnologias-link" id="tecnologias-hover"><h4>Bootstrap:</h4>
                            <li>Site de catalogo de residencias TopCasaFina feito com Bootstrap.</li>
                            <li><a href="https://topcasafina-arquitetura.netlify.app/#"><img src={imgBootstrap} alt="imagem top casa fina" className="redimensionar-img" /></a></li>
                        </li>
                        <li className="tecnologias-link" id="tecnologias-hover"><h4>React Ceep:</h4>
                            <li>SPA Ceep feita com react para criação de notas.</li>
                            <li><a href="https://github.com/pkomander/react-ceep"><img src={imgCeep} alt="imagem SPA de notas" className="redimensionar-img" /></a></li>
                        </li>
                        <li className="tecnologias-link" id="tecnologias-hover"><h4>CSS Grid:</h4>
                            <li>Site Alura Store criado utilizando os conceitos de css grid layout, para construção da home page.</li>
                            <li><a href="https://cssgrid-alurastore.netlify.app/"><img src={imgCssGrid} alt="imagem alura store" className="redimensionar-img" /></a></li>
                        </li>
                        <li className="tecnologias-link" id="tecnologias-hover"><h4>FlexBox:</h4>
                            <li>Site Alurinha criado utilizando os conceitos de FlexBox.</li>
                            <li><a href="https://flexbox-alurinha.netlify.app/"><img src={imgFlexBox} alt="imagem alurinha" className="redimensionar-img" /></a></li>
                        </li>
                        <li className="tecnologias-link" id="tecnologias-hover"><h4>React Formulario:</h4>
                            <li>SPA formulario feito com React.js utilizando a lib Material UI, para componentização do formulario.</li>
                            <li><a href="https://github.com/pkomander/react-formulario"><img src={imgForm} alt="imagem formulario" className="redimensionar-img" /></a></li>
                        </li>
                        <li className="tecnologias-link" id="tecnologias-hover"><h4>JavaScript:</h4>
                            <li>Site Aparecida Nutricionista criado utilizando os conceitos de javascript, manipulação de DOM e consumo de API.</li>
                            <li><a href="https://aparecidanutricionista.netlify.app/"><img src={imgJavaScript} alt="imagem aparecida nutricionista" className="redimensionar-img" /></a></li>
                        </li>
                    </ul>
                </div>


            </main>

            <footer className="rodape">
                <h2>Todos os diretos reservados.</h2>
            </footer>
        </section>
    );
}

export default Home;