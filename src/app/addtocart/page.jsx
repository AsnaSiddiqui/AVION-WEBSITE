"use client"

import Header from "../components/header/page"
import Image from "next/image";
import Footer from "../components/footer/page";
import { useContext } from "react";
import { CartContext } from "@/ContextAPI/cartContext";
import Delete from "@/app/image/bin.png"




export default function Addtocart() {


    let {state , remove} = useContext(CartContext)

        // subtotal Functionality
        const cartPrices = state.cart.map((elem)=>{
            return elem.productPrice * elem.productQuantity
        })
        const total = cartPrices.reduce((accum , elem)=>{
            return accum + elem
        },0)

    return (
        <div >
            <Header />
            <div className="addtocart">
                {/* Desktop add to cart section */}
                <div className="Desktop_addtocart bg-[#f0efef] text-[10px]">
                    <div className="sections1   pl-[11em] pt-[8em] mt-[2em] mb-[10em] pr-[11em]">
                        <h1 className="text-[3em] text-[#2A254B] pb-[3em]">Your shopping cart </h1>
                        <div className="text-[2em] flex justify-between">
                            <h3>Product</h3>
                            <h3>Quantity</h3>
                            <h3>Total</h3>
                        </div>
                        <br />
                        <hr />
                        {state.cart.map((elem,index)=>{
                            return (
                                <div key={index} className="line1 flex gap-[1.5em] w-[100%] mt-[2em]">
                                    <div className="w-[50%] flex gap-[1.5em]">
                                        <Image width={100} height={100} src={elem.productImage} alt="image" />
                                        <div className="flex flex-col  gap-[1em]">
                                            <h5 className="text-[1.8em]">{elem.productName}</h5>
                                            <p className="text-[1.8em] w-[13em]">{elem.productDescription.slice(0,50)}...</p>
                                            <h6 className="text-[1.8em]">&pound;{elem.productPrice}</h6>
                                            <Image className="w-[2em] h-[2em] my-[1.5em] cursor-pointer" width={100} height={100} onClick={()=>remove(elem.productId)} src={Delete} alt="icon"/>
                                        </div>
                                    </div>
                                    <div className="text-[2em] w-[47%]">
                                        <h5>{elem.productQuantity}</h5>
                                    </div>
                                    <div className="text-[2em] w-[3%]">
                                        <h5>&pound;{elem.productPrice * elem.productQuantity}</h5>
                                    </div>
                                    
                                </div>
                            )
                        })}
                        <br />
                        <hr />
                    </div>

                    <div className="sections2 flex flex-col justify-end items-end mr-[8em] gap-[2em]">
                        <div className="flex gap-[1.5em] text-[2em]">
                            <h4 className="text-[#4E4D93]">Subtotal</h4>
                            <h4 className="text-[#2A254B]">&pound;{total}</h4>
                        </div>
                        <p className="text-[#4E4D93] text-[1.5em] ">Texas and shipping are calculated at checkout</p>
                        <div className="bg-[#2A254B] text-[1.5em] mb-[5em] w-[10em] h-[3.5em] flex justify-center text-white hover:text-[#2A254B] hover:bg-[#c5c5c544]">
                            <button>Go to checkout</button>
                        </div>
                    </div>
                </div>

                {/* Mobile add to cart section */}

                <div className="Mobile_addtocart hidden bg-[#f0efef] text-[10px]">
                    <div className="sections1   pl-[11em] pt-[8em] mt-[2em] mb-[10em] pr-[11em]">
                        <h1 className="text-[3em] text-[#2A254B] pb-[3em]">Your shopping cart </h1>
                        <div className="text-[2em] flex justify-between">
                            <h3>Product</h3>
                        </div>
                        <br />
                        <hr />
                        <div className="line1 flex gap-[1.5em] justify-center flex-col items-center mt-[2em]">
                            {state.cart.map((elem,index)=>{
                                return(
                                    <div key={index} className=" flex gap-[3em]">
                                        <Image src={elem.productImage} width={100} height={100} alt="image" />
                                        <div className="flex flex-col  gap-[1em]">
                                            <h5 className="text-[1.8em]">{elem.productName}</h5>
                                            <p className="text-[1.8em] w-[13em]">{elem.productDescription.slice(0,50)}</p>
                                            <h6 className="text-[1.8em]">&pound;{elem.productPrice}</h6>
                                            <div className="quantity text-[1.8em]">
                                                <h5>Quantity</h5>
                                                <h5>{elem.productQuantity}</h5>
                                            </div>
                                            <Image className="w-[2em] h-[2em] my-[1.5em] cursor-pointer" width={100} height={100} onClick={()=>remove(elem.productId)} src={Delete} alt="icon"/>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <br />
                        <hr />
                    </div>

                    <div className="sections2 flex flex-col justify-end items-end mr-[8em] gap-[2em]">
                        <div className="flex gap-[1.5em] text-[2em]">
                            <h4 className="text-[#4E4D93]">Subtotal</h4>
                            <h4 className="text-[#2A254B]">&pound;{total}</h4>
                        </div>
                        <p className="text-[#4E4D93] text-[1.5em] ">Texas and shipping are calculated at checkout</p>
                        <div className="bg-[#2A254B] text-[1.5em] mb-[5em] w-[10em] h-[3.5em] flex justify-center text-white hover:text-[#2A254B] hover:bg-[#c5c5c544]">
                            <button>Go to checkout</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}