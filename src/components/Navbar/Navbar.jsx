import React from "react";
import Logo from "../../assets/Logo.avif";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Top Rated",
        link: "/#services",
    },
    {
        id: 3,
        name: "Mens",
        link: "/#",
    },
    {
        id: 3,
        name: "Women",
        link: "/#",
    },
    {
        id: 3,
        name: "Kids",
        link: "/#",
    },
];
const DropdownLinks=[{  
    id:1,
    name: "Trending Kit",
    link: "/#",
},
{
    id:2,
name: "Best selling",
link: "/#",
},
{
    id:3,
    name: "Top Rated",
    link: "/#",
    },
];


const Navbar =() => {
    return (
        <div className="shadow-md bg-white  dark:bg-gray-900 duration-200 relative z-40">
            <div className="bg-primary/40 py-2 ">
            <div className="container flex justify-between items-center">
                <div>
                    <a href="#" className="font-bold text-white text-2xl sm:text-3xl flex gap-2">
                        <img src={Logo} alt="logo" className="w-10" />
                         Eshirt
                    </a>
                </div>
                <div>
                    <div className="relative group  sm:block">
                        <input type="text" placeholder="search"
                         className="w-[200px] sm:w-[200px] group-hover:w-[300px]
                         transition-all duration-300 rounded-full border:white px-2 py-1
                         focus:outline-none focus:boarder-1 focus:boarder-primary"/>
                          <IoMdSearch className="text-gray-500 group-hover:text-primary 
                           absolute top-0 translate-y-1/2 right-3" />
                    </div>
                </div>
                <button onClick={()=>alert("Ordering not available yet")}
                    className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white
                    py-1 px-4 rounded-full flex items-center gap-3 group ">
                <span className="transition-all duration-200 group-hover:block hidden  ">Order</span>
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer  "/>
                </button>
            </div>

        </div>
        <div className="flex justify-center bg-white" >
        <ul className="sm:flex hidden items-center gap-4">
            {
                Menu.map((data)=>(
                    <li key={data.id}>
                        <a className="inline-block px-4 hover:text-primary  duration-200 " href={data.link}>{data.name}</a>
                    </li>
            ))}
            <li className="relative group cursor-pointer ">
                <a href="#" className="flex  items-center gap-[2px] py-2">Trending
                <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180  "/>
                </span></a>
                <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md 
                bg-white p-2 text-black shadow-md  ">
                    <ul>
                        {DropdownLinks.map((data)=>(
                            <li >
                             <a href={data.link} className="inline-block w-full rounded-md hover:bg-primary/20 ">{data.name} 
                             </a>  
                            </li>
                        ))}
                    </ul>
                </div>
            </li>
        </ul>

        </div>



        </div>
    )
}
export default Navbar