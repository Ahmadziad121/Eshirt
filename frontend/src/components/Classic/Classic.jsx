import React, { useState } from "react";
import Img1 from "../../assets/classic/real.jpg";
import Img2 from "../../assets/classic/barcelona.jpg";
import Img3 from "../../assets/classic/man.jpg";
import Img4 from "../../assets/classic/acmilan.jpg";
import Img5 from "../../assets/classic/bay.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Real Madrid Classic",
    description: "Real Madrid 2006-07 Home Sponsor by Siemens Adidas Brand",
  },
  {
    id: 2,
    img: Img2,
    title: "Barcelona Classic",
    description: "FC Barcelona 1995-96 Away Kappa Brand",
  },
  {
    id: 3,
    img: Img3,
    title: "Man United Classic",
    description: "Manchester United 1992-93 Home Sponsor by Sharp Umbro Brand",
  },
  {
    id: 4,
    img: Img4,
    title: "Ac Milan Classic",
    description: "AC Milan 1996-97 Home Sponsor by Opel Lotto Brand",
  },
  {
    id: 5,
    img: Img5,
    title: "Bayern Munich Classic",
    description: "Bayern München 1997-98 Home Sponsor by Opel Adidas Brand",
  },
];

const Classic = ({ handleAddToBasket }) => {
  const [selectedSize, setSelectedSizes] = useState("");

  // Handle size change
  const handleSizeChange = (productId, size) => {
    setSelectedSizes((prevSizes) => ({
      ...prevSizes,
      [productId]: size,
  }));}

  return (
    <div id="Top">
      <div className="container">
        <div className="text-center mb-24 max-w-[600px] mx-auto ">
          <p data-aos="fade-up" className="text-sm text-primary">
            Classic Kit for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Classic Jersey
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              key={data.id}
              className="rounded-2xl bg-white dark:bg-gray-100 dark:hover:bg-primary hover:text-white relative hover:bg-black/80 shadow-xl duration-300 group max-w-[300px]"
            >
              <div className="h-[100px]">
                <img
                  src={data.img}
                  className="max-w-[150px] block mx-auto transform -translate-y-9 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              <div className="p-4 text-center">
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>

                {/* Size Selection */}
                <div className="mt-4">
  <label className="block text-ms font-medium">Choose Size:</label>
  <div className="flex space-x-1 mt-2">
    {["XS", "S", "M", "L", "XL", "2XL", "3XL"].map((size) => (
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
    ))}
  </div>
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
  );
};

export default Classic;
