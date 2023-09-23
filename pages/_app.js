import '@/styles/globals.css'
import Footer from './Components/Footer/Footer'
import NewNavBar from './Components/Navbar/NewNavBar'
import { useState } from 'react';
export default function App({ Component, pageProps }) {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps}/>)
  }
  return (
    <>
      
      <NewNavBar click={handleNav} nav={nav}/>
      <Component {...pageProps} />
      <Footer/>
    </>)
    




   
  
  
}
