
import { Container, Row, Col } from "react-bootstrap";
import js from '../assets/skillsIcons/icons8-javascript.svg'
import react from '../assets/skillsIcons/react.svg'
import tailwind from '../assets/skillsIcons/tailwind.svg'
import bootstrap from '../assets/skillsIcons/bootstrap.svg'
import html from '../assets/skillsIcons/html.svg'
import css from '../assets/skillsIcons/css.svg'
import python from '../assets/skillsIcons/python.svg'
import flask from '../assets/skillsIcons/flask.svg'
import mongodb from '../assets/skillsIcons/mongodb.png'
import node from '../assets/skillsIcons/nodejs.svg'
import sql from '../assets/skillsIcons/sql.png'
import postgresql from '../assets/skillsIcons/postgresql.svg'
import figma from '../assets/skillsIcons/figma.svg'
import git from '../assets/skillsIcons/git.svg'
import json from '../assets/skillsIcons/json-web-token.svg'
import vsCode from '../assets/skillsIcons/vscode.svg'
import mac from '../assets/skillsIcons/macos.svg'
import laptop from '../assets/skillsIcons/laptop.png'
import coreskills from '../assets/core.png'
import java from '../assets/skillsIcons/java.png'
import spring from '../assets/skillsIcons/spring.png'

export const Skills = () => {

        return (
            <>
            <div className="skills-header">
                <h1 className="front-header">Front-End</h1>
                <h1 className="front-header">Back-End</h1>
            </div>
            <div className="skills-center">
                <div className="skills-container">
                <Container className="front-skills-container">
                        <Row>
                            <Col>
                                <div className="skill-bx">
                                <img src={js} alt="javascript"/>
                                    <p className="skill-name">JavaScript</p>
                                </div>
                            </Col>
                            <Col>
                                <div className="skill-bx">
                                    <img src={react} alt="React"/>
                                    <p className="skill-name">React</p>
                                </div>
                            </Col>
                            <Col>
                                <div className="skill-bx">
                                    <img src={tailwind} alt="tailwind"/>
                                    <p className="skill-name">Tailwind</p>
                                </div>
                            </Col>
                            </Row>
                        <Row>
                            <Col>
                                <div className="skill-bx">
                                <img src={bootstrap} alt="bootstrap"/>
                                    <p className="skill-name">Bootstrap</p>
                                </div>
                            </Col>
                            <Col>
                                <div className="skill-bx">
                                <img src={html} alt="html"/>
                                    <p className="skill-name">HTML 5</p>
                                </div>
                            </Col>
                            <Col>
                                <div className="skill-bx">
                                <img src={css} alt="css"/>
                                    <p className="skill-name">CSS 3 </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="back-skills-container">
                            <Row>
                                <Col>
                                    <div className="skill-bx">
                                    <img src={python} alt="python"/>
                                        <p className="skill-name">Python</p>
                                    </div>
                                </Col>
                                    <Col>
                                    <div className="skill-bx">
                                        <img src={flask} alt="Flask"/>
                                        <p className="skill-name">Flask</p>
                                    </div>
                                </Col>
                                <Col>
                                <div className="skill-bx">
                                    <img src={node} alt="node.js"/>
                                    <p className="skill-name">Node.JS</p>
                                </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="skill-bx">
                                    <img src={mongodb} alt="mongodb"/>
                                        <p className="skill-name">MongoDB</p>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="skill-bx">
                                    <img src={sql} alt="SQL"/>
                                        <p className="skill-name">SQL</p>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="skill-bx">
                                    <img src={postgresql} alt="postgresql"/>
                                        <p className="skill-name" >Postgresql</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="skill-bx">
                                    <img src={java} alt="java"/>
                                        <p className="skill-name">java</p>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="skill-bx">
                                    <img src={spring} alt="Spring"/>
                                        <p className="skill-name">spring</p>
                                    </div>
                                </Col>
                            </Row>
                    </Container>
                    </div>
            </div>
            <h1 className="tools-header">Development Tools</h1>
            <Container>
                <Row>
                    <Col>
                        <div className="tool-bx">
                        <img className="tool-icon" src={figma} alt="figma"/>
                            <p className="skill-name">Figma</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="tool-bx">
                        <img className="tool-icon" src={git} alt="git"/>
                            <p className="skill-name">Git</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="tool-bx">
                        <img className="tool-icon" src={json} alt="JWT"/>
                            <p className="skill-name">JSON Web Token</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="tool-bx">
                        <img className="tool-icon" src={vsCode} alt="vsCode"/>
                            <p className="skill-name">Visual Studio Code</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="tool-bx">
                        <img className="tool-icon" src={mac} alt="macOS"/>
                            <p className="skill-name">MacOS</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className= "ss-img-container">
                <img className= "ss-img" src={coreskills}/>        
            </div>
            <div className= "soft-skills">
                <div className="soft-skills-text">
                    <p>team player</p>
                    <p>detail oriented</p>
                    <p>innovative</p>
                </div>
                <img className= "me" src={laptop}/>
                <div className= "soft-skills-text">
                    <p>ambitious</p>
                    <p>problem-solver</p>
                    <p>analytical</p>
                </div>
            </div>
            </> 
        )
    };
