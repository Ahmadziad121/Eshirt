import react from 'react';
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';
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
     <Router>
     <div >
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Routes>
      <Route  path='/' element={<>
        <Hero  handleOrderPopup={handleOrderPopup}/>
      <Products   handleAddToBasket={handleAddToBasket}/>
      <Classic   handleAddToBasket={handleAddToBasket}/>
      <Banner/>
      <Sub />
      <Feed />
      </>}/>
      
        <Route path='/Mens' element={<Mens  handleAddToBasket={handleAddToBasket}/>}/>
        <Route path='/Womens' element={<Womens  handleAddToBasket={handleAddToBasket}/>}/>
        <Route path='/Kids' element={<Kids  handleAddToBasket={handleAddToBasket}/>}/>

      </Routes>

      <Footer/>
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
      <ToastContainer />
    </div>
    </Router>
  )}

export default App;
