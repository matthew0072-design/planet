import {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'
import path from '../public/Path.png'




export default function Header() {
  const router = useRouter()
const [isNavOpen, setIsNavOpen] = useState(false)


    return (
        <header className="pt-6 w-screen mb-4 relative md:pt-0 
        ">

          <div className='flex w-auto justify-between
          md:w-[45.5625rem] md:h-24  md:mx-auto md:flex md:justify-between md:items-center
          lg:w-[86.5625rem]  lg:mx-0 lg:ml-[3.4375rem]
          '>
            
          <div className="w-10 h-10 rounded-full bg-white ml-3">
          <Image src={path}  alt="logo"/>
          
        </div>
        <span className='lg:w-[29.5625rem] lg:h-[1px] lg:border lg:opacity-25 '></span>
         <nav>

         <section className="MOBILE-MENU md:hidden ">
       {isNavOpen ? (
        <div className="bg-gray-700 translate-x-0 ease-in-out duration-500 min-h-screen flex flex-col  absolute top-0 right-0 z-[100] w-[65%]">
        <div onClick={() => setIsNavOpen(!isNavOpen)} className="self-end pr-4 pt-8"   >
      <svg xmlns="http://www.w3.org/2000/svg" 
      className="animate-pulse hover:cursor-pointer"
      width="20" 
      height="21">
        <g fill="#D0D6F9" fillRule="evenodd">
          <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/>
          <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/>
          </g>
        </svg>
      </div>
      <ul className=" mt-8 p-6 w-auto h-[15rem]  flex flex-col justify-between   ">
        <li className={`
        ${router.pathname === "/" ? "border-b-2": ""} w-[4.375rem] h-7 hover:opacity-75 `}><Link href="/"><a className="font-body2 text-base leading-5 tracking-[2.7px] text-[#FFFFFF] "><span className="font-[Barlow-Condensed] font-bold leading-5 tracking-[2.7px] text-[#FFFFFF] ">00</span>  HOME</a></Link></li>
        <li className={`
        ${router.pathname === "/destination" ? "border-b-2": ""} w-[8.125rem] h-7 hover:opacity-75`}><Link href="/destination"><a className='font-body2 text-base leading-5 tracking-[2.7px] text-[#FFFFFF] '><span className="font-[Barlow-Condensed] font-bold leading-5 tracking-[2.7px] text-[#FFFFFF] ">01</span>  DESTINATION</a></Link></li>
        <li className={` 
         
         ${router.pathname === "/crew" ? "border-b-2": ""} w-[4.4375rem] h-7 hover:opacity-75`}><Link href="/crew"><a className='font-body2 text-base leading-5 tracking-[2.7px] text-[#FFFFFF] '><span className="font-[Barlow-Condensed] font-bold leading-5 tracking-[2.7px] text-[#FFFFFF]  ">02</span >  CREW</a></Link></li>
        <li className={`  
        
         ${router.pathname === "/technology" ? "border-b-2": ""} w-[7.9375rem] h-7 hover:opacity-75`}><Link href="/technology"><a className='font-body2 text-base leading-5 tracking-[2.7px] text-[#FFFFFF] '><span className="font-[Barlow-Condensed] font-bold leading-5 tracking-[2.7px] text-[#FFFFFF] ">03</span>  TECHNOLOGY</a></Link></li>
      </ul>
    </div>
  
       ):(
        <div className="h-5 flex  flex-col items-center justify-between pr-5 mt-2  " onClick={() => setIsNavOpen(!isNavOpen)}>
            
        <svg xmlns="http://www.w3.org/2000/svg" 
        className='animate-pulse hover:cursor-pointer'
        width="24"
         height="21">
          <g fill="#D0D6F9" fillRule="evenodd">
            <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g>
            </svg>
      </div>
    
       )

       }  
       
</section>       
          
      
  <ul className="hidden 
         md:flex md:w-[28.125rem] justify-around  md:h-24  md:items-center
        lg:bg-white/[0.05]  lg:w-[40rem]  
         
         ">
            <li className={`
            ${router.pathname === "/" ? "border-b-4": ""}`}><Link href="/"><a className="md:py-5 md:block md:font-body2 md:text-sm md:leading-4 md:tracking-[2.3625px] md:text:[#FFFFFF] lg:text-base lg:leading-5 lg:tracking-[2.7px] lg:py-9 "><span className='md:hidden lg:font-bold lg:leading-5 lg:inline  lg:text-[#FFFFFF] lg:font-[Barlow-Condensed] lg:tracking-[2.7px]  '>00</span> HOME</a></Link></li>
            <li className={`
            ${router.pathname === "/destination" ? "border-b-4": ""}`}><Link href="/destination"><a className="md:block md:py-5 md:font-body2 md:text-sm md:leading-4 md:tracking-[2.3625px] md:text:[#FFFFFF] lg:text-base lg:leading-5 lg:tracking-[2.7px] lg:py-9"><span className='md:hidden lg:inline lg:font-bold lg:leading-5 lg:text-[#FFFFFF] lg:font-[Barlow-Condensed] lg:tracking-[2.7px]  '>01</span> DESTINATION</a></Link></li>
            <li className={` 
             
             ${router.pathname === "/crew" ? "border-b-4": ""}`}><Link href="/crew"><a className="md:py-5 md:block md:font-body2 md:text-sm md:leading-4 md:tracking-[2.3625px] md:text:[#FFFFFF] lg:text-base lg:leading-5 lg:tracking-[2.7px] lg:py-9"><span className='md:hidden lg:inline lg:font-bold lg:leading-5 lg:text-[#FFFFFF] lg:font-[Barlow-Condensed] lg:tracking-[2.7px]  '>02</span>  CREW</a></Link></li>
            <li className={`  
            
             ${router.pathname === "/technology" ? "border-b-4": ""}`}><Link href="/technology"><a className="md:py-5 md:block md:font-body2 md:text-sm md:leading-4 md:tracking-[2.3625px] md:text:[#FFFFFF] lg:text-base lg:leading-5 lg:tracking-[2.7px] lg:py-9"><span className='md:hidden lg:inline lg:font-bold lg:leading-5 lg:text-[#FFFFFF] lg:font-[Barlow-Condensed] lg:tracking-[2.7px]  '>03</span> TECHNOLOGY</a></Link></li>
          </ul>
         
         </nav>
        </div>  
        
          
          
        
      </header>
    )
}