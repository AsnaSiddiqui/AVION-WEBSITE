"use client"
import {createContext,useReducer} from "react"


export const CartContext = createContext(undefined)
export default function CartData({children}){

    let initailState = {
        cart:[]
    }

    const reduce = (state,action)=>{

        let { name , id , description , price , image , quality  } = action.payload

        let productData = {
            productName:name,
            productId: id,
            productDescription: description,
            productPrice: price,
            productQuantity: quality,
            productImage: image
        }

        if(action.type === "ADDTOCART"){
            // double product add to cart
            if(state.cart.find((elem)=>elem.productId == action.payload.id)){
                let increaseQuantity = state.cart.map((elem)=>{
                    return {...elem , productQuantity : elem.productQuantity + quality}
                })
                console.log(increaseQuantity)
                console.log({...state , cart:increaseQuantity})
                return {...state , cart:increaseQuantity}
            }
            return{...state , cart:[...state.cart , productData]}
        }
        
        if(action.type == "REMOVE_ITEM"){
            const {id} = action.payload
            const updatedData = state.cart.filter((curElem)=> curElem.productId !== id)
            return {...state , cart:updatedData}
        }
}
    function addToCart (name,id,description,price,image , quality){
        return dispatch({ type:"ADDTOCART" , payload:{name , id , description , price , image , quality}})
    }

    function remove(id){
        console.log(id)
        return dispatch({ type:"REMOVE_ITEM" , payload:{id}})
    }

    let [state , dispatch] = useReducer( reduce , initailState)

    return(
        <CartContext.Provider value={{ state , addToCart , remove}}>{children}</CartContext.Provider>
    )
}