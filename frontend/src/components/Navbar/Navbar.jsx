import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown, FaUser } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const Menu = [
    { id: 1, name: "Home", link: "/#" },
    { id: 2, name: "Classic", link: "/Classics" },
    { id: 3, name: "Mens", link: "/Mens" },
    { id: 4, name: "Women", link: "/Womens" },
    { id: 5, name: "Kids", link: "/Kids" },
];

const DropdownLinks = [
    { id: 1, name: "Top selling", link: "#products" },
    { id: 2, name: "Top Classic", link: "#Top" },
    { id: 3, name: "Feedback", link: "#back" },
];

const Navbar = ({ handleOrderPopup, basketItems, handleRemoveFromBasket }) => {
    const [showCart, setShowCart] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    // Check if user is logged in
    useEffect(() => {
        const token = localStorage.getItem("auth-token");
        setIsAuthenticated(!!token);
    }, []);

    // Logout function
    const handleLogout = () => {
        localStorage.removeItem("auth-token");
        setIsAuthenticated(false);
        navigate("/login");
    };

    // Scroll to section function
    const handleScrollToSection = (path) => {
        const section = document.querySelector(path);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="shadow-md bg-white dark:bg-gray-900 duration-200 relative z-40">
            {/* Top bar */}
            <div className="bg-primary/40 py-2">
                <div className="container flex justify-between items-center">
                    {/* Logo */}
                    <a href="/" className="font-bold text-white text-2xl sm:text-3xl flex gap-2">
                        <img src={Logo} alt="logo" className="w-10" />
                        Eshirt
                    </a>

                    {/* Search Bar */}
                    <div className="relative group sm:block">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-[200px] sm:w-[200px] group-hover:w-[300px]
                            transition-all duration-300 rounded-full border-white px-2 py-1
                            focus:outline-none focus:border-1 focus:border-primary"
                        />
                        <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-0 translate-y-1/2 right-3" />
                    </div>

                    {/* Cart & User Buttons */}
                    <div className="flex relative">
                        {/* Cart Button */}
                        <div className="pr-4 relative">
                            <button
                                onClick={() => setShowCart(!showCart)}
                                className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white
                                py-1 px-4 rounded-full flex items-center gap-3 group"
                            >
                                <span className="transition-all duration-200 group-hover:block hidden">Order</span>
                                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
                                {basketItems.length > 0 && (
                                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                                        {basketItems.length}
                                    </span>
                                )}
                            </button>

                            {/* Cart Dropdown */}
                            {showCart && (
                                <div className="absolute right-0 mt-2 w-64 text-white bg-primary shadow-md rounded-md p-3">
                                    {basketItems.length === 0 ? (
                                        <p className="text-white text-sm">Your cart is empty</p>
                                    ) : (
                                        <ul className="max-h-60 overflow-y-auto">
                                            {basketItems.map((data, index) => (
                                                <li key={index} className="flex justify-between items-center border-b py-2">
                                                    <span className="text-sm">{data.title}</span>
                                                    <span className="text-sm font-bold pr-5">{data.price}</span>
                                                    <IoCloseOutline
                                                        className="text-2xl cursor-pointer"
                                                        onClick={() => handleRemoveFromBasket(index)}
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* User Authentication Button */}
                        {isAuthenticated ? (
                            <button
                                onClick={handleLogout}
                                className="bg-red-500 hover:bg-red-600 transition-all duration-200 text-white
                                py-1 px-4 rounded-full flex items-center gap-3 group"
                            >
                                <span className="transition-all duration-200 group-hover:block hidden">Logout</span>
                                <FaUser className="text-xl text-white drop-shadow-sm cursor-pointer" />
                            </button>
                        ) : (
                            <button
                                onClick={() => navigate("/login")}
                                className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white
                                py-1 px-4 rounded-full flex items-center gap-3 group"
                            >
                                <span className="transition-all duration-200 group-hover:block hidden">Login</span>
                                <FaUser className="text-xl text-white drop-shadow-sm cursor-pointer" />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Navbar Menu */}
            <div className="flex justify-center bg-white">
                <ul className="sm:flex hidden items-center gap-4">
                    {Menu.map((data) => (
                        <li key={data.id}>
                            <a className="inline-block px-4 hover:text-primary duration-200" href={data.link}>
                                {data.name}
                            </a>
                        </li>
                    ))}

                    {/* Dropdown Menu */}
                    <li className="relative group cursor-pointer">
                        <a href="#" className="flex items-center gap-[2px] py-2">
                            Best
                            <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                        </a>
                        <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md 
                            bg-white p-2 text-black shadow-md">
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
    );
};

export default Navbar;
