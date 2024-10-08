import React, { useRef, useState } from 'react';
import MsgModal from './MsgModal';
import emailjs from '@emailjs/browser';
import linkedin from '../assets/img/linkedinlogo.png';
import github from '../assets/img/githublogo.png';
import gmail from '../assets/img/gmaillogo.png';
import CSS from '../CSS/Contact.css';

export const Contact = () => {
    const form = useRef();
    const [show, setShow] = useState(false);

    // Accessing environment variables
    const serviceKey = process.env.REACT_APP_ID; // Service ID (REACT_APP_ID)
    const templateKey = process.env.REACT_APP_TEMPLATE_KEY; // Template ID (REACT_APP_TEMPLATE_KEY)
    const id = process.env.REACT_APP_PUBLIC_KEY; // Public Key (REACT_APP_PUBLIC_KEY)

    // Logging to verify values are being loaded correctly
    console.log("Service Key:", serviceKey);
    console.log("Template Key:", templateKey);
    console.log("Public Key:", id);

    const sendEmail = (e) => {
        e.preventDefault();

        // Using the environment variables to send email
        emailjs.sendForm(serviceKey, templateKey, form.current, id)
        .then((result) => {
            console.log("Email successfully sent:", result.text);
            setShow(true);
        }, (error) => {
            console.error("Failed to send email:", error.text);
        });
    };

    return (
        <div className="contact-bg">
            <div className="form-container">
                <h2 className="header-msg">Send a message</h2>
                <form className="form" ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" placeholder="Your name" />

                    <label>Email</label>
                    <input type="email" name="user_email" placeholder="Your email" />

                    <label>Message</label>
                    <textarea name="message" placeholder="Write me a message" />

                    <input type="submit" value="Send" />
                </form>
            </div>
            <div className="connect-container">
                <h2 className="connect-msg">Connect with me!</h2>
                <div className="logos-container">
                    <div className="logos">
                        <div className="logo">
                            <a href="https://www.linkedin.com/in/joshua-c-98287594/" target="_blank" rel="noopener noreferrer">
                                <img className="logo-img" src={linkedin} alt="linkedin" />
                                <p>Linkedin</p>
                            </a>
                        </div>
                        <div className="logo">
                            <a href="https://github.com/JoshC1998" target="_blank" rel="noopener noreferrer">
                                <img className="logo-img" src={github} alt="github" />
                                <p>Github</p>
                            </a>
                        </div>
                        <div className="logo">
                            <a href="mailto:jcruz1998@gmail.com">
                                <img className="logo-img" src={gmail} alt="email" />
                                <p>Email me!</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <MsgModal show={show} onHide={() => setShow(false)} />
        </div>
    );
};
