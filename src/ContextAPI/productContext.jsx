"use client"

import { createContext, useEffect, useState } from "react"
import { client } from "@/sanity/lib/client";

export const MyContext = createContext(undefined);

export default function ProductData({children}){

    const [data , setData] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            try {
                    const result = await client.fetch("*[_type == 'product']{category,name,_id,features,dimensions,'image':image.asset->url,description ,price}") 
                    setData(result);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            };
        
            fetchData();
    },[])

    return(
        <MyContext.Provider value={data}>
            {children}
        </MyContext.Provider>
    )
}