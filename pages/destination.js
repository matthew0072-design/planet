import Link from 'next/link'
import Header from '../pages/header'
import Image from 'next/image'
import {useState} from 'react'
import planet from '../public/moon.png'
import europapix from '../public/europa.png'

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
        <div className="bg-black relative w-[1350px] h-[900px] md:bg-destinationTablet md:w-[768px]  md:h-[1024px]  md:bg-no-repeat mobile:w-[375px] mobile:h-[825px] mobile:relative  flex flex-col">
            <header>  
                <Header />
            </header>
        
        <main className="text-white  ">
            <section>
                <h3 className="absolute w-96 h-8 left-40 top-52 font-body2 font-normal text-3xl leading-8 tracking-widest 
                md:w-[272px] md:h-[24px] md:top-[136px] md:left-[38.5px] md:absolute md:text-[20px] md:leading-[24px] md:tracking-[3.38px] 
                mobile:absolute mobile:w-[221px] mobile:h-[19px] mobile:top-[calc(50%-19px/2-320px)] mobile:left-[14.93%] mobile:right-[1.81%] mobile:text-base mobile:leading-[19px] mobile:tracking-[2.7px]
                "> <span className="font-body2 opacity-25 font-bold text-3xl leading-8 tracking-widest w-7 h-8 md:w-[19px] md:h-[24px] md:opacity-25 
                md:font-bold md:text-[20px] md:leading-[24px] md:tracking-[3.38px]
                 mobile:h-[19px]  mobile:text-base mobile:leading-[19px] mobile:tracking-[2.7px] mobile:font-bold
                ">01</span> PICK YOUR DESTINATION</h3>
                <figure className="absolute left-56 top-80 
                md:left-[234px] md:top-[220px] md:absolute md:w-[300px] md:h-[300px]
                mobile:absolute mobile:w-[170px] mobile:h-[170px] mobile:left-[103px] mobile:top-[139px]   ">
                    { europa ? (<Image src={europapix} width={400} height={400} />):<Image src={planet} width={400} height={400} />}
                </figure>
            </section>
            <section className=" absolute w-[445px] h-[472px] left-[832px] top-[312px]">
        
            <nav>
                <ul className="flex justify-around w-[285.5px]  h-[34px] absolute left-[32px]  font-body2 text-base leading-5 tracking-widest 
                md:top-[230px] md:absolute md:h-[34px] md:left-[-600px]  md:w-[285.5px]
                mobile:absolute mobile:w-[237px] mobile:h-[28px]   mobile:left-[-175%] mobile:top-[20px]  ">
                    <li className={`hover:cursor-pointer  ${moon ? "border-b-2" : ""}`} onClick={onPlanetHandler}>MOON</li>
                    <li className={`hover:cursor-pointer  ${mars ? "border-b-2" : ""}`} onClick={onMarsHandler}>MARS</li>
                    <li className={`hover:cursor-pointer  ${europa ? "border-b-2" : ""}`} onClick={onEuropaHandler}>EUROPA</li>
                    <li className={`hover:cursor-pointer  ${titan ? "border-b-2" : ""}`} onClick={onTitanHandler}>TITAN</li>
                </ul>
            </nav>

            {moon && <section>

            <div className="mt-20 w-80 h-28 md:absolute md:top-[250px] left-[-600px]">
                <p className="text-8xl font-body leading-10 md:text-[80px] md:leading-[91.68px]  ">MOON</p>
            </div>
            <article className="w-96 mb-20 text-lg leading-8 font-normal h-32 font-body1   md:top-[450px] md:text-center md:text-base md:leading-[28px] b  md:h-[84px]  md:w-[500px]  md:absolute md:left-[-720px]">
                <p className="">See our planet as you've never seen it before. A perfect relaxing trip 
                    away to help regain perspective and come back refreshed. while you're there
                    . take in some history by visiting the Luna 2 and Apollo 11 landing site</p>
            </article>
            <section className=" border-t pt-24cd  md:w-[573px] md:border-t md:h-[90px] md:absolute md:top-[572px] md:left-[-710px]  ">
            <div className="h-[61px] w-[143px] absolute  left-[0.11%] right-[67.75%] top-[87.29%] bottom-[-0.21%] ">
                <h5 className="font-body2 text-sm leading-4 tracking-widest w-24 h-4
                md:absolute md:w-[216px] md:h-[17px] md:left-[1.43%] md:right-[70.87%] md:top-[calc(50%-17px/2-7.5px)] md:text-[14px] md:leading-[17px] md:text-center md:tracking0[2.3625px]
                ">AVG. DISTANCE</h5>
                <p className="font-body text-3xl leading-8 w-36 h-8 font-normal
               md:absolute md:w-[216px] md:h-[32px] md:left-[11.43%] md:right-[50.87%] md:top-[calc(50%-32px/2+29px)] md:text-[28px] md:leading-[32px] md:text-center 
                ">384,400KM</p>
            </div>
            <div className="h-[61px] w-[122px] absolute right-[20.58%] left-[50%] bottom-[0%] top=[87.08%]  ">
                <p className="font-body2 text-sm leading-4 tracking-widest w30 h-4 
                md:absolute md:h-[17px] md:left-[51.05%] md:right-[10.03%] md:top-[calc(50%-17px/2-7.5px)] md:text-[14px] md:leading-[17px] md:text-center md:tracking-[2.3625px] md:w-[223px]    
                ">
                    EST. TRAVEL TIME
                </p>
                <p className="text-3xl font-body h-8 w-28 leading-8 
                md:absolute md:w-[223px] md:h-[32px] md:left-[51.05%] md:right-[10.03%] md:top-[calc(50%-32px/2+29px)] md:text-[28px] md:leading-[32px] md:text-center
                ">3 DAYS</p>
            </div>
            </section>
            </section>}
            
            { mars && <section>
            <div className="mt-20 w-80 h-28 md:absolute md:top-[250px] ">
                <p className="text-8xl font-body leading-10 md:text-[80px] md:leading-[91.68px] 
                mobile:absolute mobile:w-[153px] mobile:h-[64px] mobile:left-[-165%]   mobile:text-[56px] mobile:leading-[64px] mobile:text-center
                ">MARS</p>
            </div>
            <article className="w-96 mb-20 text-lg leading-8 font-normal h-32 font-body1 after:border after:border-white-400
         after:w-96 after:absolute after:top-96 after:bottom-28 after:right-4  
         md:top-[450px] md:text-center md:text-base md:leading-[28px] md:pb-[40px] md:border-b  md:h-[84px]  md:w-[500px]  md:absolute md:left-[-720px]
         mobile:absolute mobile:w-[327px] mobile:h-[100px]   mobile:left-[-180%] mobile:top-[140px]  mobile:text-[15px] mobile:leading-[25px] mobile:text-center
         ">
                <p>Don't forget to pack your hiking boots.You'll need them to
                    tackle olympus Mons, the tallest planetary mountain in our solar system.
                    It's two and a half times the size of the everest
                </p>
            </article>
            <section className="md:w-[573px] md:h-[90px] md:absolute md:top-[572px] md:left-[-750px]  ">
                <div className="h-16 w-36 absolute right-2/3 
                mobile:absolute mobile:w-[216px] mobile:h-[61px] mobile:left-[-170%]  mobile:border-8 
                ">
                <h4 className="font-body2 text-sm leading-4 tracking-widest w-24 h-4">AVG. DISTANCE</h4>
                <p className="font-body text-2xl leading-8 w-40 h-8 font-normal">225 MIL.KM</p>
                </div>
                <div className="h-16 w-32 absolute right-20  ">
                    <h4 className="font-body2 text-sm leading-4 tracking-widest w30 h-4 "> EST. TRAVEL TIME</h4>
                    <p className="text-2xl font-body h-8 leading-8 w-40">9 MONTHS</p>
                </div>    
            </section>
            </section>}
            { europa && <section>
            <div className="mt-20 w-80 h-28 md:absolute md:top-[250px] left-[-600px]">
                <p className="text-8xl font-body leading-10 md:text-[80px] md:leading-[91.68px] ">EUROPA</p>
            </div>
            <section className="w-96 mb-20 text-lg leading-8 font-normal h-32 font-body1 after:border after:border-white-400
         after:w-96 after:absolute after:top-96 after:bottom-28 after:right-4  md:top-[450px] md:text-center md:text-base md:leading-[28px] md:pb-[40px] md:border-b  md:h-[84px]  md:w-[500px]  md:absolute md:left-[-720px]">
                <p>The smallest of the four Galilean moons orbiting Jupiter,
                    Europa is a winter lover's dream. With an icy surface, it's 
                    perfect for a bit of ice skating, curling, hockey, or simple 
                    relaxation in your snug wintery cabin
                </p>
            </section>
            <section className="md:w-[573px] md:h-[90px] md:absolute md:top-[572px] md:left-[-750px]  ">
                <div className="h-16 w-40 absolute right-2/3">
                    <h5 className="font-body2 text-sm leading-4 tracking-widest w-24 h-4">AVG. DISTANCE</h5>
                    <p className="font-body text-2xl leading-8 w-40 h-8 font-normal">628 MIL. KM</p>
                </div>
                <div className="h-16 w-32 absolute right-20  ">
                    <h5 className="font-body2 text-sm leading-4 tracking-widest w-32 h-4"> EST. TRAVEL TIME</h5>
                    <p className="text-2xl font-body h-8 leading-8 w-28"> 3 YEARS</p>
                </div>
            </section>
            </section>}

            {titan && <section>
            <div className="mt-20 w-80 h-28 md:absolute md:top-[250px] left-[-600px]">
                <p className="text-8xl font-body leading-10 md:text-[80px] md:leading-[91.68px] ">TITAN</p>
            </div>
            <section className="w-96 mb-20 text-lg leading-8 font-normal h-32 font-body1 after:border after:border-white-400
         after:w-96 after:absolute after:top-96 after:bottom-28 after:right-4  md:top-[450px] md:text-center md:text-base md:leading-[28px] md:pb-[40px] md:border-b  md:h-[84px]  md:w-[500px]  md:absolute md:left-[-720px]">
                <p> The only moon known to have a dense atmosphere other than Earth,
                    Titan is a home away from home (just a few hundred degrees colder!).
                    as a bonus, you get striking views of the Rings of Saturn
                              </p>
            </section>
            <section className="md:w-[573px] md:h-[90px] md:absolute md:top-[572px] md:left-[-750px]">
                <div className="h-16 w-36 absolute right-2/3">
                    <h5 className="font-body2 text-sm leading-4 tracking-widest w-32 h-4">AVG. DISTANCE</h5>
                    <p className="text-2xl font-body h-8 leading-8 w-32">1.6 BIL. KM</p>
                </div>
                <div className="h-16 w-32 absolute right-20  ">
                    <h5 className="font-body2 text-sm leading-4 tracking-widest w-32 h-4"> EST. TRAVEL TIME</h5>
                    <p className="text-2xl font-body h-8 leading-8 w-28"> 7 YEARS</p>
                </div>
            </section>
            </section>}
            </section>
        </main>
        </div>       
    )
}