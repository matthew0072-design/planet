import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import { Vortex } from  'react-loader-spinner';

import '../styles/globals.css'
// import Spinner from '../Spinner/Spinner'
function MyApp({ Component, pageProps }) {

const router = useRouter();
const [loading, setLoading] = useState(false)

useEffect(() => {
  // const handleStart = (url) => {
  //   url !== router.pathname ? setLoading(true) : setLoading(false)
  // }

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
    height="80"
    width="100"
    ariaLabel="vortex-loading"
    wrapperStyle={{}}
    wrapperClass="vortex-wrapper"
    colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
  />      
     )
    
}
    </>
    
  ) 
}

export default MyApp
