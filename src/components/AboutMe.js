import React from 'react';
import {Skills} from './Skills'
import {Hobbies} from './Hobbies+Int'
import me from '../assets/img/myPic.jpg'
import whoAmI from '../assets/who8.png'
import technicalSkills from '../assets/tech.png'
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
                    <div className="job-header">
                        <h3>Emergency Medical Technician | Northwell Health</h3>
                        <h3>11/2021 - 12/2022</h3>
                    </div>
                    <div className="text-work">
                        <ul>Provided critical first-response medical care to patients in emergency situations</ul>
                        <ul>Safely transported patients to hospitals while maintaining continuous monitoring and treatment during transit</ul>
                        <ul>Quickly assessed patient conditions and made informed decisions to implement appropriate medical interventions</ul>
                        <ul>Accurately docuemented patient information in EMR</ul>
                    </div>
                    <div className="job-header">
                        <h3>Patient Registration Specialist | White Plains Hospital</h3>
                        <h3>05/2023 - 06/2024</h3>
                    </div>
                    <div className="text-work">
                        <ul>Registered all incoming patients, ensuring accurate recording of demographic and billing information in the hospital information system</ul>
                        <ul>Collects patient co-pays, deposits daily collections with proper documentation, and maintains statistical data for emergency and labor/delivery patients</ul>
                        <ul>Proficient in utilizing EPIC Systems for efficient patient registration, data management, and maintaining accurate electronic health records (EHR)</ul>
                    </div>
                    <div className="job-header">
                        <h3>Manager | Betty's Total Events</h3>
                        <h3>6/2020 - 5/2023</h3>
                    </div>
                    <div className="text-work">
                        <ul>Led a team of staff to execute events, ensuring smooth operations from setup to breakdown</ul>
                        <ul>Managed scheduling, staffing, and inventory to optimize service efficiency and maintain high-quality standards during weddings, corporate events, and private functions</ul>
                        <ul>Acted as the primary point of contact for clients, addressing any concerns promptly and ensuring things ran smoothly</ul>
                    </div>
                </div>
                </div>
            </div>
            <Hobbies />
    </div> 
)};