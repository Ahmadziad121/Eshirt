import React from 'react';
import Imgk1 from "../../assets/Kids/real.jpg";
import Imgk2 from "../../assets/Kids/barce.png";
import Imgk3 from "../../assets/Kids/arcenal.jpg";
import Imgk4 from "../../assets/Kids/uni.jpg";
import Imgk5 from "../../assets/Kids/city.jpg";
import Imgk6 from "../../assets/Kids/liver.jpg";
import Imgk7 from "../../assets/Kids/milan.jpg";
import Imgk8 from "../../assets/Kids/inter.jpg";
import Imgk9 from "../../assets/Kids/bay.jpg";
import Imgk10 from "../../assets/Kids/dort.jpg";
import { FaStar } from "react-icons/fa6";



const ProductsData =[
    {
         id:1,
        img:Imgk1,
        title:"Real Madrid Home",
        rating:5.0,
        color:"white",
        price:"30$",
        aosDelay:"0",

    },
    {
        id:2,
       img:Imgk2,
       title:"Brcelona Home",
       rating:5.0,
       color:"Red & Blue",
       price:"30$",
       aosDelay:"100",

   },
   {
    id:3,
   img:Imgk3,
   title:"Arcenal Home",
   rating:5.0,
   color:"Red",
   price:"30$",
   aosDelay:"200",

},
{
    id:4,
   img:Imgk4,
   title:"Man United Home",
   rating:5.0,
   color:"Red",
   price:"30$",
   aosDelay:"300",

},
    {
        id:5,
       img:Imgk5,
       title:"Man City Home",
       rating:4.8,
       color:"Blue",
       price:"30$",
       aosDelay:"400",

   },
   {
    id:6,
   img:Imgk6,
   title:"Liverpool Home",
   rating:4.8,
   color:"Red",
   price:"30$",
   aosDelay:"500",

},
{
    id:7,
   img:Imgk7,
   title:"Ac Milan Home",
   rating:4.8,
   color:"Red & Black",
   price:"30$",
   aosDelay:"600",

},
   {
    id:8,
   img:Imgk8,
   title:" Inter Milan Home",
   rating:4.6,
   color:"Blue & Black",
   price:"30$",
   aosDelay:"700",

},
{
    id:9,
   img:Imgk9,
   title:" Bayern Munich Home",
   rating:4.5,
   color:"Red",
   price:"30$",
   aosDelay:"800",

},
{
    id:10,
   img:Imgk10,
   title:"Borussia Dortmund ",
   rating:4.5,
   color:"Yellow",
   price:"50$",
   aosDelay:"900",

},]

const Kids = ({ handleAddToBasket}) => {
     const [selectedSize, setSelectedSizes] = React.useState("");
            
              // Handle size change
              const handleSizeChange = (productId, size) => {
                setSelectedSizes((prevSizes) => ({
                  ...prevSizes,
                  [productId]: size,
              }));}
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
                                       {/* Size Selection */}
                <div className="mt-4">
  <label className="block text-ms font-medium">Choose Size:</label>
  <div className="flex space-x-1 mt-2">
    {[ "8", "10", "12", "14", "16"].map((size) => (
      <button
        key={size}
        onClick={() => handleSizeChange(data.id ,size)}
        className={`px-2 py-0 border rounded-full ${
          selectedSize[data.id] === size
            ? "bg-primary text-white"
            : "bg-gray-100 text-gray-700"
        } hover:bg-primary hover:text-white`}
      >
        {size}
      </button>
    ))}</div>
</div>

                {/* Order Button */}
                <button
                  className="group-hover:text-primary bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white"
                  onClick={() => {
                    if (selectedSize) {
                      handleAddToBasket({ ...data, size: selectedSize });
                    } else {
                      alert("Please select a size.");
                    }
                  }}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
                            </div>
                            </div>
                    
                    </div>
                </div>

    )
};

export default Kids;