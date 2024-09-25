import React from 'react';
import {Skills} from './Skills'
import {Hobbies} from './Hobbies+Int'
import me from '../assets/img/myPic.jpg'
import whoAmI from '../assets/font/whoAmI.png'
import technicalSkills from '../assets/font/technicalskills.png'
import stony from '../assets/img/stony.png'
import flatiron from '../assets/flatiron.png'
import CSS from '../CSS/AboutMe.css'

export const AboutMe = () => {
    return (
        <div className="bg">
            <div className="content-container">
                <img className="my-pic" src={me} alt="My Picture" />
                <div className="text-container">
                <img className="who-am-I" src={whoAmI} alt="who-am-i-text" />
                <div className="about-text">
                    <p className="p">Hi, I'm Joshua Cruz, a dedicated software engineer with a passion for collaboration and problem-solving. I thrive in team environments where we can design and develop solutions that drive business success. With a solid background in JavaScript, Python, and Java, I'm eager to showcase my expertise through the projects I've worked on. Feel free to explore my portfolio and learn more about what I bring to the table!</p>
                </div>
                </div>
            </div>
            <div className="technical-skills">
                <img className="technical-skills-image" src = {technicalSkills} alt="technical-skills-text"/> 
            </div>
            <Skills/>
            <div className="education-experience">
                <div className="education">
                <h2 className="edu-header">Education</h2>
                    <div className= "edu-content">
                    <div className='flatiron'>
                        <img className="flat-img"src={flatiron} alt="flatiron logo"/>
                        <p className="edu-text">Full-Stack Software Engineering Bootcamp</p>
                    </div>
                    <div className='flatiron'>
                        <img className="stony-img"src={stony} alt="Stony Brook logo"/>
                        <div className="stony-edu-text">
                        <p>StonyBrook University, SUNY</p>
                        <p className="edu-txt">Bachelor of Science in Biological Sciences</p>
                        </div>
                    </div>

                    </div>
                </div>
                <div className="work">
                <h2 className="work-header">Work Experience</h2>
                <div className="work-content">
                    <div className="statmd-header">
                        <h3>Emergency Medical Technician | Northwell Health</h3>
                        <h3>11/2021 - 12/2022</h3>
                    </div>
                    <div className="text-work">
                        <ul>Provided critical first-response medical care to patients in emergency situations</ul>
                        <ul>Safely transported patients to hospitals while maintaining continuous monitoring and treatment during transit</ul>
                        <ul>Quickly assessed patient conditions and made informed decisions to implement appropriate medical interventions</ul>
                        <ul>Accurately docuemented patient information in EMR</ul>
                    </div>
                </div>
                </div>
            </div>
            <Hobbies />
    </div> 
)};