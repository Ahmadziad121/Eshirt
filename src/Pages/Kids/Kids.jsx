import React from 'react';
import Img1 from "../../assets/Kids/real.jpg";
import Img2 from "../../assets/Kids/barce.png";
import Img3 from "../../assets/Kids/arcenal.jpg";
import Img4 from "../../assets/Kids/uni.jpg";
import Img5 from "../../assets/Kids/city.jpg";
import Img6 from "../../assets/Kids/liver.jpg";
import Img7 from "../../assets/Kids/milan.jpg";
import Img8 from "../../assets/Kids/inter.jpg";
import Img9 from "../../assets/Kids/bay.jpg";
import Img10 from "../../assets/Kids/dort.jpg";
import { FaStar } from "react-icons/fa6";



const ProductsData =[
    {
         id:1,
        img:Img1,
        title:"Real Madrid Home",
        rating:5.0,
        color:"white",
        price:"30$",
        aosDelay:"0",

    },
    {
        id:2,
       img:Img2,
       title:"Brcelona Home",
       rating:5.0,
       color:"Red & Blue",
       price:"30$",
       aosDelay:"100",

   },
   {
    id:3,
   img:Img3,
   title:"Arcenal Home",
   rating:5.0,
   color:"Red",
   price:"30$",
   aosDelay:"200",

},
{
    id:4,
   img:Img4,
   title:"Man United Home",
   rating:5.0,
   color:"Red",
   price:"30$",
   aosDelay:"300",

},
    {
        id:5,
       img:Img5,
       title:"Man City Home",
       rating:4.8,
       color:"Blue",
       price:"30$",
       aosDelay:"400",

   },
   {
    id:6,
   img:Img6,
   title:"Liverpool Home",
   rating:4.8,
   color:"Red",
   price:"30$",
   aosDelay:"500",

},
{
    id:7,
   img:Img7,
   title:"Ac Milan Home",
   rating:4.8,
   color:"Red & Black",
   price:"30$",
   aosDelay:"600",

},
   {
    id:8,
   img:Img8,
   title:" Inter Milan Home",
   rating:4.6,
   color:"Blue & Black",
   price:"30$",
   aosDelay:"700",

},
{
    id:9,
   img:Img9,
   title:" Bayern Munich Home",
   rating:4.5,
   color:"Red",
   price:"30$",
   aosDelay:"800",

},
{
    id:10,
   img:Img10,
   title:"Borussia Dortmund ",
   rating:4.5,
   color:"Yellow",
   price:"50$",
   aosDelay:"900",

},]

const Kids = ({ handleAddToBasket}) => {
  return (
    <div className="mt-14 mb-12" >
                <div className="container">
                    <div className="text-center mb-10 max-w-[600px] mx-auto ">
                    
                        <h1 data-aos="fade-up" className="text-3xl font-bold ">Jersey</h1>
                    </div>
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5 
                        place-items-center gap-5 ">
    
                        {
                            ProductsData.map((data) =>(
                                <div data-aos="fade-up"
                                data-aos-delay={data.aosDelay}
    
                                 key={data.id} className="space-y-3">
    
                                <img src={data.img} className="h-[220px] w-[150px] 
                                object-cover rounded-md"/>
                                <div>
                                    <h3 className="font-semibold">{data.title}</h3>
                                    <p className="text-sm text-gray-600">{data.color}</p>
                                    <p className="text-sm text-gray-600">{data.price}</p>
                                    <div className="flex items-center gap-1">
                                        <FaStar className="text-yellow-400" />
                                        <span>{data.rating}</span>
                         
                                    </div>
                                    <div>
                                        <button className="group-hover:text-primary bg-primary hover:scale-105 duration-300 
                            text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white " 
                            onClick={()=> handleAddToBasket(data)}
                            >Order Now</button></div>
                                </div>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>
        
  )
}

export default Kids;