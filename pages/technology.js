import Header from '../pages/header'
import Image from 'next/image'
import {useReducer} from 'react'
import LAUNCH from '../public/image-launch-vehicle-landscape.jpg'
import SPACE from '../public/image-space-capsule-landscape.jpg'
import SPACEPORT from '../public/image-spaceport-landscape.jpg'

import LAUNCH_PORTRAIT from '../public/image-launch-vehicle-portrait.jpg'
import SPACE_PORTRAIT from '../public/image-space-capsule-portrait.jpg'
import SPACEPORT_PORTRAIT from '../public/image-spaceport-portrait.jpg'

export default function Technology () {


    function technologyHandler(state, action) {
        if(action.type === 'vehicleSpace') {
            return {
                ...state,
                vehicleSpace: true,
                portSpace:false,
                capsuleSpace:false,
                
            }
        }

        else if(action.type === 'portSpace') {
            return {
                ...state,
                vehicleSpace: false,
                portSpace:true,
                capsuleSpace:false,
                
            }
        }
        else {
            return {
                ...state,
                vehicleSpace: false,
                portSpace:false,
                capsuleSpace:true,
                
            }
        }

        }



    const initialState = {
        vehicleSpace: true,
        portSpace: false,
        capsuleSpace: false,
        
    }


const [state, dispatch] = useReducer(technologyHandler, initialState)

        





    return (
            <div className="bg-[url('/background-technology-mobile.jpg')] bg-cover min-h-screen w-full relative box-border text-[#FFFFFF]
            md:bg-[url('/background-technology-tablet.jpg')] md:h-full
            lg:bg-[url('/background-technology-desktop.jpg')]
            ">
                <Header />
            <section className="w-[11rem] h-5 mx-auto md:mx-0  text-[#FFFFFF]
            lg:w-[25rem]  lg:ml-[10.40625rem]
            ">
                <p className=" font-[BarlowCondensed] text-base leading-5 tracking-[2.7px]  w-auto
                md:ml-9 md:h-6 md:w-[13.5625rem] md:text-xl md:leading-7 md:tracking-[3.375px] 
                lg:text-3xl lg:leading-9 lg:tracking-[4.725px] lg:w-auto 
                "><span className=" font-bold opacity-25  
                   ">03</span> SPACE LAUNCH 101  </p>
            </section>
            <main className="lg:flex lg:items-center lg:h-screen lg:ml-[10.40625rem]">
            <figure className='mt-8 h-[10.625rem] w-screen   box-border aspect-video
            md:w-[48rem] md:h-[19.375rem] 
            lg:hidden
            '>
                    {
                        (() => {
                            if(state.vehicleSpace){
                                return (<Image src={LAUNCH} objectFit="contain" height={300}  layout="responsive" alt="planet"/>)
                            }
                            else if (state.portSpace) {
                               return  <Image src={SPACE}  height={300}  objectFit="contain" layout='responsive'  alt="planet"/>
                            }
                            else {
                               return  <Image src={SPACEPORT}  height={300}  objectFit="contain" layout='responsive' alt="planet"/>
                            }
                               

                        })()
                    }
                </figure>

                <figure className='hidden md:hidden
             
            lg:order-last lg:aspect-square lg:h-[32.9375rem]  lg:self-end  lg:block   
            '>
                    {
                        (() => {
                            if(state.vehicleSpace){
                                return (<Image src={LAUNCH_PORTRAIT} objectFit="contain" height={300}  layout="responsive" alt="planet" priority/>)
                            }
                            else if (state.portSpace) {
                               return  <Image src={SPACE_PORTRAIT}  height={300}  objectFit="contain" layout='responsive'  alt="planet" priority/>
                            }
                            else {
                               return  <Image src={SPACEPORT_PORTRAIT}  height={300}  objectFit="contain" layout='responsive' alt="planet" priority/>
                            }
                               

                        })()
                    }
                </figure>
                <section className="w-[9.5rem] h-[2.5rem] flex  justify-between items-center mx-auto mt-4 box-border relative
                md:w-[13.125rem] md:h-[3.75rem] 
                lg:order-first lg:flex-col lg:h-[18.9375rem] lg:justify-around
                ">
                <div className={`${state.vehicleSpace ? "bg-white text-black" :""} rounded-full w-10 h-10 border box-border font-[Bellefair]  pt-[0.5rem]  text-base leading-5 text-center  tracking-[1px] text-[#FFFFFF] lg:h-[5rem] lg:w-[5rem] lg:text-[2rem] lg:leading-9 lg:tracking-[2px] hover:cursor-pointer lg:pt-[1.5rem]`} onClick={() => dispatch({type:'vehicleSpace'})}>1</div>
                <div className={`${state.portSpace ? "bg-white text-black" :""} rounded-full w-10 h-10 border box-border font-[Bellefair] text-base leading-5 pt-[0.5rem] text-center  tracking-[1px] text-[#FFFFFF] lg:h-[5rem] lg:w-[5rem] lg:text-[2rem] lg:leading-9 lg:tracking-[2px] hover:cursor-pointer lg:pt-[1.5rem]`} onClick={() => dispatch({type:'portSpace'})}>2</div>
                <div className={`${state.capsuleSpace ? "bg-white text-black" :""} rounded-full w-10 h-10 border box-border font-[Bellefair] text-base leading-5 text-center pt-[0.5rem] tracking-[1px] text-[#FFFFFF] lg:h-[5rem] lg:w-[5rem] lg:text-[2rem] lg:leading-9 lg:tracking-[2px] hover:cursor-pointer lg:pt-[1.5rem]`} onClick={() => dispatch({type:'capsuleSpace'})}>3</div>
                </section>
                <section className=''>
               {state.vehicleSpace && <section className="w-[20.375rem] h-[13.75rem] text-[#FFFFFF]  mx-auto  md:w-[28.625rem] md:h-[14.8125rem] lg:h-[18.9375rem] lg:w-[29.375rem]  ">
                    <p className="font-[BarlowCondensed] text-sm leading-4 text-center tracking-[2.3625px] text-[#D0D6F9]  mt-4 md:text-base md:leading-5 md:tracking-[2.7px] lg:text-start">THE TERMINOLOGY...</p>
                    <p className="font-[Bellefair] text-2xl leading-7 text-center text-[#FFFFFF] mt-4 md:text-[2.5rem] md:leading-[2.875rem] lg:text-start lg:text-[3.5rem] lg:leading-[4rem]"> LAUNCH VEHICLE </p>
                    <p className="font-[Barlow] leading-6 text-base text-center text-[#D0D6F9] w-[20.4375rem] h-[10.9375rem] mt-4 px-4 md:text-base md:leading-7 md:w-[28.625rem] md:mx-auto md:h-[8.75rem] lg:text-xl lg:leading-8 lg:text-start lg:p-0">A launch vehicle or carrier rocket-propelled vehicle used to carry
                        a payload from Earth's surface to space, usually to Earth orbit or beyond.
                        Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres
                        tall,it's quite an awe-inspiring sight on the launch pad!
                    </p>
                </section>}


               {state.portSpace && <section className="w-[20.375rem] h-[13.75rem] text-[#FFFFFF]  mx-auto md:w-[28.625rem] md:h-[14.8125rem] lg:h-[18.9375rem] lg:w-[29.375rem]  ">
                    <p className="font-[BarlowCondensed] text-sm leading-4 text-center tracking-[2.3625px] text-[#D0D6F9] mt-4 md:text-base md:leading-5 md:tracking-[2.7px] lg:text-start">THE TERMINOLOGY...</p>
                    <p className=" font-[Bellefair] text-2xl leading-7 text-center text-[#FFFFFF] mt-4 md:text-[2.5rem] md:leading-[2.875rem] lg:text-start lg:text-[3.5rem] lg:leading-[4rem]   "> SPACEPORT </p>
                    <p className="font-[Barlow] leading-6 text-base text-center text-[#D0D6F9] w-[20.4375rem] h-[10.9375rem] mt-4  px-4 md:text-base md:leading-7  md:w-[28.625rem] md:mx-auto md:h-[8.75rem] lg:text-xl lg:leading-8 lg:text-start lg:p-0"> A spaceport or cosmodrome is a site for launching [or receiving]
                        spacecraft, by analogy to the seaport for ships or airport for aircraft.
                        Based in the famous cape Canaveral, our spaceport is ideally situated to
                        take advantage of the Earth's rotation for launch 

                    </p>
                </section>}

                { state.capsuleSpace && <section className="w-[20.375rem] h-[13.75rem] text-[#FFFFFF]  mx-auto   md:w-[28.625rem] md:h-[14.8125rem] lg:h-[18.9375rem] lg:w-[29.375rem]  ">
                    <p className=" font-[BarlowCondensed] text-sm leading-4 text-center tracking-[2.3625px] text-[#D0D6F9] mt-4 md:text-base md:leading-5 md:tracking-[2.7px]  lg:text-start">THE TERMINOLOGY...</p>
                    <p className=" font-[Bellefair] text-2xl leading-7 text-center text-[#FFFFFF] mt-4  md:text-[2.5rem] md:leading-[2.875rem] lg:text-start lg:text-[3.5rem] lg:leading-[4rem] "> SPACE CAPSULE </p>
                    <p className=" font-[Barlow] leading-6 text-base text-center text-[#D0D6F9] w-[20.4375rem] h-[10.9375rem] mt-4 px-4 md:text-base md:leading-7 md:mx-auto md:w-[28.625rem]  md:h-[8.75rem] lg:text-xl lg:leading-8 lg:text-start lg:p-0"> A space capsule is an often-crewed spacecraft that uses a blunt-body
                        reentry capsule to reenter the Earth's atmosphere without wings. Our 
                        capsule is where you'll spend your time during the flight. It includes
                        a space gym, cinema, and plenty of other activities to keep entertained 

                    </p>
                </section>}

                </section>
                
            </main>
                
                </div>

    )
}