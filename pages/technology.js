import Header from '../pages/header'
import Image from 'next/image'
import {useState} from 'react'
import vehicle from '../public/tech3.jpg'
import spaceport from '../public/tech1.jpg'
import spaceCapsule from '../public/tech2.jpg'

export default function Technology () {

        const [vehicleSpace, setVehicleSpace] = useState('vehicleSpace')
        const [portSpace, setPortSpace] = useState(false)
        const [capsuleSpace, setCapsuleSpace] = useState(false) 

        const onVehicleHandler =() => {
            setVehicleSpace(true)
            setPortSpace(false)
            setCapsuleSpace(false)
        }

        const onSpaceHandler = () => {
            setVehicleSpace(false)
            setPortSpace(true)
            setCapsuleSpace(false)
        }

        const onCapsuleHandler = () => {
            setVehicleSpace(false)
            setPortSpace(false)
            setCapsuleSpace(true)
        }


    return (
            <div className="bg-[url('../public/tech0.jpg')] text-white h-[900px] w-[1440px] md:h-[1024px] md:w-[768px]  relative">
                <Header />
            <section className="w-[305px]  h-[34px] top-[212px] left-[166.5px]  absolute md:w-[217px] md:h-[24px] md:left-[10.5px] md:top-[136px] md:absolute  ">
                <p className="  w-[305px]  h-[34px]  left-[54px] font-body2 leading-[33.6px] tracking-[4.72px] text-[28px] md:w-[217px] md:absolute md:h-[24px] md:left-[17.51%] md:right-[1.84%] md:top-[calc(50%-24px/2)] md:text-[20px] md:leading-[24px] md:tracking-[3.375px] "><span className="w-[30px] h-[34px]  opacity-25 font-body2 text-[28px] leading-[33.6px] tracking-[4.72px] font-bold   md:w-[22px] md:h-[24px] md:left-[0%]  md:top-[calc(50%-24px/2)] md:font-bold md:text-[20px] md:leading-[24px] md:tracking-[3.375px] md:opacity-25 ">03</span> SPACE LAUNCH 101  </p>
            </section>
            <main className="flex justify-around">
                <section className="md:absolute md:w-[210px] md:h-[60px] md:top-[568px] ">
                <div className={`w-[80px] h-[80px] left-[165px]  top-[383px] rounded-full border-2 absolute hover:cursor-pointer md:rounded-full md:border  md:absolute  md:w-[60px] md:h-[60px] md:left-[0px] md:top-[0px] ${vehicleSpace ? "bg-white text-black" :""}`} onClick={onVehicleHandler}><p className="w-[10px] h-[37px] absolute top-[22px] left-[32.5px] font-body text-[32px] leading-[36.67px] tracking-[2px] text-center
                 md:absolute md:h-[28px] md:left-[43.33%] md:right-[43.33%] md:hover:cursor-pointer md:top-[calc(50%-28px/2)] md:text-[24px] md:leading-[28px] md:tracking-[1.5px] md:text-center">1</p></div>
                <div className={`w-[80px] h-[80px] rounded-full border-2 top-[495px] left-[165px]  absolute hover:cursor-pointer md:rounded-full md:border  md:hover:cursor-pointer md:absolute md:w-[60px] md:h-[60px] md:left-[75px] md:top-[0px]  ${portSpace ? "bg-white text-black" :""}`}    onClick={onSpaceHandler}><p className="w-[16px] h-[37px] top-[22px] left-[32.5px] absolute font-body text-[32px] leading-[36.67px] tracking-[2px] text-center  md:absolute md:h-[28px] md:left-[40.83%] md:right-[39.17%] md:top-[calc(50%-28px/2)] md:text-[24px] md:leading-[28px] md:tracking-[1.5px] md:text-center">2</p></div>
                <div className={`w-[80px] h-[80px] rounded-full border-2 top-[607px] left-[165px]  absolute  hover:cursor-pointer  md:rounded-full md:border  md:hover:cursor-pointer md:absolute md:w-[58px] md:h-[58px] md:left-[150px] md:top-[0px]  ${capsuleSpace ? "bg-white text-black" :""}`} onClick={onCapsuleHandler}><p className="w-[16px] h-[37px] top-[22px] left-[32.5px]  absolute font-body text-[32px] leading-[36.67px] tracking-[2px] text-center md:absolute md:h-[28px] md:left-[40.52%] md:right-[38.79%] md:top-[calc(50%-28px/2)] md:text-[24px] md:leading-[28px] md:tracking-[1.5px] md:text-center  " >3</p></div>
                </section>
                <section>
               {vehicleSpace && <section className="w-[470px] h-[303px]  top-[383px] left-[325px] absolute md:absolute md:w-[458px] md:h-[237px] md:left-[155px] md:top-[690px] ">
                    <p className="w-[158px] h-[19px] font-body2 text-[16px] leading-[19.2px] tracking-[2.7px] md:absolute md:h-[19px] md:left-[33.84%] md:right-[33.41%] md:top-[50%-19px/2-109px] md:text-base md:leading-[19px] md:tracking-[2.7px]   ">THE TERMINOLOGY...</p>
                    <p className="w-[470px] h-16 top-[30px] font-body text-[56px] leading-[64.18px] md:absolute md:h-[46px] md:left-[0.11%] md:right-[0.11%] md:top-[50%-46px/2-60.5px] md:text-[40px] md:leading-[46px] md:text-center "> LAUNCH VEHICLE </p>
                    <p className="w-[400px] h-[192px] top-[111px] text-[18px] leading-8 font-body1 md:absolute md:h-[140px] md:left-[0%] md:right-[0%] md:top-[50%-140px/2+48.5px] md:text-base md:leading-[28px] md:text-center md:w-[472px] ">A launch vehicle or carrier rocket-propelled vehicle used to carry
                        a payload from Earth's surface to space, usually to Earth orbit or beyond.
                        Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres
                        tall,it's quite an awe-inspiring sight on the launch pad!
                    </p>
                </section>}


               {portSpace && <section className="w-[444px] h-[271px] top-[383px] left-[325px] absolute md:absolute md:w-[458px] md:h-[237px] md:left-[155px] md:top-[690px]  ">
                    <p className="w-[158px] h-[19px] font-body2 text-base leading-[19.2px] tracking-[2.7px] text-[#DOD6F9]  md:absolute md:h-[19px] md:left-[33.84%] md:right-[33.41%] md:top-[50%-19px/2-109px] md:text-base md:leading-[19px] md:tracking-[2.7px] md:font-[#D0D6F9] ">THE TERMINOLOGY...</p>
                    <p className="w-[309px] h-16 top-[30px] text-[56px] leading-[64.18px] font-body text-[#FFFFFF] md:absolute md:h-[46px] md:left-[0.11%] md:right-[0.11%] md:top-[50%-46px/2-60.5px] md:text-[40px] md:leading-[46px] md:text-center md:w-[457px]  "> SPACEPORT </p>
                    <p className="w-[400px] h-[192px] top-[111px] text-[18px] leading-8 font-body1  md:absolute md:h-[140px] md:left-[0%] md:right-[0%] md:top-[50%-140px/2+48.5px] md:text-base md:leading-[28px] md:text-center md:w-[458px] "> A spaceport or cosmodrome is a site for launching [or receiving]
                        spacecraft, by analogy to the seaport for ships or airport for aircraft.
                        Based in the famous cape Canaveral, our spaceport is ideally situated to
                        take advantage of the Earth's rotation for launch 

                    </p>
                </section>}

                { capsuleSpace && <section className="w-[444px] h-[271px] top-[383px] left-[325px] absolute md:absolute md:w-[458px] md:h-[237px] md:top-[690px] md:left-[155px]  ">
                    <p className="w-[158px] h-[19px] font-body2 text-base leading-[19.2px] tracking-[2.7px] text-[#DOD6F9] md:absolute md:h-[19px] md:left-[33.84%] md:right-[33.41%] md:top-[50%-19px/2-109px] md:text-base md:leading-[19px] md:tracking-[2.7px] ">THE TERMINOLOGY...</p>
                    <p className="w-[417px] h-16 top-[30px] text-[56px] leading-[64.18px] font-body text-[#FFFFFF] md:absolute md:h-[46px] md:left-[0.11%] md:right-[0.11%] md:top-[50%-46px/2-60.5px] md:text-[40px] md:leading-[46px] md:text-center"> SPACE CAPSULE </p>
                    <p className="w-[400px] h-[192px] top-[111px] text-[18px] leading-8 font-body1 md:absolute md:h-[140px] md:left-[0%] md:right-[0%] md:top-[50%-140px/2+48.5px] md:text-base md:leading-[28px] md:text-center md:w-[472px] "> A space capsule is an often-crewed spacecraft that uses a blunt-body
                        reentry capsule to reenter the Earth's atmosphere without wings. Our 
                        capsule is where you'll spend your time during the flight. It includes
                        a space gym, cinema, and plenty of other activities to keep entertained 

                    </p>
                </section>}

                </section>
                <section>
                {vehicleSpace && <section className="w-[515px] h-[527px] top-[272px] left-[925px] absolute
                md:absolute md:w-[768px] md:h-[310px] md:left-[0px] md:top-[220px] 
                ">
                    <figure>
                        <Image src={vehicle} width={800} height={322} layout="responsive"/>
                    </figure>
                </section>}

                {portSpace && <section className="w-[515px] h-[527px] top-[272px] left-[925px] absolute
                md:absolute md:w-[768px] md:h-[310px] md:left-[0px] md:top-[220px]
                ">
                    <figure>
                        <Image src={spaceport} width={800} height={322} layout="responsive"/>
                    </figure>
                </section>}

                {capsuleSpace && <section className="w-[515px] h-[527px] top-[272px] left-[925px] absolute
                md:absolute md:w-[768px] md:h-[310px] md:left-[0px] md:top-[220px]
                ">
                    <figure className=" md:w-[800] md:h-[322] ">
                        <Image src={spaceCapsule} width={800} height={322} layout="responsive" />
                    </figure>
                </section>}
                </section>
            </main>
                
                </div>

    )
}