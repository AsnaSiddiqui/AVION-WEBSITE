"use client"

import { createContext, useState } from "react";



export const SearchContext = createContext(undefined);


export default function SearchData({children}){

    const [ searchValue , setSearchValue ] = useState("")

    function searchItems(value){
        return setSearchValue(value)
    }
    return(
        <SearchContext.Provider value={{ searchValue , searchItems }}>{children}</SearchContext.Provider>
    )
}