import Minus from './assets/icon-minus.svg?react'
import Plus from './assets/icon-plus.svg?react'
import Carrito from './assets/icon-cart.svg?react'
import { useState } from "react"

const Select = () => {

    const[items, setItems] = useState(0); 

    return(

        <div className="w-full">
            <div className='mb-3'>
                <h3 className="text-orange font-bold text-xs tracking-wide">SNEAKER COMPANY</h3>
            </div>
            <div className='mb-5'>
                <h1 className="text-4xl font-bold text-veryDarkBlue tracking-wide">Fall Limited Edition Sneakers</h1>
            </div>
            <div className='mb-4'>
                <p className="text-sm text-darkGrayishBlue">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat neque doloremque ducimus corrupti, necessitatibus sed voluptatum accusamus officia enim vel quibusdam dignissimos blanditiis, at odit.</p>
            </div>
            <div className='mb-4'>
                <div className="flex items-center gap-3">
                    <p className="text-2xl font-bold text-veryDarkBlue">$125.00</p>
                    <div className="bg-paleOrange h-auto p-1 pt-0 rounded-md">
                        <p className="text-orange leading-4 font-bold">50%</p>
                    </div>
                </div>
                <div>
                    <p className="text-grayishBlue line-through text-xl font-bold">$250</p>
                </div>
            </div>
            <div className="w-full flex gap-5">
                <div className="flex">
                    <button className="bg-lightGrayishBlue text-orange font-medium text-4xl px-4 py leading-none rounded-l-md" onClick={ () => setItems(items == 0 ? 0 : items - 1) }>
                        <Minus/>
                    </button>
                    <div className="bg-lightGrayishBlue px-3 flex justify-center items-center">
                        <p className="font-bold text-veryDarkBlue">{items}</p>
                    </div>
                    <button className="bg-lightGrayishBlue text-orange font-medium text-4xl px-3 py-4 leading-none rounded-r-md" onClick={ () => setItems(items + 1) }>
                        <Plus/>
                    </button>
                </div>
                <div className='w-full'>
                    <button className="bg-orange h-full rounded-md text-white font-semibold leading-3 w-full">
                        <Carrito className="fill-white inline mr-3"/>Add to cart
                    </button>
                </div>
            </div>
        </div>

    )

}

export default Select