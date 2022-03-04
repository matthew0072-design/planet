import Header from '../pages/header'
import Image from 'next/image'
import {useState} from 'react'
import crew1 from '../public/crew1.png'
import crew2 from '../public/crew2.png'
import crew3 from '../public/crew3.png'
import crew4 from '../public/crew4.png'


export default function Crew () {
    
    const [commander, setCommander] = useState("commander")
    const [mission, setMission] = useState(false)
    const [pilot, setPilot] = useState(false)
    const [flight, setFlight] = useState(false)

    const onCommanderHandler = () => {
        setCommander(true)
        setMission(false)
        setPilot(false)
        setFlight(false)
    }

    const onMissionHandler = () => {
        setMission(true)
        setCommander(false)
        setPilot(false)
        setFlight(false)
    }

    const onPilotHandler = () => {
        setPilot(true)
        setMission(false)
        setCommander(false)
        setFlight(false)
    }

    const onFlightHandler = () => {
        setFlight(true)
        setMission(false)
        setPilot(false)
        setCommander(false)
    }

    return (
        <div className="bg-[url('../public/crew0.png')] h-[900px] w-[1440px] md:left-[0px] md:top-[0px]  md:w-[768px] md:h-[1024px] md:bg-no-repeat text-white relative md:relative">
            <Header />
            <div>
            <h3 className="w-72 h-8 font-body2 absolute top-56 left-40 leading-8 text-3xl tracking-widest 
                    md:w-[204px] md:h-[24px] md:top-[100px] md:left-[38.5px] md:absolute md:leading-[24px] md:tracking-[3.38px] md:text-[20px] "><span className="font-body2 font-bold leading-8 w-8 h-8 opacity-25 tracking-widest md:w-[22px] md:h-[24px] md:opacity-25 md:font-bold md:text-[20px] md:leading-[24px] md:tracking-[3.38px]  ">02</span> MEET THE CREW</h3>
            </div>
            <main className="flex justify-around">
                <section>
                    {commander && <section className="md:w-[458px] md:h-[182px] md:top-[220px] md:left-[155px] md:absolute ">
                    
                    <h3 className="w-[214px] h-[37px] top-[400px] left-[165.5px] leading-[36.67px] text-[32px] font-body opacity-50 absolute 
                    md:w-[161px] md:h-[28px] md:top-[10px] md:left-[148.5px] md:opacity-[.494] md:text-[24px] md:leading-[27.5px] md:text-center 
                    "> COMMANDER</h3>
                    <p className=" w-[488px] h-16  left-[165.5px] top-[452px] font-body text-[56px] leading-[64.18px] absolute
                    md:w-[457px] md:h-[46px] md:absolute md:top-[36px] md:left-[0.5px] md:text-[40px] md:leading-[45.84px] md:text-center
                    ">DOUGLAS HURLEY</p>
                    <p className="w-[444px] font-body2 text-lg leading-8 h-32 top-[543px] left-[165px] absolute
                    md:w-[420px] md:h-[84px] md:top-[98px] md:text-base md:leading-[28px] md:text-center md:left-[30px] 
                    "> Douglas Gerald Hurley is an American engineer,former
                        former Marine Corps pilot and former NASA astronauts.
                        He launched into space for the third time as commander of 
                        Crew Dragon Demo-2
                    </p>
                
                    </section>}

                    {mission && <section className="md:w-[520px] md:h-[182px]  md:top-[220px] md:left-[124px] md:absolute ">  
                    <p className="w-[309px] h-[37px] top-[400px] left-[165.5px] opacity-[0.5042] absolute font-body text-[32px] leading-[36.67px]
                    md:w-[242px] md:h-[28px] md:left-[144px] md:opacity-[0.4994] md:top-[10px] md:text-[24px] md:leading-[27.5px] md:text-center
                    ">MISSION SPECIALIST</p>
                    <p className="w-[614px] h-16 top-[452px] left-[165.5px] absolute font-body text-[56px] leading-[64.18px]
                    md:text-[40px] md:leading-[46px] md:text-center md:h-[46px] md:top-[calc(50%-46px/2-32px)] md:left-[-10%] md:absolute
                    "> MARK SHUTTLEWORTH</p>
                    <p className="w-[444px] h-[128px] top-[543px] left-[165px] font-body text-[18px] absolute leading-8
                    md:w-[500px] md:h-[84px] md:top-[98px] md:text-base md:leading-[28px] md:left-[20px] md:text-center
                    " > Mark Richard Shuttleworth is the founder and CEO of canonical,
                        the company behind the Linux-based Ubuntu operating system.
                        Shuttleworth became the first South Africa to travel to space 
                        as a space tourist
                    </p>
                    </section>}

                    {pilot && <section className="md:w-[592px] md:h-[182px] md:top-[220px] md:left-[88px] md:absolute ">  
                        <p className="w-[87px] h-[37px] top-[400px] left-[165.5px] opacity-[0.5042] absolute font-body text-[32px] leading-[36.67px]
                        md:h-[28px] md:text-[24px] md:leading-[28px] md:left-[44.43%] md:right-[44.43%] md:text-center md:center md:top-[10px]
                        ">PILOT</p>
                        <p className="w-[433px] h-16 top-[452px] left-[165.5px] absolute font-body text-[56px] leading-[64.18px]
                        md:absolute md:left-[11.4%] md:right-[11.4%] md:top-[calc(50%-46px/2-32px)] md:text-[40px] md:leading-[46px] md:text-center
                        ">VICTOR GLOVER</p>
                        <p className="w-[444px] h-[160px] top-[543px] left-[165px] font-body1 text-[18px] absolute leading-8
                        md:absolute md:w-[592px]  md:left-[0%] md:right-[0%] md:top-[calc(50%-84px/2+49px)] md:text-base md:leading-[28px] md:text-center md:font-[#D0D6F9]
                        "> Pilot on the first operational flight of the SpaceX Crew
                            Dragon to the international Space Station. Glover is a commander
                            in the U.S. Navy where he pilots an F/A-18. He was a crew member of 
                            Expedition 64, and served as a station systems flight engineer.
                        </p>
                    </section>}
                
                    { flight &&<section className="md:absolute md:w-[536px] md:h-[182px] md:left-[116px] md:top-[220px] ">
                        <p className="w-[273px] h-[37px] top-[400px] left-[165.5px] opacity-[0.5042] absolute font-body text-[32px] leading-[36.67px]
                        md:absolute md:h-[28px] md:left-[30.88%] md:right-[30.88%] md:top-[calc(50%-28px/2-77px)] md:text-[24px] md:leading-[28px] md:text-center
                        ">FLIGHT ENGINEER</p>
                        <p className="w-[532px] h-16 top-[452px] left-[165.5px] absolute font-body text-[56px] leading-[64.18px]
                        md:absolute md:h-[46px] md:left-[7.37%] md:right-[7.37%] md:top-[calc(50%-46px/2-32px)] md:text-[40px] md:leading-[46px] md:text-center
                        "> ANOUSHEH ANSARI</p>
                        <p className="w-[444px] h-[128px] top-[543px] left-[165px] font-body1 text-[18px] absolute leading-8
                        md:w-[536px] md:absolute md:top-[calc(50%-84px/2+49px)] md:text-base md:text-center md:leading-[28px] md:left-[0%] md:right-[0%]
                        "> Anousheh Ansari is an Iranian American engineer and co-founder
                            of Prodea Systems. Ansari was the fourth self-funded woman to 
                            fly to the ISS and the first Iranian in space 
                        </p>
                    </section>}

                </section>

                <section>

               {commander && <section className=" w-[568.07px] h-[712px] top-[198px] left-[734.93px] absolute
               md:w-[456.37px] md:h-[572px] md:top-[492px] md:left-[155.85px] md:absolute
               ">
                    <figure className="">
                <Image src={crew1} height={700} width={400} />
                    </figure>
                </section>}

                {mission && <section className="w-[453.44px] h-[654px] top-[246px] left-[800px] absolute
                md:w-[368.85px] md:h-[532px] md:top-[492px] md:left-[200px] md:absolute
                ">
                        <figure className="">
                            <Image src={crew2} width={400} height={650} />
                        </figure>
                    </section>}
                
                    {pilot && <section className="w-[554.39px] h-[681px] top-[246px] left-[743px] absolute
                    md:absolute md:w-[433.03px] md:h-[532px] md:left-[156px] md:top-[492px]">
                        <figure className="">
                            <Image src={crew3} width={400} height={650} />
                        </figure>
                    </section>}

                    {flight && <section className="w-[615.57px] h-[607px] top-[294px] left-[735px] absolute
                    md:absolute md:w-[539.51px] md:h-[532px] md:top-[492px] md:left-[134px]
                ">
                        <figure className="">
                            <Image src={crew4} width={400} height={600} />
                        </figure>
                    </section>}
                </section>
                </main>
                <section className=" flex justify-around w-[132px] absolute left-[167px] h-[15px]  top-[791px] 
                md:w-[88px] md:h-[10px] md:left-[340px] md:top-[442px] md:absolute
                ">
                    <div className={`h-[15px] w-[15px] left-[167px] top-[791px]  bg-[#FFFFFF] opacity-[0.174] border-2 rounded-full  hover:cursor-pointer ${commander ? "opacity-100" : ""}`} onClick={onCommanderHandler}></div>
                    <div className={`h-[15px] w-[15px] border-2 left-[206px] top-[791px] bg-[#FFFFFF] opacity-[0.174]  rounded-full  hover:cursor-pointer ${mission ? "opacity-100" : ""}`} onClick={onMissionHandler}></div>
                    <div className={`h-[15px] w-[15px]  left-[245px] top-[791px] bg-[#FFFFFF] opacity-[0.174] border-2 rounded-full hover:cursor-pointer ${pilot ? "opacity-100" : ""}`} onClick={onPilotHandler}></div>
                    <div className={`h-[15px] w-[15px] left-[284px] top-[791px] bg-[#FFFFFF] opacity-[0.174] mix-blend-normal border-2 rounded-full  hover:cursor-pointer ${flight ? "opacity-100" : ""}`}onClick={onFlightHandler}></div>
                </section>
        </div>
    )
}