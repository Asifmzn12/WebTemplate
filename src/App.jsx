import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Nav';
// import Heroswiper from './Components/Heroswiper';
// import Content from './Components/Content';
import Footer from './Components/Footer';
import Webtheme from './Components/Webtheme';

import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init();

function App() {


  return (
    <>

      <div className=''>
        <Header />
        <Webtheme />
      


      </div>


    </>
  )
}

export default App
