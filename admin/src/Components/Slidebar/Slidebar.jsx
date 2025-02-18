import React from 'react';
import {Link} from "react-router-dom"
import { FaCartShopping } from "react-icons/fa6";
import { IoIosFolderOpen } from "react-icons/io";

const Slidebar = () => {
  return (
    <div className=' flex flex-col  pt-[30px] gap-[30px] w-[100%] max-w-[250px] h-[100vh] bg-white  '>
    <Link to={'/addproduct'} style={{textDecoration:'none'}}>
        <div className=' flex  items-center justify-center mt-[0px] mr-[20px] pt-[5px] pr-[10px]  rounded-[5px] bg-gray-100 gap-[20px] cursor-pointer'>
            <FaCartShopping className='w-[40px] h-[50px]'  />
            <p>Add product</p>
        </div>
    </Link>
    <Link to={'/listproduct'} style={{textDecoration:'none'}}>
        <div className=' flex  items-center justify-center mt-[0px] mr-[20px] pt-[5px] pr-[10px] rounded-[5px] bg-gray-100 gap-[20px] cursor-pointer'>
        <IoIosFolderOpen className='w-[40px] h-[50px]' />
            <p>Product</p>
        </div>
    </Link>
    </div>
  )
}

export default Slidebar