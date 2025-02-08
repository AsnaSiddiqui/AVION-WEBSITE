"use client"

import { MyContext } from "@/ContextAPI/productContext"
import { useContext } from "react"
import ProductCard from "../../productCard"

export default function Category({params}){

    let {category} = params

    let data  = useContext(MyContext)

    data.map((elem,index)=>{
        console.log(elem.category)
        if(elem.category.name === category){
            return <ProductCard key={index} productData={elem} />
        }
    })
}