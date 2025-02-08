"use client"

import Image from "next/image"; 
import Header from "../components/header/page"
import Frame from "../image/Frame 143.png"
import Footer from "../components/footer/page";
import { useContext } from "react";
import { MyContext } from "@/ContextAPI/productContext";
import ProductCard from "../components/productCard";


export default function Productlisting2(){

    let data = useContext(MyContext)

    return(
        <div>
            <Header/>
            <div className="productlisting mt-[1.5em] mb-[5em] text-[10px]">
                <Image src={Frame} alt="frame"/>
                <div className="flex justify-between text-[#2A254B] m-[1em] text-[1.8em]">
                    <div className="">
                        <ul className="flex gap-[1.5em]">
                            <li>Category</li>
                            <li>Product type</li>
                            <li>Price</li>
                            <li>Brand</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex gap-[2em]">
                            <li>Sorting by:</li>
                            <li>Date added</li>
                        </ul>
                    </div>
                </div>
                  
               <div className="flex flex-wrap justify-center items-center px-[5em] gap-[2em]">
                    {data.map((elem,index)=>{
                        return(
                            <ProductCard key={index} productData={elem}/>
                        )
                    })}
               </div>

              
            
            </div>
 
            <Footer/>

        </div>
    )
}