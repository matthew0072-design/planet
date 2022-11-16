import Link from 'next/link'
import Header from '../pages/header'
import Image from 'next/image'
import {useState} from 'react'
import MOON from '../public/assets/destination/image-moon.png'
import EUROPA from '../public/assets/destination/image-europa.png'
import MARS from '../public/assets/destination/image-mars.png'
import TITAN from '../public/assets/destination/image-titan.png'

export default function Destination () {

    

    const [moon, setMoon] = useState('moon')
    const [mars, setMars] = useState(false)
    const [europa, setEuropa] = useState(false)
    const [titan, setTitan] = useState(false)

   

    const onPlanetHandler = () => {
        setMoon(true)
        setMars(false)
        setEuropa(false)
        setTitan(false)
    }

    const onMarsHandler =() => {
        setMars(true)
        setMoon(false)
        setEuropa(false)
        setTitan(false)
    }

    const onEuropaHandler = () => {
        setEuropa(true)
        setMoon(false)
        setMars(false)
        setTitan(false)
    }

    const onTitanHandler = () => {
        setTitan(true)
        setEuropa(false)
        setMoon(false)
        setMars(false)
    }

    return(
        <div className="bg-[url('/assets/destination/background-destination-mobile.jpg')] text-white w-full min-h-screen bg-cover bg-no-repeat relative box-border
        md:bg-[url('/assets/destination/background-destination-tablet.jpg')]
        lg:bg-[url('/assets/destination/background-destination-desktop.jpg')]
        ">
             
                <header>
                <Header />
                    </header>
            
        
        <main className="mt-10 lg:h-screen lg:flex lg:justify-around  lg:box-border lg:mx-[10%] ">
            <section className="w-[13.8125rem] mx-auto md:mx-0   
            lg:flex lg:flex-col  lg:w-[50%] l">
                <h3 className=" h-[1.1875rem] font-[Barlow-Condensed] font-normal text-base leading-5 tracking-[2.7px] text-[#FFFFFF] 
                 md:ml-9 md:h-6 md:w-[17rem] md:mx-0  md:text-xl md:leading-7 md:tracking-[3.375px] lg:text-3xl lg:leading-9 lg:tracking-[4.725px] lg:w-auto  "> <span className="font-bold opacity-25 
                
                ">01</span> PICK YOUR DESTINATION</h3>
                
                <figure className='mt-12 md:flex md:justify-center md:h-[18.75rem] md:w-screen 
                lg:self-center lg:mt-[10rem] lg:flex-none lg:w-[50%] '>
                    {
                        (() => {
                            if(moon){
                                return (<Image src={MOON} width={300} height={400}  alt="planet"/>)
                            }
                            else if (mars) {
                               return  <Image src={MARS} width={350} height={400}  alt="planet"/>
                            }
                            else if (europa){
                               return  <Image src={EUROPA} width={350} height={400}  alt="planet"/>
                            }else {
                               return <Image src={TITAN} width={350} height={400}  alt="planet"/>
                            }

                        })()
                    }
                </figure>
            </section>
            <section className="lg:self-center ">
        
            <nav className="">
                <ul className="text-white mt-7 flex mx-auto w-[14.84375rem] h-7 justify-between font-[Barlow-Condensed] leading-4 tracking-[2.3625px]  
                md:w-[17.84375rem] md:h-9 md:text-base md:leading-5 md:tracking-[2.7px] md:text-[#D0D6F9] 
                ">
                    <li className={`hover:cursor-pointer  ${moon ? "border-b-2" : ""}`} onClick={onPlanetHandler}>MOON</li>
                    <li className={`hover:cursor-pointer text-[#D0D6F9] ${mars ? "border-b-2" : ""}`} onClick={onMarsHandler}>MARS</li>
                    <li className={`hover:cursor-pointer text-[#D0D6F9] ${europa ? "border-b-2" : ""}`} onClick={onEuropaHandler}>EUROPA</li>
                    <li className={`hover:cursor-pointer text-[#D0D6F9] ${titan ? "border-b-2" : ""}`} onClick={onTitanHandler}>TITAN</li>
                </ul>
            </nav>

            {moon && <section>

            <div className="">
                <p className="font-[Bellefair] text-[3.5rem] leading-[4rem] text-[#FFFFFF] text-center pt-6   md:text-[5rem] md:leading-[5.75rem] lg:text-[6.25rem] lg:leading-[7.1875rem]  ">MOON</p>
            </div>
            <article className="w-[20.4375rem] h-[7.8125rem] mx-auto md:w-[35.8125rem] md:h-[5.25rem] lg:w-[27.75rem] lg:h-[8rem]">
                <p className="font-[Barlow] text-sm leading-6 text-center text-[#D0D6F9] pb-6 lg:pb-8 border-b border-[#383B4B] md:text-base md:leading-7 lg:text-xl lg:leading-8 ">See our planet as you've never seen it before. A perfect relaxing trip 
                    away to help regain perspective and come back refreshed. while you're there
                    . take in some history by visiting the Luna 2 and Apollo 11 landing site</p>
            </article>
            <section className="md:flex md:w-[35.8125rem] md:h-[5.62rem] md:justify-between md:items-center  md:mx-auto md:mt-6  lg:mt-12">
            <div className="mx-auto mt-4  w-[13.5rem] h-[4.96875rem] justify-around flex flex-col items-center text-[#FFFFFF] ">
                <h5 className=" font-[Barlow-Condensed] text-sm leading-4 text-center tracking-[2.3625px] text-[#D0D6F9]
                ">AVG. DISTANCE</h5>
                <p className="font-[Bellefair] text-3xl leading-8 text-center 
                ">384,400KM</p>
            </div>
            <div className=" mx-auto w-[13.9375rem] h-[3.8125rem] text-[#FFFFFF]  flex flex-col justify-around ">
                <p className="  font-[Barlow-Condensed] text-sm leading-4 text-center tracking-[2.3625px] text-[#D0D6F9]  
                ">
                    EST. TRAVEL TIME
                </p>
                <p className="font-[Bellefair] text-3xl leading-8 text-center md:pt-6
                ">3 DAYS</p>
            </div>
            </section>
            </section>}
            
            { mars && <section>
            <div className=" ">
                <p className="font-[Bellefair] text-[3.5rem] leading-[4rem] text-[#FFFFFF] text-center pt-6
                  md:text-[5rem] md:leading-[5.75rem] lg:text-[6.25rem] lg:leading-[7.1875rem] ">MARS</p>
            </div>
            <article className="w-[20.4375rem] h-[7.8125rem] mx-auto md:w-[35.8125rem] md:h-[5.25rem] lg:w-[27.75rem] lg:h-[8rem]
         ">
                <p className="font-[Barlow] text-sm leading-6 text-center text-[#D0D6F9] pb-6 lg:pb-8 border-b border-[#383B4B] md:text-base md:leading-7 lg:text-xl lg:leading-8 ">Don't forget to pack your hiking boots.You'll need them to
                    tackle olympus Mons, the tallest planetary mountain in our solar system.
                    It's two and a half times the size of the everest
                </p>
            </article>
            <section className="md:flex md:w-[35.8125rem] md:h-[5.62rem] md:justify-between md:items-center  md:mx-auto md:mt-6   lg:mt-12">
                <div className=" mx-auto mt-4  w-[13.5rem] h-[4.96875rem] justify-around flex flex-col items-center text-[#FFFFFF]
                ">
                <h4 className="font-[Barlow-Condensed] text-sm leading-4 text-center tracking-[2.3625px] text-[#D0D6F9]">AVG. DISTANCE</h4>
                <p className="font-[Bellefair] text-3xl leading-8 text-center">225 MIL.KM</p>
                </div>
                <div className="  mx-auto w-[13.9375rem] h-[3.8125rem] text-[#FFFFFF]  flex flex-col justify-around ">
                    <h4 className=" font-[Barlow-Condensed] text-sm leading-4 text-center tracking-[2.3625px] text-[#D0D6F9]"> EST. TRAVEL TIME</h4>
                    <p className="font-[Bellefair] text-3xl leading-8 text-center md:pt-6">9 MONTHS</p>
                </div>    
            </section>
            </section>}
            { europa && <section>
            <div className="">
                <p className=" font-[Bellefair] text-[3.5rem] leading-[4rem] text-[#FFFFFF] text-center pt-6  md:text-[5rem] md:leading-[5.75rem] lg:text-[6.25rem] lg:leading-[7.1875rem] ">EUROPA</p>
            </div>
            <section className="w-[20.4375rem] h-[7.8125rem] mx-auto md:w-[35.8125rem] md:h-[5.25rem] lg:w-[27.75rem] lg:h-[8rem]">
                <p className="font-[Barlow] text-sm leading-6 text-center text-[#D0D6F9] pb-6 lg:pb-8 border-b border-[#383B4B] md:text-base md:leading-7 lg:text-xl lg:leading-8">The smallest of the four Galilean moons orbiting Jupiter,
                    Europa is a winter lover's dream. With an icy surface, it's 
                    perfect for a bit of ice skating, curling, hockey, or simple 
                    relaxation in your snug wintery cabin
                </p>
            </section>
            <section className=" md:flex md:w-[35.8125rem] md:h-[5.62rem] md:justify-between md:items-center  md:mx-auto md:mt-6  lg:mt-12">
                <div className="mx-auto mt-4  w-[13.5rem] h-[4.96875rem] justify-around flex flex-col items-center text-[#FFFFFF]">
                    <h5 className="font-[Barlow-Condensed] text-sm leading-4 text-center tracking-[2.3625px] text-[#D0D6F9]">AVG. DISTANCE</h5>
                    <p className="font-[Bellefair] text-3xl leading-8 text-center">628 MIL. KM</p>
                </div>
                <div className="  mx-auto w-[13.9375rem] h-[3.8125rem] text-[#FFFFFF]  flex flex-col justify-around ">
                    <h5 className="font-[Barlow-Condensed] text-sm leading-4 text-center tracking-[2.3625px] text-[#D0D6F9]"> EST. TRAVEL TIME</h5>
                    <p className="font-[Bellefair] text-3xl leading-8 text-center md:pt-6"> 3 YEARS</p>
                </div>
            </section>
            </section>}

            {titan && <section>
            <div className="">
                <p className=" font-[Bellefair] text-[3.5rem] leading-[4rem] text-[#FFFFFF] text-center pt-6  md:text-[5rem] md:leading-[5.75rem] lg:text-[6.25rem] lg:leading-[7.1875rem] ">TITAN</p>
            </div>
            <section className="w-[20.4375rem] h-[7.8125rem] mx-auto md:w-[35.8125rem] md:h-[5.25rem] lg:w-[27.75rem] lg:h-[8rem]">
                <p className="font-[Barlow] text-sm leading-6 text-center text-[#D0D6F9] pb-6 lg:pb-8 border-b border-[#383B4B] md:text-base md:leading-7 lg:text-xl lg:leading-8 "> The only moon known to have a dense atmosphere other than Earth,
                    Titan is a home away from home (just a few hundred degrees colder!).
                    as a bonus, you get striking views of the Rings of Saturn
                              </p>
            </section>
            <section className="md:flex md:w-[35.8125rem] md:h-[5.62rem] md:justify-between md:items-center  md:mx-auto md:mt-6 lg:mt-12">
                <div className="mx-auto mt-4  w-[13.5rem] h-[4.96875rem] justify-around flex flex-col items-center text-[#FFFFFF]">
                    <h5 className="font-[Barlow-Condensed] text-sm leading-4 text-center tracking-[2.3625px] text-[#D0D6F9]">AVG. DISTANCE</h5>
                    <p className="font-[Bellefair] text-3xl leading-8 text-center">1.6 BIL. KM</p>
                </div>
                <div className=" mx-auto w-[13.9375rem] h-[3.8125rem] text-[#FFFFFF]  flex flex-col justify-around  ">
                    <h5 className="font-[Barlow-Condensed] text-sm leading-4 text-center tracking-[2.3625px] text-[#D0D6F9]"> EST. TRAVEL TIME</h5>
                    <p className="font-[Bellefair] text-3xl leading-8 text-center md:pt-6"> 7 YEARS</p>
                </div>
            </section>
            </section>}
            </section>
        </main>
        </div>       
    )
}