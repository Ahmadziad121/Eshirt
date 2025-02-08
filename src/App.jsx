import react from 'react';

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

import AOS from "aos";
import "aos/dist/aos.css"
import { ImOpt } from 'react-icons/im';

const App = () =>{
  
  const handleAddToBasket = () => {
    
    toast.success("Product added to basket successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }; 
  const [ orderPopup , setOrderPopup]=react.useState(false);
  const handleOrderPopup =()=>{
    setOrderPopup(!orderPopup);
  };
  react.useEffect(() =>{
    AOS.init({
      offset:100,
      duration:1000,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  },[]);

  return(
    <div >
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero  handleOrderPopup={handleOrderPopup}/>
      <Products  handleOrderPopup={handleOrderPopup} handleAddToBasket={handleAddToBasket}/>
      <Classic   handleAddToBasket={handleAddToBasket}/>
      <Banner/>
      <Sub />
      <Feed />
      <Footer/>
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
      <ToastContainer />


    </div>
  )}

export default App;
