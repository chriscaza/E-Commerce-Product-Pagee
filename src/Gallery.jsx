import Producto1Grande from "./assets/grande-product-1.jpg"
import Producto2Grande from "./assets/grande-product-2.jpg"
import Producto3Grande from "./assets/grande-product-3.jpg"
import Producto4Grande from "./assets/grande-product-4.jpg"
import Producto1Chico from "./assets/chico-product-1.jpg"
import Producto2Chico from "./assets/chico-product-2.jpg"
import Producto3Chico from "./assets/chico-product-3.jpg"
import Producto4Chico from "./assets/chico-product-4.jpg"
import { useState } from "react"

const Gallery = () => {

    const data = [ 

        Producto1Grande,
        Producto2Grande,
        Producto3Grande,
        Producto4Grande,

    ]

    const[index, setIndex] = useState(0) 
    const[show, setShow] = useState(true) 

    return (

        <div className="w-full">
            <div className="w-full mb-6">
                <img src={ data[index] } className="rounded-xl"/>
            </div>
            <div className="flex gap-6">
                <button onClick={ () => setIndex( 0 )} className="relative" >
                    <img src={ Producto1Chico } className="rounded-lg focus:border-2"/>
                    <div className="bg-paleOrange w-full h-full rounded-lg absolute top-0 bg-opacity-40" hidden={show}></div>
                </button>
                <button onClick={ () => setIndex( 1 ) } className="relative">
                    <img src={ Producto2Chico } className="rounded-lg"/>
                    <div className="bg-paleOrange w-full h-full rounded-lg absolute top-0 bg-opacity-40" hidden={show}></div>
                </button>
                <button onClick={ () => setIndex( 2 ) } className="relative">
                    <img src={ Producto3Chico } className="rounded-lg"/>
                    <div className="bg-paleOrange w-full h-full rounded-lg absolute top-0 bg-opacity-40" hidden={show}></div>
                </button>
                <button onClick={ () => setIndex( 3 ) } className="relative">
                    <img src={ Producto4Chico } className="rounded-lg"/>
                    <div className="bg-paleOrange w-full h-full rounded-lg absolute top-0 bg-opacity-40" hidden={show}></div>
                </button>
            </div>
        </div>

    )

}

export default Gallery