"use client"

import Image from "next/image";
import Search from "@/app/image/Search.png"
import Cart from "@/app/image/Shopping--cart.png"
import Id from "@/app/image/User--avatar.png"
import Menu from "@/app/image/menu.png"
import Link from "next/link";
import { useAuth, UserButton } from "@clerk/nextjs";
import { IoMdClose } from "react-icons/io";

export default function Header(){
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
        <div className="header text-[10px]">
            {/* Desktop Header */}
            <div className="desktop-header ">
                <div className="flex justify-between  m-[1.5em]">
                    <div className=" flex items-center gap-[1em] ">
                        <Image className="w-[2em] h-[2em]" src={Search} alt="image"/>
                        <input className="bg-[#b4b6b666] p-[1em] text-[1em] border-[0.2em] border-[#9b9b9b]" type="text" placeholder="search" />
                    </div>
                    <h2 className="text-[2.3em] font-clashdisplay font-thin">Avion</h2>
                    <div className="flex items-center gap-[1em]">
                    <Link href="/addtocart"><Image  className="w-[2em] h-[2em]" src={Cart} alt="image"/></Link>
                    {userId ? <UserButton/> : <Link href="/sign-in"><Image  className="w-[2em] h-[2em]" src={Id} alt="image"/></Link>}
                    </div>
                </div>
                <hr />

                <div id="categories" className="Categories mt-[1em] text-[#726E8D] ">
                    <ul className="flex justify-center text-[2em] list-none gap-[2em] ">
                        <li><Link href="/components/header/Plant Pots">Plant pots</Link></li>
                        <li><Link href="/components/header/Ceramics">Ceramics</Link></li>
                        <li><Link href="/components/header/Tables">Tables</Link></li>
                        <li><Link href="/components/header/Chairs">Chairs</Link></li>
                        <li><Link href="/components/header/Crockory">Crockery</Link></li>
                        <li><Link href="/components/header/Tableware">Tableware</Link></li>
                        <li><Link href="/components/header/Cutlery">Cutlery</Link></li>
                    </ul>
                </div>
            </div>
            {/* Mobile Header */}
            <div className="mobile-header relative m-[2em] hidden">
                <div className="flex justify-between" >
                    <h2 className="text-[4em]">Avion</h2>
                    <div className="flex gap-[3em] mt-[2em] items-center">
                        <div className=" flex items-center gap-[1em] ">
                            <Image className="w-[2em] h-[2em]" src={Search} alt="image"/>
                            <input className="bg-[#b4b6b666] p-[1em] text-[1em] border-[0.2em] border-[#9b9b9b]" type="text" placeholder="search" />
                        </div>
                        <Image className="w-[2em] h-[2em]" src={Menu} onClick={()=>openMenu()} id="open-menu" alt="image"/>
                    </div>


            {/* Menu button click */}

                <div id="mobile-header" className="categories absolute top-0 hidden right-[0] w-[30em] p-[2em] bg-white h-screen text-black ">
                    <div className="flex justify-end items-center">
                        <IoMdClose className="text-[2.5em]" id="close-menu"/>
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

            
        </div>

    )
}