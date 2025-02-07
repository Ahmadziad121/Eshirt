import React from "react";
import Image1 from "../../assets/hero/all.jpg";
import Image2 from '../../assets/hero/sale.png';
import Image3 from '../../assets/hero/shoping.webp';
import Slider from "react-slick";


const ImageList =[
    {
        id:1,
        img:Image1,
        title:"Up to 50% off on all Men's Wear",
       

    },
    {
        id:2,
        img: Image3,
        title:"30% off on all Women's Wear",
       

    },
    {
        id:3,
        img: Image2,
        title:" 70% off on all Products Sale",
       

    },

];
const Hero =({handleOrderPopup}) => {
    var settings ={
        dots:false,
        arrows:false,
        speed:800,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:4000,
        pauseOnHover:false,
        pauseOnFocus: true,
        cssEase:"ease-in-out"
    }
    return ( 
        <div className="relative overflow-hidden min-h-[550px]
        sm:min-h-[550px] bg-gray-100 flex justify-center items-center 
        dark:bg-gray-900 dark:text-white duration-200">
            <div className="h-[500px] w-[500px] bg-primary/40 
            absolute -top-1/2  rounded-3xl rotate-45 -z[8]">

            </div>
            <div className="container pb-8 sm:pb-1">
            <Slider {...settings}>
            {
                ImageList.map((data) => (

             


            
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                       <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 
                       text-center sm:text-left order-2 sm:order-1 relative z-10">
                        <h1 data-aos="zoom-out" data-aos-once="true" data-aos-duration="500"  className="text-5xl sm:text-5xl lg:text-6xl font-bold">
                            {data.title}
                        </h1><p>
                            
                        </p>
                       
                        <div data-aos="fade-up"  data-aos-delay="300"  data-aos-duration="500" >
                            <button onClick={ handleOrderPopup} className="bg-gradient-to-r from-primary to-secondary duration-200 text-white
                            hover:scale-105 py-2 px-4 rounded-full " >
                                Order Now
                            </button>
                        </div>
                        </div>
                        <div className="order-1 sm:order-2">
                        <div data-aos="zoom-in" data-aos-once="true"  className="relative z-10">
                        <img src={data.img} className="h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] 
                       sm:scale-115 lg:scale-120 object-contain mx-auto "/>
                        </div>
                        </div>
                    </div>
                </div>
            ))
        }
                </Slider>   
          
            </div>
        </div>)
};
export default Hero;