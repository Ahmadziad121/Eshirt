import React from 'react';
import back from "../../assets/back.webp";


const backImg ={
    backgroundImage: `url(${back})`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    hight:"100%",
    width:"100%",
}



const Sub = () => {
  return (
    <div>
        <div  data-aos="zoom-in" className=' mb-20 bg-gray-100 dark:bg-gray-800 text-white'
        style={backImg}>
        <div className=' container backdrop-blur-sm py-10'>
            <div className=' space-y-6 max-w-xl mx-auto '>
                <h1 className=' text-2xl !text-center sm:text-left *:sm:text-4xl font-semibold
                '>Get Notified About New Products</h1>
                <input data-aos="fade-up" type='text' placeholder='Enter your email ' 
                className=' w-full p-3 text-black'/>

            </div>
        </div>

        </div>
    </div>
  )
}

export default Sub