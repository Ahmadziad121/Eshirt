import React from 'react';
import Img1 from "../../assets/classic/real.jpg";
import Img2 from "../../assets/classic/barcelona.jpg";
import Img3 from "../../assets/classic/man.jpg";
import Img4 from "../../assets/classic/acmilan.jpg";
import Img5 from "../../assets/classic/bay.jpg";
import Img6 from "../../assets/classic/barce08.webp";
import Img7 from "../../assets/classic/france06.jpg";
import Img8 from "../../assets/classic/france98.webp";
import Img9 from "../../assets/classic/inter98.webp";
import Img10 from "../../assets/classic/liverpool98.webp";
import Img11 from "../../assets/classic/real01.png";
import Img12 from "../../assets/classic/real17.webp";
import Img13 from "../../assets/classic/spain98wc.webp";
import Img14 from "../../assets/classic/uni08.webp";
import Img15 from "../../assets/classic/uni92.webp";
import { FaStar } from "react-icons/fa6";


const ProductsData =[
    {
        id:1,
        img:Img1,
        title:"Real Madrid Classic",
        description:"Real Madrid 2006-07 Home Sponsor by Siemens   ",
    },
    {
        id:2,
        img:Img2,
        title:"Barcelona Classic",
        description:"FC Barcelona 1995-96 Away ",
    },
    {
        id:3,
        img:Img3,
        title:"Man United Classic",
        description:"Manchester United 1992-93 Home Sponsor by Sharp  ",
    },
    {
        id:4,
        img:Img4,
        title:"Ac Milan Classic",
        description:"AC Milan 1996-97 Home Sponsor by Opel ",
    },
    {
        id:5,
        img:Img5,
        title:"Bayern Munich Classic",
        description:"Bayern München 1997-98 Home  Sponsor by Opel ",
    },
    {
        id:6,
        img:Img6,
        title:"Brcelona Classic",
        description:"Brcelona 2008-09 Home UCL Final  ",
    },
    {
        id:7,
        img:Img7,
        title:"France Classic",
        description:"France 2006 Home World Cup Final  ",
    },
    {
        id:8,
        img:Img8,
        title:"France Classic",
        description:"France 1998 Home World Cup Final  ",
    },
    {
        id:9,
        img:Img9,
        title:" Inter Milan Classic",
        description:"Inter Milan 1998/99 Home  ",
    },
    {
        id:10,
        img:Img10,
        title:"Liverpool Classic",
        description:" Liverpool 1998/99 Home   ",
    },
    {
        id:11,
        img:Img11,
        title:"Real Madrid Classic",
        description:"Real Madrid 2001/02 Home UCL Final  ",
    },
    {
        id:12,
        img:Img12,
        title:"Real Madrid Classic",
        description:"Real Madrid 2017/18 Third UCL Final  ",
    },
    {
        id:13,
        img:Img13,
        title:"Spain Classic",
        description:"Spain 1998/99 Home World Cup ",
    },
    {
        id:14,
        img:Img14,
        title:"Man United Classic ",
        description:"Man United  2008/09 Home UCL Final  ",
    },
    {
        id:15,
        img:Img15,
        title:"Man United Classic Classic",
        description:"Man United  1992/93 Home   ",
    },

]

const Classics = ({handleAddToBasket}) => {
  return (
     <div id="Top" >
                <div className="container">
                <div className="text-center mb-24 max-w-[600px] mx-auto ">
                       <p className='p-4'></p>
                        <h1 data-aos="fade-up" className="text-3xl font-bold ">Classic Jersey</h1>
                    </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-20 md:gap-5 
                        place-items-center">
                   { ProductsData.map((data) => (
                        <div data-aos="zoom-in"
                         className="rounded-2xl bg-white dark:bg-gray-100 dark:hover:bg-primary
                        hover:text-white relative hover:bg-black/80 shadow-xl duration-300 group max-w-[300px]">
                            <div className="h-[100px]" > 
                            <img src={data.img}  className="max-w-[150px] block mx-auto transform
                            -translate-y-9 group-hover:scale-105 duration-300 drop-shadow-md"/>
                            </div>
                            <div className="p-4 text-center">
                            <div className="w-full flex items-center justify-center gap-1">
                                <FaStar className="text-yellow-500"/>
                                <FaStar className="text-yellow-500"/>
                                <FaStar className="text-yellow-500"/>
                                <FaStar className="text-yellow-500"/>
                            </div>
                            <h1 className="text-xl font-bold">{data.title}</h1>
                            <p className="text-gray-500 group-hover:text-white duration-300
                            text-sm line-clamp-2">{data.description}</p>
                            <button className="group-hover:text-primary bg-primary hover:scale-105 duration-300 
                            text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white" 
                            onClick={()=> handleAddToBasket(data)}
                            >Order Now</button>
                            </div>
    
                        </div>
                    ))}
                </div>
                </div>
            </div>
    
  )
}

export default Classics