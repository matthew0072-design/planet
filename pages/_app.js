import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import { Vortex } from  'react-loader-spinner';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

const router = useRouter();
const [loading, setLoading] = useState(false)

useEffect(() => {


  const handleStart = () => {setLoading(true)}
  const handleComplete = () => setLoading(false);

  router.events.on("routeChangeStart", handleStart);
  router.events.on("routeChangeComplete", handleComplete);
  router.events.on("routeChangeError", handleComplete); 



}, [router])




  return (
    <>
  { !loading ? (<Component {...pageProps} />) : 
   ( <Vortex
    visible={true}
    height="50"
    width="50"
    ariaLabel="vortex-loading"
    wrapperStyle={{display:'flex',
      width: '100vw', 
      height:'100vh', 
      margin:"auto",
      background: 'black',
      
      border:'2px solid red'}}
    wrapperClass="vortex-wrapper"
    colors={['white', 'white', 'blue', 'yellow', 'white', 'white']}
  />      
     )
    
}
    </>
    
  ) 
}

export default MyApp
