import React from "react";
import Img1 from "../../assets/products/realmadrid.jpg";
import Img2 from "../../assets/products/barcelona.jpg";
import Img3 from "../../assets/products/liverpool.jpg";
import Img4 from "../../assets/products/manchesterunited.jpg";
import Img5 from "../../assets/products/man city.jpg";
import Img6 from "../../assets/products/Arsenal.jpg";
import { FaStar } from "react-icons/fa6";


const ProductsData =[
    {
         id:1,
        img:Img1,
        title:"Real Madrid Home",
        rating:5.0,
        color:"white",
        price:"50$",
        aosDelay:"0",

    },
    {
        id:2,
       img:Img2,
       title:"Barcelona Home",
       rating:4.8,
       color:"Red & Blue",
       price:"50$",
       aosDelay:"200",

   },
   {
    id:3,
   img:Img3,
   title:" Liverpool Home",
   rating:4.6,
   color:"Red",
   price:"50$",
   aosDelay:"400",

},
{
    id:4,
   img:Img4,
   title:" Man United Home",
   rating:4.5,
   color:"Red",
   price:"50$",
   aosDelay:"600",

},
{
    id:5,
   img:Img5,
   title:" Man City Home",
   rating:4.4,
   color:"Blue",
   price:"50$",
   aosDelay:"800",

},
{
    id:6,
   img:Img6,
   title:" Arsenal Home",
   rating:4.7,
   color:"Red",
   price:"50$",
   aosDelay:"1000",

},


];
const Products =({ handleAddToBasket}) => {
    return (
        <div className="mt-14 mb-12" id="products" >
            <div className="container">
                <div className="text-center mb-10 max-w-[600px] mx-auto ">
                    <p data-aos="fade-up" className="text-sm text-primary  ">Top Selling Kit for you </p>
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
                            <div className="" >
                                <h3 className="font-semibold">{data.title}</h3>
                                <p className="text-sm text-gray-600 ">{data.color}</p>
                                <p className="text-sm text-gray-600 ">{data.price}</p>
                                <div className="flex items-center  gap-1">
                                    <FaStar className="text-yellow-400 " />
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
};
export default Products