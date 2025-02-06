import React from 'react';
import Slider from "react-slick";

const feed =[
    {
    id:1,
    img:"https://lh3.googleusercontent.com/a/ACg8ocJZ-zHvcTSkn9LYiw-hF7IGBlr3-EGr5-7dArrbb5BvhSDFPnI-=s96-c-rg-br100",
    text:"Amazing quality and fast delivery! The kit fits perfectly, and the fabric is top-notch. Definitely ordering again!",
    name:"Ahmad",
        
    },
    {
    id:2,
    img:"https://picsum.photos/102/102",
    text:"Great selection of kits at reasonable prices. Customer service was super helpful with sizing questions!",
    name:"Mohammed",
    
},
{
    id:3,
    img:"https://picsum.photos/103/103",
    text:"Ordered a custom kit, and it turned out exactly as I wanted. Highly recommended!",
    name:"Aws",
    
},
{
    id:4,
    img:"https://picsum.photos/101/101",
    text:"The best online store for football kits! Everything was smooth from checkout to delivery.",
    name:"Ziad",
    
},

]
const Feed =() => {
    var settings ={
        dots:true,
        arrows:false,
        infinite:true,
        speed:500,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:true,
        pauseOnFocus: true,
        cssEase:" linear",
        responsive:[
            {
                breakpoint:10000,
                settings:{
                    slidesToScroll:1,
                    infinite:true,
                    slidesToShow:3,
                },
            },
            {
            breakpoint:1024,
            settings:{
                slidesToScroll:1,
                initialSlidw:2,
                slidesToShow:2, 
            },},{
            breakpoint:640,
                settings:{
                    slidesToScroll:1,
                    slidesToShow:1,
                },},
        ]  , 

        
    };
return (
    <div className=' py-10 mb-10'>
        <div className=' container'>
            <div className="text-center mb-10 max-w-[600px] mx-auto ">
                <p data-aos="fade-up" className="text-sm text-primary  ">What our customers are saying </p>
                <h1 data-aos="fade-up" className="text-3xl font-bold ">Customers Feedback</h1>
            </div>
            <div data-aos="zoom-in">
                <Slider {...settings} >
                    {feed.map((data) => (
                        <div className='my-6 '>
                            <div key={data.id} className=' flex flex-col gap-4 shadow-lg py-8  px-6 mx-4 rounded-xl  bg-primary/15 relative'>
                                <div className=' mb-4 '>
                                    <img src={data.img} className=' rounded-full w-20h h-20 '/>
                                </div>
                        <div className=' flex flex-col items-center gap-4'>
                            <div className=' space-y-3'>
                            <p className=' text-xs text-gray-400 '>{data.text} </p>
                            <h1 className=' text-xl font-bold text-black/80  dark:text-light '>{data.name} </h1>
                            </div>
                        </div>
                        <p className=' text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
                            </div>
                        </div>
                ))}
                </Slider>
            </div>
        </div>
    </div>
);
};

export default Feed