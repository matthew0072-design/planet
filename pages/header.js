import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'
import path from '../public/Path.png'



export default function Header() {
  const router = useRouter()

    return (
        <header className="text-white bg-gray-900 w-[1290px] h-24 top-[40px] left-[55px] absolute  flex justify-between items-center 
        md:w-[729px] md:h-24 md:left-[39px] md:absolute md:top-[0px]
        mobile:w-[375px] mobile:h-[40px] mobile:left-[0%] mobile:right-[0%]
        ">
        <div className="bg-white border rounded-full h-8 w-8 relative after:border after:border-gray-500
         after:w-96 after:absolute after:top-4 after:left-36 after:z-10 md:after:hidden 
         mobile:after:hidden mobile:left-[24px]  mobile:absolute mobile:w-[40px] mobile:h-[40px] ">
          <Image src={path} width={300} height={300} />
        </div>
      
        <nav className=" ">
          <div className="md:hidden  mobile:absolute  mobile:w-[24px] mobile:h-[21px] mobile:top-[-55%]  ">
            <div className="mobile:absolute mobile:border-2  mobile:w-[24px] mobile:h-[3px] mobile:left-[327px] mobile:top-[33px]  "></div>
            <div className="mobile:absolute mobile:border-2 mobile:w-[24px] mobile:h-[3px] mobile:left-[327px] mobile:top-[42px]  "></div>
            <div className="mobile:absolute mobile:border-2 mobile:w-[24px] mobile:h-[3px] mobile:left-[327px] mobile:top-[51px]  "> </div>
          </div>
          <ul className=" flex justify-around w-[542px] h-[19px] top-[45px] left-[600px] absolute
            md:w-[340px] md:h-[18px] md:top-[39px]   md:left-[366px] md:absolute mobile:hidden
          
          ">
            <li className={`font-body2 text-base leading-[19.2px] tracking-[2.7px] pb-12 
            md:h-[17px] md:left-[0%] md:right-[90.45%] md:top-[calc(50%-17px/2-0.5px)] md:leading-[17px] md:tracking-[2.3625px]
            md:text-[14px] md:absolute
            ${router.pathname === "/" ? "border-b-4": ""}`}><Link href="/"><a className="block"><span className="w-[18px] h-[19px] font-body2 font-bold text-base leading-[19.2px] tracking-[2.7px] md:hidden">00</span>HOME</a></Link></li>
            <li className={`font-body2 text-base leading-[19.2px] tracking-[2.7px]  pb-12
             md:h-[17px] md:left-[19.94%] md:right-[56.18%] md:top-[calc(50%-17px/2-0.5px)] md:leading-[17px] md:tracking-[2.3625px]
             md:text-[14px] md:absolute
            ${router.pathname === "/destination" ? "border-b-4": ""}`}><Link href="/destination"><a><span className="w-[15px] h-[19px]   font-body2 font-bold text-base leading-[19.2px] tracking-[2.7px] md:hidden">01</span> DESTINATION</a></Link></li>
            <li className={`font-body2 text-base leading-[19.2px] tracking-[2.7px] 
             md:h-[17px] md:left-[55.62%] md:right-[34.55%] md:top-[calc(50%-17px/2-0.5px)] md:leading-[17px] md:tracking-[2.3625px]
            md:text-[14px] md:absolute pb-12 ${router.pathname === "/crew" ? "border-b-4": ""}`}><Link href="/crew"><a><span className=" w-[17px] h-[19px] font-body2 font-bold text-base leading-[19.2px] tracking-[2.7px] md:hidden">02</span > CREW</a></Link></li>
            <li className={`font-body2 text-base leading-[19.2px] tracking-[2.7px]  
            md:h-[17px] md:left-[75.84%] md:right-[0.56%] md:top-[calc(50%-17px/2-0.5px)] md:leading-[17px] md:tracking-[2.3625px]
            md:text-[14px] md:absolute   pb-12 ${router.pathname === "/technology" ? "border-b-4": ""}`}><Link href="/technology"><a><span className=" w-[17px] h-[19px] font-body2 font-bold text-base leading-[19.2px] tracking-[2.7px] md:hidden">03</span> TECHNOLOGY</a></Link></li>
          </ul>
        </nav>
      </header>
    )
}