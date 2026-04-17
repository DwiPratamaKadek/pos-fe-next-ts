
import Image from "next/image"

import { ProductTest as PT } from "@/constans/product"

export default function Card(){
    return(
        <>
            {PT.map((pt, i) => 
                <div key={i} className="bg-gray-50  rounded-xl w-64 p-4 shadow-xl flex flex-col justify-between ">
                    <div className="flex flex-col justify-start">
                        <Image src={pt.image} alt={pt.alt} width={200} height={200}/>
                        <h3>{pt.name}</h3>
                        <p className="text-gray-600">{pt.description}</p>
                    </div>
                    <div className="flex justify-between items-end py-3">
                        <p className="text-xl font-bold">{pt.price}</p>
                        <button className="bg-amber-600 text-white px-2 py-1 rounded-xl">Pesan</button>
                    </div>
                </div>
            )}
        </>
    )
}