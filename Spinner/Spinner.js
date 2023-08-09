import React from 'react'
import { Vortex } from  'react-loader-spinner';

const Spinner = (props) => {
  return (
    <div >
         <Vortex
    visible={true}
    height="30"
    width="30"
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