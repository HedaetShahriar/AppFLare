import React from 'react';
import { FaFacebook, FaGit, FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="footer bg-[#1a1919] text-xl text-neutral-content footer-horizontal footer-center rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">Terms Of Service</a>
                <a className="link link-hover">Privacy Policy</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://www.facebook.com/Hedaetshahriarhimon/' target='blank'>
                        <FaFacebook size={24}></FaFacebook>
                    </a>
                    <a href='https://github.com/HedaetShahriar' target='blank'>
                        <FaGithub size={24}></FaGithub>
                    </a>
                    <a href='https://www.linkedin.com/in/hedaet-shahriar/' target='blank'>
                        <FaLinkedin size={24}></FaLinkedin>
                        
                    </a>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()}. All right reserved by - <a className='font-medium'>Hedaet Shahriar Himon</a>.</p>
            </aside>
        </footer>
    );
};

export default Footer;