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
    const[hover1, setHover1] = useState(true) 
    const[hover2, setHover2] = useState(true) 
    const[hover3, setHover3] = useState(true) 
    const[hover4, setHover4] = useState(true) 

    const[click1, setClick1] = useState(true) 
    const[click2, setClick2] = useState(true) 
    const[click3, setClick3] = useState(true) 
    const[click4, setClick4] = useState(true) 

    const Clicked1 = () => {

        setIndex( 0 );
        setHover1(true);
        setClick1(false);
        setClick2(true);
        setClick3(true);
        setClick4(true);

    }

    const Clicked2 = () => {

        setIndex( 1 );
        setHover2(true);
        setClick1(true);
        setClick2(false);
        setClick3(true);
        setClick4(true);

    }

    const Clicked3 = () => {

        setIndex( 2 );
        setHover3(true);
        setClick1(true);
        setClick2(true);
        setClick3(false);
        setClick4(true);

    }

    const Clicked4 = () => {

        setIndex( 3 );
        setHover4(true);
        setClick1(true);
        setClick2(true);
        setClick3(true);
        setClick4(false);

    }

    
    return (

        <div className="w-full">
            <div className="w-full mb-6">
                <img src={ data[index] } className="rounded-xl"/>
            </div>
            <div className="flex gap-6">
                <button onClick={ Clicked1 } className="relative" onMouseOver={ () => click1 ? setHover1(false) : null } onMouseLeave={ () => click1 ? setHover1(true) : null } >
                    <img src={ Producto1Chico } className="rounded-lg"/>
                    <div className="bg-paleOrange w-full h-full rounded-lg absolute top-0 bg-opacity-25" hidden={hover1}></div>
                    <div className="bg-paleOrange w-full h-full rounded-lg absolute top-0 bg-opacity-50 border-orange border-2" hidden={click1}></div>
                </button>
                <button onClick={ Clicked2 } className="relative" onMouseOver={ () => click2 ? setHover2(false) : null } onMouseLeave={ () => click2 ? setHover2(true) : null }>
                    <img src={ Producto2Chico } className="rounded-lg"/>
                    <div className="bg-paleOrange w-full h-full rounded-lg absolute top-0 bg-opacity-25" hidden={hover2}></div>
                    <div className="bg-paleOrange w-full h-full rounded-lg absolute top-0 bg-opacity-50 border-orange border-2" hidden={click2}></div>
                </button>
                <button onClick={ Clicked3 } className="relative" onMouseOver={ () => click3 ? setHover3(false) : null } onMouseLeave={ () => click3 ? setHover3(true) : null }>
                    <img src={ Producto3Chico } className="rounded-lg"/>
                    <div className="bg-paleOrange w-full h-full rounded-lg absolute top-0 bg-opacity-25" hidden={hover3}></div>
                    <div className="bg-paleOrange w-full h-full rounded-lg absolute top-0 bg-opacity-50 border-orange border-2" hidden={click3}></div>
                </button>
                <button onClick={ Clicked4 } className="relative" onMouseOver={ () => click4 ? setHover4(false) : null } onMouseLeave={ () => click4 ? setHover4(true) : null }>
                    <img src={ Producto4Chico } className="rounded-lg"/>
                    <div className="bg-paleOrange w-full h-full rounded-lg absolute top-0 bg-opacity-25" hidden={hover4}></div>
                    <div className="bg-paleOrange w-full h-full rounded-lg absolute top-0 bg-opacity-50 border-orange border-2" hidden={click4}></div>
                </button>
            </div>
        </div>

    )

}

export default Gallery