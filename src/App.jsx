import react from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import Classic from './components/Classic/Classic';
import Banner from './components/Banner/Banner';
import Sub from './components/Sub/Sub';
import Feed from './components/Feed/Feed';
import AOS from "aos";
import "aos/dist/aos.css"

const App = () =>{
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
    <div>
      <Navbar/>
      <Hero/>
      <Products/>
      <Classic/>
      <Banner/>
      <Sub />
      <Feed />


    </div>
  )}

export default App
