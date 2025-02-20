import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import Classic from './components/Classic/Classic';
import Banner from './components/Banner/Banner';
import Sub from './components/Sub/Sub';
import Feed from './components/Feed/Feed';
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/Popup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Mens from './Pages/Mens/Mens';
import Womens from './Pages/Womens/Womens';
import Kids from './Pages/Kids/Kids';
import Classics from './Pages/Classics/Classics';
import Sign from './Pages/loginsign/sign';
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  // Load the basket from localStorage on initial load
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
    <Router>
      <div>
        <Navbar 
          handleOrderPopup={handleOrderPopup} 
          basketItems={basketItems} 
          handleRemoveFromBasket={handleRemoveFromBasket} 
          handleContactMessage={handleContactMessage}
          
        />
        <Routes>
          <Route 
            path='/' 
            element={
              <>
                <Hero handleOrderPopup={handleOrderPopup} handleContactMessage={handleContactMessage} />
                <Products handleAddToBasket={handleAddToBasket} />
                <Classic handleAddToBasket={handleAddToBasket} />
                <Banner />
                <Sub />
                <Feed />
              </>
            }
          />
          <Route path='/Mens' element={<Mens handleAddToBasket={handleAddToBasket} />} />
          <Route path='/Womens' element={<Womens handleAddToBasket={handleAddToBasket} />} />
          <Route path='/Kids' element={<Kids handleAddToBasket={handleAddToBasket} />} />
          <Route path='/Classics' element={<Classics handleAddToBasket={handleAddToBasket}  />} />
          <Route path='/Login' element={<Sign/>}/>
          <Route path='/Sign' element={<Sign/>}/>
        </Routes>

        <Footer />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} handleContactMessage={handleContactMessage} />
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
