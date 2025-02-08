
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({productData}){


    return(
        <div className="hover:scale-105 duration-500 w-[25em] h-[40em] ml-[6em] mt-[3em] mb-[3em]">
            <Link href={`/productlisting2/${productData._id}`}><Image width={170} height={100} className="w-full h-[31em] "src={productData.image} alt="image"/></Link>
            <h4 className="text-[2em] mt-[1em] mb-[0.5em]">{productData.name}</h4>
            <h5 className="text-[1.8em]">&pound;{productData.price}</h5>
        </div> 
    )
}