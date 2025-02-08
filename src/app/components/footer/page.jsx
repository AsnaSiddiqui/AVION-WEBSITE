import Image from "next/image";
import linkedin from "@/app/image/linkedin (2).png"
import facebook from"@/app/image/facebook.png"
import instagram from "@/app/image/instagram (1).png"
import skype from "@/app/image/skype (1).png"
import twitter from"@/app/image/twitter.png"
import printrest from "@/app/image/pinterest-logo.png"
import Link from "next/link";


export default function Footer(){
    return(
    <div className="footer text-[10px] text-white bg-[#2A254B] p-[3em] px-[10em] w-[100%] ">

        <div className="flex flex-wrap  justify-between items-center gap-[10em] mb-[3em]">
           
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

            <div className="flex flex-col gap-[1.5em]">
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

            <div className="flex flex-col gap-[1.5em]">
                <h3  className="text-[2.5em]">Our company</h3>
                <ul className="text-[1.5em] gap-[1em] flex flex-col">
                   <Link href="/about"><li>About us</li></Link> 
                    <li>Vacancies</li>
                    <li>Contact us</li>
                    <li>Privacy</li>
                    <li>Return Policy</li>
                </ul>
            </div>

            <div className="flex flex-col">
                <h4 className="text-[2.5em]">Join our mailing list</h4>
                <form className="signup-form flex items-center mt-[3em]" action="#" method="POST">
                    <input className="bg-[#ebe9e9] w-[22em] h-[3em] text-[1.5em] p-[1.5em]" type="email" name="email" placeholder="your@email.com" required/>
                     <button className="bg-white text-[#2A254B] w-[5em] h-[3em] text-[1.5em]"type="submit">Sign up</button>
                </form>
            </div>
        </div>

        <hr />

            <div className="copyright  flex justify-between my-[3em]">
                <h5 className="text-[2em] text-center ">Copyright 2022 Avion LTD</h5>
                <div className="logos flex gap-[2.5em]">
                    <Image className="w-[4em] h-[4em]" src={linkedin} alt=""/>
                    <Image className="w-[4em] h-[4em]" src={facebook} alt=""/>
                    <Image className="w-[4em] h-[4em]" src={instagram} alt=""/>
                    <Image className="w-[4em] h-[4em]" src={skype} alt=""/>
                    <Image className="w-[4em] h-[4em]" src={twitter} alt=""/>
                    <Image className="w-[4em] h-[4em]" src={printrest} alt=""/>
                </div>

            </div>

    </div>
    )
        
    
}