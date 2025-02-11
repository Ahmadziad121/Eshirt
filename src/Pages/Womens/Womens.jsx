import React from 'react';
import Imgw1 from "../../assets/Women/real.webp";
import Imgw2 from "../../assets/Women/brcelona.webp";
import Imgw3 from "../../assets/Women/city.jpg";
import Imgw4 from "../../assets/Women/united.jpg";
import Imgw5 from "../../assets/Women/arsenal.jpg";
import Imgw6 from "../../assets/Women/bayern.jpg";
import Imgw8 from "../../assets/Women/liverpool.jpg";
import { FaStar } from "react-icons/fa6";
const ProductsData =[
    {
         id:1,
        img:Imgw1,
        title:"Real Madrid Home",
        rating:5.0,
        color:"white",
        price:"50$",
        aosDelay:"0",

    },
    {
        id:2,
       img:Imgw2,
       title:"Barcelona Home",
       rating:5.0,
       color:"Red & Blue",
       price:"50$",
       aosDelay:"100",

   },
   {
    id:3,
   img:Imgw3,
   title:"Man City Home",
   rating:5.0,
   color:"Blue",
   price:"50$",
   aosDelay:"200",

},
{
    id:4,
   img:Imgw4,
   title:"Man United Home",
   rating:5.0,
   color:"red",
   price:"50$",
   aosDelay:"300",

},
    {
        id:5,
       img:Imgw5,
       title:"Arsenal Home",
       rating:4.8,
       color:"Red ",
       price:"50$",
       aosDelay:"400",

   },
   {
    id:6,
   img:Imgw6,
   title:"Bayern München Home",
   rating:4.8,
   color:"Red",
   price:"50$",
   aosDelay:"500",

},

   {
    id:8,
   img:Imgw8,
   title:" Liverpool Home",
   rating:4.6,
   color:"Red",
   price:"50$",
   aosDelay:"700",
}];

const Womens =({ handleAddToBasket}) => {
    const [selectedSize, setSelectedSizes] = React.useState({});
        
          // Handle size change
          const handleSizeChange = (id, size) => {
            setSelectedSizes((prevSizes) => ({
              ...prevSizes,
              [id]: size,
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
    {[ "S", "M", "L", "XL", "2XL"].map((size) => (
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
                    if (selectedSize[data.id]) {
                      handleAddToBasket({ ...data, size: selectedSize[data.id] });
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
export default Womens ;