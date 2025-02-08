import Image from "next/image"
import linkedin from "@/app/image/linkedin (2).png"
import facebook from"@/app/image/facebook.png"
import instagram from "@/app/image/instagram (1).png"
import skype from "@/app/image/skype (1).png"
import twitter from"@/app/image/twitter.png"
import printrest from "@/app/image/pinterest-logo.png"
import Link from "next/link"


export default function Footer2(){
    return(
        <div className="footer2 text-[10px]  text-white bg-[#2A254B] p-[6em] w-[100%]  ">
            <div className="flex flex-wrap justify-center items-center gap-[10em] mb-[3em]">
           
          <div className="flex flex-col gap-[2em] mb-[3em]">
                <h3 className="text-[3em]">Avion</h3>
               <ul className="text-[1.5em] gap-[1em] flex flex-col "> 
                    <li>21 New York Street</li>
                    <li>New York City</li>
                    <li>United States of America</li>
                    <li>432 34</li>
                </ul>
          </div>

          <div className=" flex flex-col gap-[2em] mb-[13em]">
                <h3 className="text-[2em]">Social links</h3>
                <div className="logos flex flex-wrap gap-[2.5em]">
                    <Image className="w-[4em] h-[4em]" src={linkedin} alt=""/>
                    <Image className="w-[4em] h-[4em]" src={facebook} alt=""/>
                    <Image className="w-[4em] h-[4em]" src={instagram} alt=""/>
                    <Image className="w-[4em] h-[4em]" src={skype} alt=""/>
                    <Image className="w-[4em] h-[4em]" src={twitter} alt=""/>
                    <Image className="w-[4em] h-[4em]" src={printrest} alt=""/>
                </div>
          </div>
          
          
           <div className="flex flex-col gap-[1.5em]">
               <h3 className="text-[2.5em]">Menu</h3>
               <ul className="text-[1.5em] gap-[1em] flex flex-col"> 
                    <li >New arrivals</li>
                    <li>Best sellers</li>
                    <li>Recently viewed</li>
                    <li>Popular this week</li>
                    <li>All products</li>
               </ul>
           </div>

           <div className="flex flex-col gap-[1.5em] mb-[3em]">
               <h3  className="text-[2.5em] pt-[1em]">Categories</h3>
               <ul className="text-[1.5em] gap-[1em] flex flex-col">
                   <li>Crockery</li>
                   <li>Furniture</li>
                   <li>Homeware</li>
                   <li>Plant pots</li>
                   <li>Chairs</li>
                   <li>Crockery</li>
               </ul>
           </div>

           <div className="flex flex-col gap-[1.5em] mb-[3em]">
               <h3  className="text-[2.5em] w-[7em]">Our company</h3>
               <ul className="text-[1.5em] gap-[1em] flex flex-col">
                   <Link href="/about"><li>About us</li></Link>
                   <li>Vacancies</li>
                   <li>Contact us</li>
                   <li>Privacy</li>
                   <li>Return Policy</li>
               </ul>
           </div>

          
            </div>

            <hr />

            <div className="copyright flex justify-between mt-[3em] ">
                <h5 className="text-[2em]  ">Copyright 2022 Avion LTD</h5>
            </div>

        </div>
    )
}