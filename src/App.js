import './App.css';
import Nav from'./components/nav/nav';
import Hero from './components/hero/hero';
import Sponsor from './components/sponsor/sponsor';
import About from './components/aboutus/about'
import WhyUs from './components/whyus/whyus';
import Products from './components/products/products';
import Clients from './components/testimonials/clients';
import Join from './components/join/join';
import Footer from './components/footer/footer';

function App() {
  return (
    <div >
      <Nav />
      <Hero/>
      <Sponsor/>
      <About/>
      <WhyUs/>
      <Products/>
      <Clients/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
