import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Admin from './Pages/Admin/Admin';
import Add from './Components/Add/Add';
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const [basketItems, setBasketItems] = React.useState(() => {
      const savedBasket = localStorage.getItem('basket');
      return savedBasket ? JSON.parse(savedBasket) : []; // If no basket in localStorage, return an empty array
    });
    const handleContactMessage = () => {
      toast.info("We will contact with you soon!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    };
    // Function to add item to the basket
    const handleAddToBasket = (product) => {
      const updatedBasket = [...basketItems, product];
      setBasketItems(updatedBasket);
  
      // Save the updated basket to localStorage
      localStorage.setItem('basket', JSON.stringify(updatedBasket));
  
      toast.success(`${product.title} added to basket!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    };
  
    // Function to remove item from the basket
    const handleRemoveFromBasket = (index) => {
      const updatedBasket = basketItems.filter((_, i) => i !== index);
      setBasketItems(updatedBasket);
  
      // Save the updated basket to localStorage
      localStorage.setItem('basket', JSON.stringify(updatedBasket));
  
      toast.info("Item removed from basket", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    };
  
    // Order popup state
    const [orderPopup, setOrderPopup] = React.useState(false);
    const handleOrderPopup = () => {
      setOrderPopup(!orderPopup);
    };
  
    // Initialize AOS (animation library)
    React.useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 1000,
        easing: "ease-in-sine",
        delay: 100,
      });
      AOS.refresh();
    }, []);
  return (
    <div>
      <Navbar handleOrderPopup={handleOrderPopup} 
          basketItems={basketItems} 
          handleRemoveFromBasket={handleRemoveFromBasket} 
          handleContactMessage={handleContactMessage}  />
          <Admin/>
    </div>
  )
}

export default App