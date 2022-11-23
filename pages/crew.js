import Header from '../pages/header'
import Image from 'next/image'
import {useReducer} from 'react'
import ANOUSHEH from '../public/assets/crew/image-anousheh-ansari.png'
import DOUGLAS from '../public/assets/crew/image-douglas-hurley.png'
import MARK from '../public/assets/crew/image-mark-Shuttleworth.png'
import VICTOR from '../public/assets/crew/image-victor-glover.png'


export default function Crew () {
    

    function crewHandler(state, action) {
        if(action.type === 'commander') {
            return {
                ...state,
                commander: true,
                mission:false,
                pilot:false,
                flight:false
            }
        }

        else if(action.type === 'mission') {
            return {
                ...state,
                commander: false,
                mission:true,
                pilot:false,
                flight:false
            }
        }
        else if(action.type === 'pilot') {
            return {
                ...state,
                commander: false,
                mission:false,
                pilot:true,
                flight:false
            }
        }

        else {
            return {
                ...state,
                commander: false,
                mission:false,
                pilot:false,
                flight:true
            }
        }

    }

    const initialState = {
        commander: true,
        mission: false,
        pilot: false,
        flight: false
    }


const [state, dispatch] = useReducer(crewHandler, initialState)






    return (
        <div className="bg-[url('/assets/crew/background-crew-mobile.jpg')] bg-cover w-full min-h-[60rem]  relative box-border text-[#FFFFFF]
        md:bg-[url('/assets/crew/background-crew-tablet.jpg')]
        lg:bg-[url('/assets/crew/background-crew-desktop.jpg')]
        ">
            <Header />
            <div className='mt-10 w-[10.375rem] h-[1.1875rem] mx-auto
            md:w-[12.75rem] md:h-6 md:mx-0 
            lg:w-[17.875rem] lg:h-[2.125rem] lg:ml-[10.40625rem]
            '>
                <h3 className="text-base leading-5 tracking-[2.7px] font-[Barlow-Condensed] text-[#FFFFFF] 
                md:ml-9 md:h-6 md:w-[17rem] md:mx-0  md:text-xl md:leading-7 md:tracking-[3.375px] lg:text-3xl lg:leading-9 lg:tracking-[4.725px]
                "><span className="font-bold opacity-25 mix-blend-normal ">02</span> MEET THE CREW</h3>
            </div>
            <main className=" md:flex md:flex-col 
            lg:grid lg:grid-cols-2 lg:grid-rows-2  lg:h-[44.5rem] lg:justify-items-start lg:ml-[10.40625rem]
            lg:gap-16 lg:items-center 

            ">
            <figure className='mt-4  w-full mx-auto box-border aspect-square
            md:order-last md:w-[28.523125rem]  md:box-border 
            lg:row-span-2  '>
                    {
                        (() => {
                            if(state.commander){
                                return (<Image src={DOUGLAS} height={600} objectFit="contain" layout='responsive'  alt="planet"/>)
                            }
                            else if (state.mission) {
                               return  (<Image src={MARK}  height={600} objectFit="contain" layout='responsive'  alt="planet"/>)
                            }
                            else if (state.pilot){
                               return  (<Image src={VICTOR}  height={700} objectFit="contain" layout='responsive' alt="planet"/>)
                            }else {
                               return (<Image src={ANOUSHEH} height={700}  objectFit="contain" layout='responsive'  alt="planet"/>)
                            }

                        })()
                    }
                </figure>

            <section className=" mt-5 mx-auto w-[5.5rem] h-[0.625rem]  flex justify-between
               md:mt-12 
               lg:row-start-2 lg:row-end-3 lg:self-start lg:justify-self-start lg:mx-0  ">
                    <div className={`${state.commander ? "opacity-100" :""} hover:cursor-pointer  h-[0.625rem] w-[0.625rem]  rounded-full bg-[#FFFFFF]  opacity-25 mix-blend-normal`} onClick={() => dispatch({type:'commander'})}></div>
                    <div className={`${state.mission ? "opacity-100" :""} hover:cursor-pointer  h-[0.625rem] w-[0.625rem] rounded-full bg-[#FFFFFF] opacity-25 mix-blend-normal`} onClick={() => dispatch({type:'mission'})}></div>
                    <div className={`${state.pilot ? "opacity-100" :""} hover:cursor-pointer h-[0.625rem] w-[0.625rem] rounded-full bg-[#FFFFFF] opacity-25 mix-blend-normal`} onClick={() => dispatch({type:'pilot'})}></div>
                    <div className={`${state.flight ? "opacity-100" :""} hover:cursor-pointer h-[0.625rem] w-[0.625rem] rounded-full bg-[#FFFFFF] opacity-25 mix-blend-normal`} onClick={() => dispatch({type:'flight'})}></div>
                </section>
                <section className="md:order-first ">
                    {state.commander && <section className="w-[20.4375rem] h-[10.625rem]  relative md:w-[28.625rem] md:h-[11.375rem] mx-auto lg:w-auto mt-4 text-[#FFFFFF] ">
                    
                    <h3 className=" font-[Bellefair] text-base leading-5 text-center opacity-50 mix-blend-normal 
                    md:text-2xl md:leading-7lg:text-[2rem] lg:leading-9 lg:text-start "> COMMANDER</h3>
                    <p className=" font-[Bellefair] text-2xl leading-7 text-center mt-4
                    md:text-[2.5rem] md:leading-[2.875rem] lg:text-[3.5rem] lg:leading-[4rem] lg:text-start ">DOUGLAS HURLEY</p>
                    <p className="font-[Barlow] text-base leading-7 text-center text-[#D0D6F9] mt-4  
                    md:text-base md:leading-7 lg:text-xl lg:leading-8 lg:text-start lg:w-[27.75rem]"> Douglas Gerald Hurley is an American engineer,former
                        former Marine Corps pilot and former NASA astronauts.
                        He launched into space for the third time as commander of 
                        Crew Dragon Demo-2
                    </p>
                
                    </section>}

                    {state.mission && <section className="relative w-[20.4375rem] h-[10.625rem] md:w-[28.625rem] md:h-[11.375rem] mx-auto lg:w-auto mt-4 text-[#FFFFFF]">  
                    <p className="font-[Bellefair] text-base leading-5 text-center opacity-50 mix-blend-normal
                    
                    md:text-2xl md:leading-7 lg:text-[2rem] lg:leading-9 lg:text-start">MISSION SPECIALIST</p>
                    <p className="font-[Bellefair] text-2xl leading-7 text-center mt-4
                    md:text-[2.5rem] md:leading-[2.875rem] lg:text-[3.5rem] lg:leading-[4rem] lg:text-start "> MARK SHUTTLEWORTH</p>
                    <p className="font-[Barlow] text-base leading-7 text-center text-[#D0D6F9] mt-4
                    md:text-base md:leading-7 lg:text-xl lg:leading-8 lg:text-start lg:w-[27.75rem]" > Mark Richard Shuttleworth is the founder and CEO of canonical,
                        the company behind the Linux-based Ubuntu operating system.
                        Shuttleworth became the first South Africa to travel to space 
                        as a space tourist
                    </p>
                    </section>}

                    {state.pilot && <section className="relative w-[20.4375rem] h-[10.625rem] md:w-[28.625rem] md:h-[11.375rem] lg:w-auto mx-auto mt-4 text-[#FFFFFF]">  
                        <p className="font-[Bellefair] text-base leading-5 text-center opacity-50 mix-blend-normal
                        md:text-2xl md:leading-7 lg:text-[2rem] lg:leading-9 lg:text-start">PILOT</p>
                        <p className="font-[Bellefair] text-2xl leading-7 text-center mt-4
                        md:text-[2.5rem] md:leading-[2.875rem]  lg:text-[3.5rem] lg:leading-[4rem] lg:text-start">VICTOR GLOVER</p>
                        <p className=" font-[Barlow] text-base leading-7 text-center text-[#D0D6F9]   mt-4  md:text-base md:leading-7 lg:text-xl lg:leading-8 lg:text-start lg:w-[27.75rem]       "> Pilot on the first operational flight of the SpaceX Crew
                            Dragon to the international Space Station. Glover is a commander
                            in the U.S. Navy where he pilots an F/A-18. He was a crew member of 
                            Expedition 64, and served as a station systems flight engineer.
                        </p>
                    </section>}
                
                    {state.flight &&<section className="w-[20.4375rem] h-[10.625rem] md:w-[28.625rem] md:h-[11.375rem] mx-auto mt-4 lg:w-auto text-[#FFFFFF]  lg:mx-0 ">
                        <p className="font-[Bellefair] text-base leading-5 text-center opacity-50 mix-blend-normal
                        md:text-2xl md:leading-7 lg:text-[2rem] lg:leading-9 lg:text-start">FLIGHT ENGINEER</p>
                        <p className="font-[Bellefair] text-2xl leading-7 text-center mt-4
                        
                        md:text-[2.5rem] md:leading-[2.875rem]  lg:text-[3.5rem] lg:leading-[4rem] lg:text-start "> ANOUSHEH ANSARI</p>
                        <p className="font-[    Barlow] text-base leading-7 text-center text-[#D0D6F9] mt-4
                        md:text-base md:leading-7 lg:text-xl lg:leading-8 lg:text-start lg:w-[27.75rem]"> Anousheh Ansari is an Iranian American engineer and co-founder
                            of Prodea Systems. Ansari was the fourth self-funded woman to 
                            fly to the ISS and the first Iranian in space 
                        </p>
                    </section>}

                </section>

              
                </main>
                
        </div>
    )
}