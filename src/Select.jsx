import Minus from './assets/icon-minus.svg?react'
import Plus from './assets/icon-plus.svg?react'
import Carrito from './assets/icon-cart.svg?react'
import { useContext, useState } from "react"
import { CantidadContext } from './main'

const Select = () => {

    const[items, setItems] = useState(0); 

    const[show1, setShow1] = useState(true);
    const[show2, setShow2] = useState(true);
    const[show3, setShow3] = useState(true);

    const { cantidad, setCantidad } = useContext (CantidadContext);

    const precio = 125.00;
    const producto = "Fall Limited Edition Sneakers"

    function handle() {
        setCantidad(cantidad + items);
    }

    return(

        <div className="w-full px-4">
            <div className='mb-1 md:mb-3'>
                <h3 className="text-orange font-bold text-xs tracking-wide md:text-center lg:text-left">SNEAKER COMPANY</h3>
            </div>
            <div className='mb-3 md:mb-5'>
                <h1 className="text-2xl md:text-4xl font-bold text-veryDarkBlue tracking-wide md:text-center lg:text-left">{producto}</h1>
            </div>
            <div className='mb-4'>
                <p className="text-sm text-darkGrayishBlue md:text-center lg:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat neque doloremque ducimus corrupti, necessitatibus sed voluptatum accusamus officia enim vel quibusdam dignissimos blanditiis, at odit.</p>
            </div>
            <div className='mb-4 flex justify-between md:justify-center gap-3 lg:block'>
                <div className="flex items-center gap-3">
                    <p className="text-2xl font-bold text-veryDarkBlue">${precio}</p>
                    <div className="bg-paleOrange h-auto p-1 pt-0 rounded-md">
                        <p className="text-orange leading-4 font-bold">50%</p>
                    </div>
                </div>
                <div>
                    <p className="text-grayishBlue line-through text-xl font-bold">$250</p>
                </div>
            </div>
            <div className="w-full md:flex gap-5">
                <div className="flex w-full h-12 justify-stretch mb-3 md:mb-0">
                    <button className="bg-lightGrayishBlue w-full text-orange font-medium text-4xl flex justify-center items-center leading-none rounded-l-md relative" onClick={ () => setItems(items == 0 ? 0 : items - 1) } onMouseOver={ () => setShow3( false ) } onMouseLeave={ () => setShow3( true ) } >
                        <Minus/>
                        <div className='absolute top-0 left-0 bg-paleOrange bg-opacity-25 w-full h-full rounded-l-md' hidden={show3}></div>
                    </button>
                    <div className="bg-lightGrayishBlue w-full px-3 flex justify-center items-center">
                        <p className="font-bold text-veryDarkBlue">{items}</p>
                    </div>
                    <button className="bg-lightGrayishBlue w-full text-orange font-medium text-4xl flex justify-center items-center leading-none rounded-r-md relative" onClick={ () => setItems(items + 1) } onMouseOver={ () => setShow2( false ) } onMouseLeave={ () => setShow2( true ) } >
                        <Plus/>
                        <div className='absolute top-0 left-0 bg-paleOrange bg-opacity-25 w-full h-full rounded-r-md' hidden={show2}></div>
                    </button>
                </div>
                <div className='w-full h-12'>
                    <button className="bg-orange h-full rounded-md text-white font-semibold leading-3 w-full relative" onMouseOver={ () => setShow1( false ) } onMouseLeave={ () => setShow1( true ) } onClick={ () => handle() }>
                        <><Carrito className="fill-white inline mr-3"/>Add to cart</>
                        <div className='absolute top-0 bg-paleOrange bg-opacity-25 w-full h-full rounded-md' hidden={show1}></div>
                    </button>
                </div>
            </div>
        </div>

    )

}

export default Select