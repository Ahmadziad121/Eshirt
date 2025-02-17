import React from 'react';
import logo from "../../assets/Logo.png";
import back from "../../assets/back.webp";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6';
import { FaMobileAlt } from 'react-icons/fa';

const backImg = {
    backgroundImage: `url(${back})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const FooterLinks = [
    {
        title: "Home",
        path: "#home", // Add an id for the Home section
    },
    {
        title: "About",
        path: "#about", // Add an id for the About section
    },
    {
        title: "Contact",
        path: "#contact", // Add an id for the Contact section
    },
];

const Footer = () => {
    // Function to handle smooth scrolling
    const handleScrollToSection = (path) => {
        const section = document.querySelector(path);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='text-white' style={backImg}>
            <div className='container'>
                <div className='grid md:grid-cols-4 pb-38 pt-5' data-aos="zoom-in">
                    <div className='py-8 px-4 ' id='about'>
                        <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>
                            <img src={logo} className='max-w-[50px]' alt="Logo" />
                            Eshirt
                        </h1>
                        <p>We believe that football is more than just a sport—it’s a lifestyle. Our mission is to provide top-tier football kits, training gear, and accessories to fans and players worldwide.</p>
                    </div>
                    <div className='grid grid-cols-3 sm:grid-cols-3 col-span-2 md:pl-24'>
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Links</h1>
                                <ul className='flex flex-col gap-3'>
                                    {FooterLinks.map((link, index) => (
                                        <li
                                            className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                                            key={index}
                                            onClick={() => handleScrollToSection(link.path)}
                                        >
                                            <span>{link.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div id="contact">
                            <div className='flex items-center gap-3 mt-6'>
                                <a href='https://www.instagram.com/ahmad_ziad1/' target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className='text-3xl' />
                                </a>
                                <a href='https://www.facebook.com/ahmadziad7580/' target="_blank" rel="noopener noreferrer">
                                    <FaFacebook className='text-3xl' />
                                </a>
                                <a href='https://www.linkedin.com/in/ahmad-ziad-845443327/' target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className='text-3xl' />
                                </a>
                            </div>
                            <div className='mt-6'>
                                <div className='flex items-center gap-3'>
                                    <FaLocationArrow />
                                    <p>Jordan, Amman</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <FaMobileAlt />
                                    <p>+962781404128</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;