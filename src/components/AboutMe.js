import React from 'react';
import { Skills } from './Skills';
import { Hobbies } from './Hobbies+Int';
import Slider from 'react-slick';
import me from '../assets/img/myPic.jpg';
import whoAmI from '../assets/who8.png';
import technicalSkills from '../assets/tech.png';
import stony from '../assets/img/stony.png';
import flatiron from '../assets/flatiron.png';
import CSS from '../CSS/AboutMe.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const AboutMe = () => {
    // Slider settings for work experience carousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div className="bg">
            <div className="content-container">
                <img className="my-pic" src={me} alt="My Picture" />
                <div className="text-container">
                    <img className="who-am-I" src={whoAmI} alt="who-am-i-text" />
                    <div className="about-text">
                        <p className="p">
                            Hi, I'm Joshua Cruz, a dedicated software engineer with a passion for collaboration and problem-solving. I thrive in team environments where we can design and develop solutions that drive business success. With a solid background in JavaScript, Python, and Java, I'm eager to showcase my expertise through the projects I've worked on. Feel free to explore my portfolio and learn more about what I bring to the table!
                        </p>
                    </div>
                </div>
            </div>

            <div className="technical-skills">
                <img className="technical-skills-image" src={technicalSkills} alt="technical-skills-text" />
            </div>
            
            <Skills />

            <div className="education-experience">
                <div className="education">
                    <h2 className="edu-header">Education</h2>
                    <div className="edu-content">
                        <div className="flatiron">
                            <img className="flat-img" src={flatiron} alt="flatiron logo" />
                            <p className="edu-text">Full-Stack Software Engineering Bootcamp</p>
                        </div>
                        <div className="flatiron">
                            <img className="stony-img" src={stony} alt="Stony Brook logo" />
                            <div className="stony-edu-text">
                                <p>Stony Brook University, SUNY</p>
                                <p className="edu-txt">Bachelor of Science in Biological Sciences</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="work">
                    <h2 className="work-header">Work Experience</h2>
                    <Slider {...settings}>
                        {/* Emergency Medical Technician Slide */}
                        <div className="slide">
                            <h3>Emergency Medical Technician | Northwell Health</h3>
                            <h4>11/2021 - 12/2022</h4>
                            <div className="text-work">
                                <ul>
                                    <li>Provided critical first-response medical care to patients in emergency situations</li>
                                    <li>Safely transported patients to hospitals while maintaining continuous monitoring and treatment during transit</li>
                                    <li>Quickly assessed patient conditions and made informed decisions to implement appropriate medical interventions</li>
                                    <li>Accurately documented patient information in EMR</li>
                                </ul>
                            </div>
                        </div>

                        {/* Patient Registration Specialist Slide */}
                        <div className="slide">
                            <h3>Patient Registration Specialist | White Plains Hospital</h3>
                            <h4>05/2023 - 06/2024</h4>
                            <div className="text-work">
                                <ul>
                                    <li>Registered all incoming patients, ensuring accurate recording of demographic and billing information in the hospital information system</li>
                                    <li>Collected patient co-pays, deposited daily collections with proper documentation, and maintained statistical data for emergency and labor/delivery patients</li>
                                    <li>Proficient in utilizing EPIC Systems for efficient patient registration, data management, and maintaining accurate electronic health records (EHR)</li>
                                </ul>
                            </div>
                        </div>

                        {/* Manager Slide */}
                        <div className="slide">
                            <h3>Manager | Betty's Total Events</h3>
                            <h4>6/2020 - 5/2023</h4>
                            <div className="text-work">
                                <ul>
                                    <li>Led a team of staff to execute events, ensuring smooth operations from setup to breakdown</li>
                                    <li>Managed scheduling, staffing, and inventory to optimize service efficiency and maintain high-quality standards during weddings, corporate events, and private functions</li>
                                    <li>Acted as the primary point of contact for clients, addressing any concerns promptly and ensuring things ran smoothly</li>
                                </ul>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
            
            <Hobbies />
        </div>
    );
};
