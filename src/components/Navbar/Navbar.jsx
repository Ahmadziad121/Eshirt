import React from "react";
import Logo from "../../assets/Logo.avif";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown ,FaUser} from "react-icons/fa";
import { IoCloseOutline } from 'react-icons/io5';
const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Classic",
        link: "/Classics",
    },
    {
        id: 3,
        name: "Mens",
        link: "/Mens",
    },
    {
        id: 4,
        name: "Women",
        link: "/Womens",
    },
    {
        id: 5,
        name: "Kids",
        link: "/Kids",
    },
];
const DropdownLinks=[
    {
        id:1,
    name: "Top selling",
    link: "#products",
    },
    {
        id:2,
        name: "Top Classic",
        link: "#Top",
        },
    {  
    id:3,
    name: "Feedback",
    link: "#back",
},

];


const Navbar =({handleOrderPopup ,basketItems,handleRemoveFromBasket}) => {
    const [showCart, setShowCart] = React.useState(false);
    const handleScrollToSection = (path) => {
    const section = document.querySelector(path);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }}
    return (
        <div className="shadow-md bg-white  dark:bg-gray-900 duration-200 relative z-40">
            <div className="bg-primary/40 py-2 ">
            <div className="container flex justify-between items-center">
                <div  id="home">
                    <a href="/" className="font-bold text-white text-2xl sm:text-3xl flex gap-2">
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
                <div className="flex relative   ">
                <div className="pr-4 relative">
                <button onClick={()=>setShowCart(!showCart)}
                    className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white
                    py-1 px-4 rounded-full  flex items-center  gap-3 group ">
                <span className="transition-all duration-200 group-hover:block hidden  ">Order</span>
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer  "/>
                {basketItems.length > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {basketItems.length}
                  </span>
                )}
                </button>
                              {/* CART DROPDOWN */}
              {showCart && (
                <div className="absolute right-0 mt-2 w-64 text-white  bg-primary shadow-md rounded-md p-3">
                  {basketItems.length === 0 ? (
                    <p className=" text-white text-sm">Your cart is empty</p>
                  ) : (
                    <ul className="max-h-60 overflow-y-auto">
                      {basketItems.map((data, index) => (
                        <li key={index} className="flex justify-between items-center border-b py-2">
                          <span className="text-sm">{data.title}</span>
                          <span className="text-sm font-bold pr-5">{data.price}</span>
                          <IoCloseOutline className=' text-2xl cursor-pointer '
                              onClick={()=> handleRemoveFromBasket(index)}/>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
                </div>
                
                <button onClick={()=> handleOrderPopup()}
                    className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white
                    py-1 px-4 rounded-full flex items-center gap-3 group ">
                <span className="transition-all duration-200 group-hover:block hidden  ">Order</span>
                <FaUser  className="text-xl text-white drop-shadow-sm cursor-pointer  "/>
                </button></div>
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
                <a href="#" className="flex  items-center gap-[2px] py-2">Best
                <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180  "/>
                </span></a>
                <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md 
                bg-white p-2 text-black shadow-md  ">
                    <ul>
                    {DropdownLinks.map((data) => (
                                    <li key={data.id}>
                                        <a
                                            href={data.link}
                                            className="inline-block w-full rounded-md hover:bg-primary/20"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleScrollToSection(data.link);
                                            }}
                                        >
                                            {data.name}
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