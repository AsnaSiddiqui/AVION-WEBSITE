"use client"

import Image from "next/image";
import Delivery from "@/app/image/Delivery.png"
import cross from "@/app/image/cross.png"
import Search from "@/app/image/Search.png"
import Cart from "@/app/image/Shopping--cart.png"
import Id from "@/app/image/User--avatar.png"
import Menu from "@/app/image/menu.png"
import Link from "next/link";
import { useAuth, UserButton } from "@clerk/nextjs";
import { IoMdClose } from "react-icons/io";


export default function Header3(){

    const {userId} = useAuth()

    function openMenu(){
        let menu  = document.getElementById("open-menu")
        let close  = document.getElementById("close-menu")
        let mobile_header  = document.getElementById("mobile-header")


            mobile_header.style.display="block"
            close.style.display="flex"
            menu.style.display="none"

            close.addEventListener("click",()=>{
                mobile_header.style.display="none"
                close.style.display="none"
                menu.style.display="block"
            })
    }

    return(
        <div className="header3 text-[10px]">

            {/* Desktop-header */}
        <div className="desktop-header" >
             <div className="top flex w-[100] h-[4em] text-[1.5em]  bg-[#2A254B] text-white justify-center items-center">
                
                <div className="flex justify-center  relative w-full gap-[1em]">
                        <Image src={Delivery} alt="logo"/>
                        <h4>Free delivery on all orders over &pound;50 with code easter checkout</h4>
                        <div className="absolute right-[2em]">
                            <Image className=" w-[2em] h-[2em] " src={ cross} alt="cross"/>
                        </div>
                </div >
                
            </div>

            <div className="middle">
                
            <div className="middle flex justify-between m-[2em] ">
                <h2 className="text-[2.3em] font-clashdisplay font-medium tracking-wide">Avion</h2>
                <div className="flex gap-[1em] items-center">
                    <ul className="flex gap-[2em] text-[1.5em] pr-[1em] text-[#726E8D]">
                        <li>About us</li>
                        <li>Contact</li>
                        <li>Blog</li>
                    </ul>
                    <Link href="/addtocart"><Image  className="w-[2em] h-[2em]" src={Cart} alt="image"/></Link>
                    {userId ? <UserButton/> : <Link href="/sign-in"><Image  className="w-[2em] h-[2em]" src={Id} alt="image"/></Link>}
                </div>

            </div>

            <div className="last bg-[#e2e0e0] h-[6em] p-[2em]">
                <ul className="flex justify-center  text-[#726E8D] text-[2em] list-none gap-[2em] ">
                    <Link href="/productlisting2"><li>All products</li></Link>
                    <li>Plant pots</li>
                    <li>Ceramics</li>
                    <li>Tables</li>
                    <li>Chairs</li>
                    <li>Crockery</li>
                    <li>Tableware</li>
                    <li>Cutlery</li>
                </ul>
            </div>

            </div>
        </div>

        {/* Mobile-header */}

        <div className="mobile-header  m-[2em] hidden">
                <div className="flex justify-between" >
                    <h2 className="text-[4em]">Avion</h2>
                    <div className="flex gap-[3em] mt-[2em] items-center">
                        <div className=" flex items-center gap-[1em] ">
                            <Image className="w-[2em] h-[2em]" src={Search} alt="image"/>
                            <input className="bg-[#b4b6b666] p-[1em] text-[1em] border-[0.2em] border-[#9b9b9b]" type="text" placeholder="search" />
                        </div>
                        <Image className="w-[2em] h-[2em]" src={Menu} onClick={()=>openMenu()} id="open-menu" alt="image"/>
                    </div>
                </div>
                <div id="mobile-header" className="categories absolute top-0 hidden right-[0] w-[30em] p-[2em] bg-white h-screen text-black ">
                    <div className="flex justify-end items-center">
                        <IoMdClose className="text-[2.5em]"  id="close-menu"/>
                    </div>
                    <div className="my-[3em]">
                        {userId ? <UserButton/> : <Link href="/sign-in"><Image  className="w-[2em] h-[2em]" src={Id} alt="image"/></Link>}
                    </div>
                    <ul className="flex justify-center flex-col text-[2em] list-none gap-[2em] ">
                        <li>Plant pots</li>
                        <li>Ceramics</li>
                        <li>Tables</li>
                        <li>Chairs</li>
                        <li>Crockery</li>
                        <li>Tableware</li>
                        <li>Cutlery</li>
                    </ul>
                </div> 

            </div>
        </div>
    )
}