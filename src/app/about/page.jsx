import Header3 from "../components/header3/page"
import Image from "next/image"; 
import Link from "next/link";
import rightside from "../image/Image Block.png"
import leftside from "../image/Image (1).png"
import Delivery from "@/app/image/Delivery.png"
import Checkmark from "@/app/image/Checkmark--outline.png"
import Sprout from "@/app/image/Sprout.png"
import Purchase from "@/app/image/Purchase.png"
import Footer2 from "../components/footer2/page";


export default function About(){
    return(
        <div>
            <Header3/>
            <div className="about m-[3em] text-[10px]">
                <div className="section1 flex justify-between m-[5em]  mt-[15em] h-[20em]">
                    <h2 className="text-[#2A254B] text-[3em] w-[20em]">A brand built on a love of craftmenship, quality and outstanding customer service</h2>
                    <div className="bg-[#e2e0e0] h-[5em] w-[15em] text-[#2A254B] flex justify-center items-center hover:text-[#e2e0e0] hover:bg-[#2A254B]">
                        <Link href="/productlisting2" ><button className="text-[1.5em] right" >View our products</button></Link>
                    </div>
                </div>
                <div className="section2 flex  gap-[2em] mb-[9em] ">
                    <div className="rightside bg-[#2A254B]  text-white p-[4em] gap-[2em] flex justify-between flex-col w-[60em] ">
                        <div className="gap-[2em] flex flex-col">
                            <h2 className="text-[3em] ">It started with a small idea</h2>
                            <p className="text-[1.8em] w-[26em]">A global brand with local beginnings. Our story begain in a small studio in South London in early 2014</p>
                        </div>
                        <div className="bg-[#6b6b6b] w-[13em] h-[4em] justify-center flex items-center hover:text-[#2A254B] hover:bg-white">
                        <Link href="/productlisting2" ><button className="text-[1.5em]">View collection</button></Link>
                        </div>
                    </div>
                    <div className="leftside">
                        <Image className="w-[63em]" src={rightside} alt="image"/>
                    </div>
                </div>

                <div className="section3 flex w-full   items-center">
                    <div className="leftside w-[65em]">
                        <Image className="w-[100%] h-[51.5em] object-cover" src={leftside} alt="image"/>
                    </div>
                    <div className="rightside bg-[#ebe7e7] w-[65em]  p-[5em] gap-[2em] flex flex-col   ">
                        <h2 className="text-[#2A254B] text-[3em]">Our service isn&apos;t just personal, it&apos;s actually hyper personally exquisite.</h2>
                        <p className="text-[#505977] text-[1.7em]">When we started Avion, the idea was simple . Make high quality furniture affordable and available for the mess market.</p>
                        <p className="text-[#505977] text-[1.7em]">Handmade,and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique
                        become the hotbed for the London interior design community.</p>
                        <div className="">
                            <button className="bg-[#ffffff] text-[#2A254B] w-[9em] h-[3em] text-[2em] mt-[4em]  hover:bg-[#2A254B] hover:text-white">Get in touch</button>
                        </div>
                    </div>
                </div>

                <div className="section4 text-[#2A254B] mt-[8em] mb-[3em]">
                <h3 className=" flex justify-center text-[2.7em]">What makes our brand different</h3>
                <div className=" flex flex-wrap gap-[2em] ml-[6em] mt-[6em]">
                    <div className="bg-[#F9F9F9] p-[3em]">
                    <Image src={Delivery} alt="delivery"/>
                    <h4 className="text-[2em] pt-[0.5em] pb-[0.5em]">Next day as standard</h4>
                    <p className="text-[1.8em] w-[13em]">Order before 3pm and get your order the next day as standard</p>
                    </div>

                    <div className="bg-[#F9F9F9] p-[3em]">
                    <Image src={Checkmark} alt="delivery"/>
                    <h4 className="text-[2em] pt-[0.5em] pb-[0.5em]">Made by true artisans</h4>
                    <p className="text-[1.8em] w-[13em]">Handmade crafted goods made with real passion and craftmanship</p>
                    </div>

                    <div className="bg-[#F9F9F9] p-[3em]">
                    <Image src={Purchase} alt="delivery"/>
                    <h4 className="text-[2em] pt-[0.5em] pb-[0.5em]">Unbeatable prices</h4>
                    <p className="text-[1.8em] w-[13em]">For our materials and quality you won&apos;t find better prices anywhere</p>
                    </div>

                    <div className="bg-[#F9F9F9] p-[3em]">
                    <Image src={Sprout} alt="delivery"/>
                    <h4 className="text-[2em] pt-[0.5em] pb-[0.5em]">Recycled packaging</h4>
                    <p className="text-[1.8em] w-[13em]">We use 100% recycled to packaging to ensure our footprint is manageable</p>
                    </div>

                </div>
                </div>

                <div className="section5 bg-[#ebe9e9] w-[100%] h-[50em] p-[5em]">
                <div className="bg-white h-[40em] text-[#2A254B] flex flex-col justify-center items-center gap-[2em]">
                    <h1 className="text-[3.5em]">Join the club and get the benefits</h1>
                    <p className="text-[2em] w-[29em] text-center">Sign up for our newsletter and receive exculsive offers on new ranges, sales, pop up stores and more </p>
                    <form className="signup-form mt-[3em]" action="#" method="POST">
                    <input className="bg-[#ebe9e9] w-[15em] h-[3em] text-[1.5em] p-[1.5em]" type="email" name="email" placeholder="your@email.com" required/>
                     <button className="bg-[#2A254B] text-white w-[5em] h-[3em] text-[1.5em]"type="submit">Sign up</button>
                      </form>
                
                </div>

                </div>
            </div>
            <Footer2/>
        </div>
    )
}