import './App.css';
import Carousel from './components/Carousel';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Information from './components/Information';
import Navbar from './components/Navbar';
import Notice from './components/Notice';
import Statement from './components/Statement';
import Team from './components/Team';

function App() {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <Notice/>
    <Team/>
    <Information/>
    <Statement/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App;
