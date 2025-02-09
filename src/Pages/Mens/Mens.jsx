import React from 'react';
import Img1 from "../../assets/products/realmadrid.jpg";
import Img2 from "../../assets/products/Realaway.jpg";
import Img3 from "../../assets/products/realthird.jpg";
import Img4 from "../../assets/products/realgk.jpg";
import Img5 from "../../assets/products/barcelona.jpg";
import Img6 from "../../assets/products/barcelonaaway.jpg";
import Img7 from "../../assets/products/barcelonathird.jpg";
import Img8 from "../../assets/products/liverpool.jpg";
import Img9 from "../../assets/products/manchesterunited.jpg";
import Img10 from "../../assets/products/unitedaway.jpg";
import Img11 from "../../assets/products/man city.jpg";
import Img12 from "../../assets/products/cityaway.jpg";
import Img13 from "../../assets/products/Arsenal.jpg";
import Img14 from "../../assets/products/arsenalaway.jpg";
import Img15 from "../../assets/products/arsenalthird.jpg";
import Img16 from "../../assets/products/acmilanhome.jpg";
import Img17 from "../../assets/products/acmilanaway.jpg";
import Img18 from "../../assets/products/inter.jpg";
import Img19 from "../../assets/products/bayernhome.jpg";
import Img20 from "../../assets/products/bayernaway.jpg";
import Img21 from "../../assets/products/bayernthird.jpg";
import Img22 from "../../assets/products/atlitihome.jpg";
import Img23 from "../../assets/products/chelsea.jpg";
import Img24 from "../../assets/products/dortmond.jpg";
import Img25 from "../../assets/products/Juventus.jpg";
import Img26 from "../../assets/products/Juventusthird.jpg";
import Img27 from "../../assets/products/paris.jpg";
import Img28 from "../../assets/products/totenham.jpg";
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
       title:"Real Madrid Away",
       rating:5.0,
       color:"Orange",
       price:"50$",
       aosDelay:"100",

   },
   {
    id:3,
   img:Img3,
   title:"Real Madrid Third",
   rating:5.0,
   color:"Gray",
   price:"50$",
   aosDelay:"200",

},
{
    id:4,
   img:Img4,
   title:"Real Madrid GK",
   rating:5.0,
   color:"Blue",
   price:"50$",
   aosDelay:"300",

},
    {
        id:5,
       img:Img5,
       title:"Barcelona Home",
       rating:4.8,
       color:"Red & Blue",
       price:"50$",
       aosDelay:"400",

   },
   {
    id:6,
   img:Img6,
   title:"Barcelona Away",
   rating:4.8,
   color:"Black",
   price:"50$",
   aosDelay:"500",

},
{
    id:7,
   img:Img7,
   title:"Barcelona Third",
   rating:4.8,
   color:"Green",
   price:"50$",
   aosDelay:"600",

},
   {
    id:8,
   img:Img8,
   title:" Liverpool Home",
   rating:4.6,
   color:"Red",
   price:"50$",
   aosDelay:"700",

},
{
    id:9,
   img:Img9,
   title:" Man United Home",
   rating:4.5,
   color:"Red",
   price:"50$",
   aosDelay:"800",

},
{
    id:10,
   img:Img10,
   title:" Man United Away",
   rating:4.5,
   color:"Navy Blue",
   price:"50$",
   aosDelay:"900",

},
{
    id:11,
   img:Img11,
   title:" Man City Home",
   rating:4.4,
   color:"Blue",
   price:"50$",
   aosDelay:"1000",

},
{
    id:12,
   img:Img12,
   title:" Man City Away",
   rating:4.4,
   color:"Navy Blue & Green",
   price:"50$",
   aosDelay:"1100",

},
{
    id:13,
   img:Img13,
   title:" Arsenal Home",
   rating:4.7,
   color:"Red",
   price:"50$",
   aosDelay:"1200",

},
{
    id:14,
   img:Img14,
   title:" Arsenal Away",
   rating:4.7,
   color:"Black",
   price:"50$",
   aosDelay:"1300",

},
{
    id:15,
   img:Img15,
   title:" Arsenal Third",
   rating:4.7,
   color:"Blue",
   price:"50$",
   aosDelay:"1400",

},
{
    id:16,
   img:Img16,
   title:" Ac Milan Home",
   rating:4.7,
   color:"Red & Black",
   price:"50$",
   aosDelay:"1500",

},
{
    id:17,
   img:Img17,
   title:" Ac Milan Away",
   rating:4.7,
   color:"Gray",
   price:"50$",
   aosDelay:"1600",

},
{
    id:18,
   img:Img18,
   title:" Inter Home",
   rating:4.7,
   color:"Blue & Black",
   price:"50$",
   aosDelay:"1700",

},
{
    id:19,
   img:Img19,
   title:" Bayern München Home",
   rating:4.7,
   color:"Red ",
   price:"50$",
   aosDelay:"1800",

},
{
    id:20,
   img:Img20,
   title:" Bayern München Away",
   rating:4.7,
   color:"Black ",
   price:"50$",
   aosDelay:"1900",

},
{
    id:21,
   img:Img21,
   title:" Bayern München Third",
   rating:4.7,
   color:"Red & white ",
   price:"50$",
   aosDelay:"2000",

},
{
    id:22,
   img:Img22,
   title:" Atlético Madrid Home",
   rating:4.0,
   color:"Red & Blue ",
   price:"50$",
   aosDelay:"2100",

},
{
    id:23,
   img:Img23,
   title:" Chelsea Home",
   rating:4.2,
   color:" Blue ",
   price:"50$",
   aosDelay:"2200",

},
{
    id:24,
   img:Img24,
   title:" Borussia Dortmund Home",
   rating:4.0,
   color:"Yellow ",
   price:"50$",
   aosDelay:"2300",

},
{
    id:25,
   img:Img25,
   title:" Juventus Home",
   rating:4.2,
   color:"White & Black ",
   price:"50$",
   aosDelay:"2400",

},
{
    id:26,
   img:Img26,
   title:" Juventus Third",
   rating:4.5,
   color:"Navy Blue",
   price:"50$",
   aosDelay:"2500",

},
{
    id:27,
   img:Img27,
   title:" Paris Home",
   rating:4.2,
   color:"Blue ",
   price:"50$",
   aosDelay:"2600",

},
{
    id:28,
   img:Img28,
   title:" Tottenham Home",
   rating:4.2,
   color:"White ",
   price:"50$",
   aosDelay:"2700",

},




];
const Mens =({ handleAddToBasket}) => {
    return (
        <div className="mt-14 mb-12" >
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
                        onClick={()=> handleAddToBasket()}
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

export default Mens;