import React, { useState, useRef } from 'react';
import './Contact.css';
import { FaInstagramSquare, FaTwitterSquare, FaLinkedin, FaGithubSquare, FaYoutube } from "react-icons/fa";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [ccos,changeccos]=useState({height:"100vh",width:"100%"})

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zizs5rm', 'template_dgoe0wf', form.current, {
            publicKey: '36jTk26kd3RtIlGJO',
        }).then(
            () => {
                alert("Message sent");
                setName('');
                setEmail('');
                setMessage('');
            },
            (error) => {
                alert("Message was not sent, please try again.");
            }
        );
    };

    return (
        <div className='contact-container' style={ccos}>
            
            <div className='contact-form'>
                <h1>Contact Me</h1>
                <form onSubmit={sendEmail} ref={form}>
                    <label>Full Name</label>
                    <input type='text' name='from_name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required/>

                    <label>Email</label>
                    <input type='email' name='from_email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>

                    <label>Message</label>
                    <textarea name='message' placeholder='Your message' value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>

                    <button type='submit'>Contact Me</button>
                </form>

                <div className='contact-details'>
                    <p><strong>Contact</strong><br />aaditya.adh@gmail.com</p>
                    <p><strong>Based in</strong><br />Kathmandu, Nepal</p>
                </div>

                <div className='social-icons'>
                    <a href='https://www.instagram.com/aaditya_adhikari1/'><FaInstagramSquare size={24} color='hotpink' /></a>
                    <a href='https://x.com/Aaditya_adh'><FaTwitterSquare size={24}  color='black'/></a>
                    <a href='https://www.linkedin.com/in/aaditya-adhikari-b82ba028b/'><FaLinkedin size={24}  color='skyblue'/></a>
                    <a href='https://github.com/AadityaAdh'><FaGithubSquare size={24} color='black' /></a>
                    <a href='https://www.youtube.com/@aadityaadhikari5009'><FaYoutube size={24}  color='red'/></a>
                </div>
            </div>
        </div>
    );
}
