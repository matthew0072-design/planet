import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import Spinner from '../Spinner/Spinner';

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
  { loading ? ( <Spinner />) : (<Component {...pageProps} />) }
    </>
    
  ) 
}

export default MyApp
