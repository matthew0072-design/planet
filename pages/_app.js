import { useRouter } from 'next/router'
import { useState, useEffect, Fragment } from 'react';
import Spinner from '../Spinner/Spinner';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

const router = useRouter();
const [loading, setLoading] = useState(false)

useEffect(() => {


  const handleStart = (url) => {
    url !== router.pathname ?  setLoading(true) : setLoading(false)
  }
  const handleComplete = (url) => setLoading(false);

  router.events.on("routeChangeStart", handleStart);
  router.events.on("routeChangeComplete", handleComplete);
  router.events.on("routeChangeError", handleComplete); 



}, [router])




  return (
    <>
  { loading ? ( <Spinner />) : (
  <Fragment>
    <Component {...pageProps} />
    </Fragment>) }

    
    </>
    
  ) 
}

export default MyApp
