import React from 'react'
import { Vortex } from  'react-loader-spinner';

const Spinner = () => {
  return (
    <div>
         <Vortex
    visible={true}
    height="50"
    width="50"
    ariaLabel="vortex-loading"
    wrapperStyle={{
      display:'flex',
      width: '100vw', 
      height:'100vh', 
      margin:"auto",
      background: 'black',
      }}
    wrapperClass="vortex-wrapper"
    colors={['white', 'white', 'blue', 'yellow', 'white', 'green',]}
  />
    </div>
  )
}

export default Spinner