import React from 'react';
import logo from "../../assets/Logo.avif";
import back from "../../assets/back.webp";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6';
import { FaMobileAlt } from 'react-icons/fa';
const backImg ={
    backgroundImage: `url(${back})`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    hight:"100%",
    width:"100%",
}
const FoterLinks =[
    {
        title:"Home",
        link:"/#",

    },
    {
        title:"About",
        link:"/#about",

    },
    {
        title:"Contact",
        link:"/#contact",

    },

];
const Footer = () => {
return (
<div className= ' text-white mb-20' style={backImg}>
    <div className=' container'>
        <div className=' grid md:grid-cols-4 pb-38 pt-5'>
            <div className=' py-8 px-4 '>
                <h1 className=' sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'><img src={logo} className='max-w-[50px]' />Eshirt</h1>
                <p>we believe that football is more than just a sport—it’s a lifestyle. Our mission is to provide top-tier football kits, training gear, and accessories to fans and players worldwide.</p>
            </div>
            <div className=' grid grid-cols-3  sm:grid-cols-3 col-span-2
            md:pl-24'>
                <div>
                    <div className='py-8 px-4 '>
                <h1 className=' sm:text-3xl text-xl font-bold sm:text-left texy-justify mb-3'>Link</h1>
                <ul className='flex flex-col gap-3'>
                    {
                        FoterLinks.map((link)=>(
                            <li className=' cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={link.title}>
                                <span>{link.title}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
            </div>
                <div>
                <div className=' flex items-center gap-3 mt-6'>
                <a href='#'>
                    <FaInstagram className='text-3xl'/>
                </a>
                <a href='#'>
                    <FaFacebook className='text-3xl'/>
                </a>
                <a href='#'>
                    <FaLinkedin className='text-3xl'/>
                </a>

                </div>
                <div className=' mt-6'>
                <div className=' flex items-center gap-3'>
<FaLocationArrow /><p>Jordan, Amman</p>
                </div>
                        <div className=' flex items-center gap-3'>
                            <FaMobileAlt /> <p>+962781404128</p>
                        </div>
                </div>

                </div>

                    </div>
                </div>
            </div>
        </div>
    

)
}

export default Footer;